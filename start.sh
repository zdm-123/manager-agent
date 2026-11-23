#!/usr/bin/env bash
# 启动 Manager Web Chatbot（后台常驻）
# 用法: ./start.sh [--port 8501] [--host 0.0.0.0]
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PORT=8501
HOST=0.0.0.0

while [[ $# -gt 0 ]]; do
  case "$1" in
    --port) PORT="$2"; shift 2 ;;
    --host) HOST="$2"; shift 2 ;;
    *) echo "未知参数: $1"; exit 1 ;;
  esac
done

PID_FILE="$ROOT/run/manager-web.pid"
LOG_FILE="$ROOT/logs/web.log"
mkdir -p "$ROOT/run" "$ROOT/logs"

if [[ -f "$PID_FILE" ]] && kill -0 "$(cat "$PID_FILE")" 2>/dev/null; then
  echo "Manager Web 已在运行 (PID $(cat "$PID_FILE")): http://localhost:$PORT"
  exit 0
fi

if [[ ! -x "$ROOT/.venv/bin/datus" ]]; then
  echo "缺少 .venv，请先安装依赖："
  echo "  python3 -m venv .venv"
  echo "  PIP_CACHE_DIR=\$PWD/.pipcache .venv/bin/pip install datus-agent==0.4.5"
  exit 1
fi

# 已安装的 Python 包内部仍硬编码 ~/.datus 与 datus 可执行文件（本次只改部署层），
# 因此 HOME 指向 runtime-home，并把 $HOME/.datus 软链到 manager-home。
export HOME="$ROOT/runtime-home"
mkdir -p "$HOME"
ln -sfn "$ROOT/manager-home" "$HOME/.datus"

# 首次运行：让包自带的 bootstrap 生成 manager-home 下的 template/sample/benchmark
if [[ ! -f "$ROOT/manager-home/sample/duckdb-demo.duckdb" ]]; then
  echo "初始化 manager-home（示例库/模板/日志目录）..."
  "$ROOT/.venv/bin/python" - "$ROOT" <<'PY'
import sys
from pathlib import Path
from datus.configuration.agent_config_loader import _bootstrap_agent_config

_bootstrap_agent_config(Path(sys.argv[1]) / "manager-home" / "conf" / "agent.yml")
PY
fi

# 首次运行：由模板生成实际配置，API Key 从环境变量读取
if [[ ! -f "$ROOT/conf/agent.yml" ]]; then
  if [[ -z "${DEEPSEEK_API_KEY:-}" ]]; then
    echo "缺少 conf/agent.yml，请先设置 DEEPSEEK_API_KEY 再启动："
    echo "  DEEPSEEK_API_KEY=sk-... ./start.sh"
    exit 1
  fi
  sed -e "s|__ROOT__|$ROOT|g" -e "s|__API_KEY__|$DEEPSEEK_API_KEY|g" \
    "$ROOT/conf/agent.yml.example" > "$ROOT/conf/agent.yml"
  chmod 600 "$ROOT/conf/agent.yml"
  echo "已生成 conf/agent.yml"
fi

cd "$ROOT"
setsid nohup "$ROOT/.venv/bin/datus" \
  --config "$ROOT/conf/agent.yml" \
  --web \
  --chatbot-dist "$ROOT/web-assets" \
  --host "$HOST" \
  --port "$PORT" \
  --datasource duckdb_demo \
  >> "$LOG_FILE" 2>&1 &

echo $! > "$PID_FILE"
sleep 3

for _ in $(seq 1 30); do
  if curl -fsS -m 2 -o /dev/null "http://127.0.0.1:$PORT/"; then
    echo "Manager Web 已启动 (PID $(cat "$PID_FILE")): http://localhost:$PORT"
    echo "日志: $LOG_FILE"
    exit 0
  fi
  sleep 2
done

echo "启动超时，请检查日志: $LOG_FILE"; exit 1
