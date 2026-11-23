#!/bin/sh
# install.sh - one-liner installer for Manager-Agent on Linux and macOS.
# Installs the latest (or a pinned) release from PyPI.
#
# Usage:
#   curl -fsSL https://raw.githubusercontent.com/datus-ai/datus-agent/main/install.sh | sh
#
# For a development install from GitHub source, use install-dev.sh instead.
#
# Optional environment variables (set on the receiving shell, e.g.
#   curl -fsSL ... | MANAGER_VERSION=0.2.6 sh
# ):
#   MANAGER_VERSION          Pin a PyPI version (e.g. 0.2.6). Default: latest.
#   MANAGER_HOME             Base dir for the venv. Default: $HOME/.manager.
#   MANAGER_BIN_DIR          Where shims are written. Default: $HOME/.local/bin.
#   MANAGER_FORCE=1          Delete and recreate $MANAGER_HOME/venv if it already exists.
#   MANAGER_NO_MODIFY_PATH=1 Skip appending PATH export to shell rc files.

set -eu

PYPI_PACKAGE="manager-agent"
# Console scripts declared in pyproject.toml [project.scripts].
CONSOLE_SCRIPTS="manager manager-agent manager-cli manager-api manager-mcp manager-gateway"

MANAGER_HOME="${MANAGER_HOME:-$HOME/.manager}"
MANAGER_BIN_DIR="${MANAGER_BIN_DIR:-$HOME/.local/bin}"
MANAGER_VERSION="${MANAGER_VERSION:-}"
MANAGER_FORCE="${MANAGER_FORCE:-}"
MANAGER_NO_MODIFY_PATH="${MANAGER_NO_MODIFY_PATH:-}"

VENV_DIR="$MANAGER_HOME/venv"

# Snapshot the user's PATH before we mutate it for uv lookup, so later
# "is bin dir already on PATH" checks reflect the user's real environment.
ORIGINAL_PATH="${PATH:-}"

MARKER_BEGIN="# >>> manager-agent installer >>>"
MARKER_END="# <<< manager-agent installer <<<"

_color_init() {
    if [ -t 1 ] && command -v tput >/dev/null 2>&1 && [ "$(tput colors 2>/dev/null || echo 0)" -ge 8 ]; then
        BOLD=$(tput bold)
        RED=$(tput setaf 1)
        GREEN=$(tput setaf 2)
        YELLOW=$(tput setaf 3)
        BLUE=$(tput setaf 4)
        RESET=$(tput sgr0)
    else
        BOLD=""; RED=""; GREEN=""; YELLOW=""; BLUE=""; RESET=""
    fi
}

info()  { printf '%s==>%s %s\n' "$BLUE" "$RESET" "$1"; }
warn()  { printf '%swarn:%s %s\n' "$YELLOW" "$RESET" "$1" >&2; }
error() { printf '%serror:%s %s\n' "$RED" "$RESET" "$1" >&2; }
die()   { error "$1"; exit 1; }

need_cmd() {
    command -v "$1" >/dev/null 2>&1 || die "required command not found: $1"
}

check_os() {
    uname_s=$(uname -s 2>/dev/null || echo unknown)
    case "$uname_s" in
        Linux|Darwin) ;;
        *)
            error "unsupported OS: $uname_s"
            error "Linux and macOS are supported. On Windows, please install manually:"
            error "    pip install manager-agent"
            exit 1
            ;;
    esac
}

validate_env() {
    if [ -z "${HOME:-}" ] || [ ! -d "$HOME" ]; then
        die "\$HOME is not set or not a directory"
    fi
}

# Make sure a freshly installed uv is on PATH for the current script run.
_extend_path_for_uv() {
    for candidate in "$HOME/.local/bin" "$HOME/.cargo/bin"; do
        case ":$PATH:" in
            *":$candidate:"*) ;;
            *) PATH="$candidate:$PATH"; export PATH ;;
        esac
    done
}

ensure_uv() {
    _extend_path_for_uv
    if command -v uv >/dev/null 2>&1; then
        info "uv already available: $(command -v uv)"
        return 0
    fi
    info "installing uv (astral.sh/uv)..."
    need_cmd curl
    curl -LsSf https://astral.sh/uv/install.sh | sh
    _extend_path_for_uv
    command -v uv >/dev/null 2>&1 || die "uv installation failed; install manually from https://astral.sh/uv"
    info "uv installed: $(command -v uv)"
}

create_venv() {
    mkdir -p "$MANAGER_HOME"
    if [ -d "$VENV_DIR" ]; then
        if [ -n "$MANAGER_FORCE" ]; then
            info "MANAGER_FORCE=1: removing existing venv at $VENV_DIR"
            rm -rf "$VENV_DIR"
        elif [ -x "$VENV_DIR/bin/python" ] && \
             "$VENV_DIR/bin/python" -c 'import sys; sys.exit(0 if sys.version_info[:2]==(3,12) else 1)' >/dev/null 2>&1; then
            info "reusing existing Python 3.12 venv at $VENV_DIR (set MANAGER_FORCE=1 to recreate)"
        else
            warn "existing venv at $VENV_DIR is not Python 3.12; recreating"
            rm -rf "$VENV_DIR"
        fi
    fi
    if [ ! -d "$VENV_DIR" ]; then
        info "creating venv at $VENV_DIR (Python 3.12)"
        # --seed installs pip/setuptools/wheel into the venv so the manager-pip
        # shim and any tool that shells out to `pip` keep working.
        uv venv --python 3.12 --seed "$VENV_DIR"
    fi
    VENV_PY="$VENV_DIR/bin/python"
    [ -x "$VENV_PY" ] || die "venv python not found at $VENV_PY"
}

install_package() {
    if [ -n "$MANAGER_VERSION" ]; then
        spec="${PYPI_PACKAGE}==${MANAGER_VERSION}"
        info "installing $spec from PyPI"
    else
        spec="$PYPI_PACKAGE"
        info "installing latest $PYPI_PACKAGE from PyPI"
    fi
    uv pip install --python "$VENV_PY" --upgrade "$spec"
}

write_shims() {
    mkdir -p "$MANAGER_BIN_DIR"
    # manager-pip is an extra shim so users can add packages into the global venv
    # without activating it: `manager-pip install <pkg>`.
    for name in $CONSOLE_SCRIPTS manager-pip; do
        target="$MANAGER_BIN_DIR/$name"
        case "$name" in
            manager-pip) venv_target="$VENV_DIR/bin/pip" ;;
            *)         venv_target="$VENV_DIR/bin/$name" ;;
        esac
        cat >"$target" <<EOF
#!/bin/sh
# generated by manager-agent install.sh; regenerated on each install
exec "$venv_target" "\$@"
EOF
        chmod +x "$target"
    done
    info "wrote shims to $MANAGER_BIN_DIR: $CONSOLE_SCRIPTS manager-pip"
}

path_contains_bin_dir() {
    # Check the user's original PATH, not the one we mutated to find uv.
    case ":$ORIGINAL_PATH:" in
        *":$MANAGER_BIN_DIR:"*) return 0 ;;
        *) return 1 ;;
    esac
}

rc_has_marker() {
    [ -f "$1" ] && grep -qF "$MARKER_BEGIN" "$1"
}

append_path_block() {
    rc="$1"
    {
        printf '\n%s\n' "$MARKER_BEGIN"
        printf 'export PATH="%s:$PATH"\n' "$MANAGER_BIN_DIR"
        printf '%s\n' "$MARKER_END"
    } >>"$rc"
    info "added $MANAGER_BIN_DIR to PATH in $rc"
}

maybe_update_path() {
    if path_contains_bin_dir; then
        info "$MANAGER_BIN_DIR already on PATH"
        return 0
    fi
    if [ -n "$MANAGER_NO_MODIFY_PATH" ]; then
        warn "MANAGER_NO_MODIFY_PATH=1: not editing shell rc files"
        warn "add this line to your shell rc manually:"
        warn "    export PATH=\"$MANAGER_BIN_DIR:\$PATH\""
        return 0
    fi

    updated=0
    for rc in "$HOME/.zshrc" "$HOME/.bashrc" "$HOME/.bash_profile" "$HOME/.profile"; do
        if [ -f "$rc" ]; then
            if rc_has_marker "$rc"; then
                info "$rc already contains manager-agent PATH block, skipping"
            else
                append_path_block "$rc"
            fi
            updated=1
        fi
    done
    if [ "$updated" -eq 0 ]; then
        append_path_block "$HOME/.profile"
    fi
}

verify_install() {
    info "verifying installation..."
    if ! "$VENV_DIR/bin/manager" --help >/dev/null 2>&1; then
        die "installed manager entry is not callable: $VENV_DIR/bin/manager"
    fi
    if ! "$MANAGER_BIN_DIR/manager" --help >/dev/null 2>&1; then
        die "shim not callable: $MANAGER_BIN_DIR/manager"
    fi
    info "verified."
}

print_summary() {
    cat <<EOF

${GREEN}${BOLD}Manager-Agent installed.${RESET}

  venv:   $VENV_DIR
  shims:  $MANAGER_BIN_DIR
  entry:  $MANAGER_BIN_DIR/manager

Next steps:
  1. Open a new shell, or run ${BOLD}source ~/.zshrc${RESET} (or your rc file) to pick up PATH.
  2. Run ${BOLD}manager${RESET} to launch the REPL, then use ${BOLD}/model${RESET} to configure
     an LLM and ${BOLD}/datasource${RESET} to add a datasource. Run ${BOLD}/init${RESET} inside
     the REPL to generate AGENTS.md for the current project.

To install additional Python packages into the global venv:
  ${BOLD}manager-pip install <package>${RESET}
  (equivalent to ${VENV_DIR}/bin/pip install <package>)

Upgrade later:
  curl -fsSL https://raw.githubusercontent.com/datus-ai/datus-agent/main/install.sh | sh

EOF
}

_color_init
check_os
validate_env
ensure_uv
create_venv
install_package
write_shims
maybe_update_path
verify_install
print_summary
