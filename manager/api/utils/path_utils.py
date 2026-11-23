"""Path safety utilities — prevent path traversal attacks."""

from pathlib import Path

from manager.utils.exceptions import ManagerException, ErrorCode


def safe_resolve(base: Path, user_path: str) -> Path:
    """Resolve user_path relative to base; raise ManagerException if it escapes base.

    Args:
        base: The base directory path
        user_path: The user-provided path (may contain .., /, etc.)

    Returns:
        The safely resolved Path object

    Raises:
        ManagerException: If the resolved path escapes the base directory
    """
    resolved = (base / user_path).resolve()
    base_resolved = base.resolve()
    if not resolved.is_relative_to(base_resolved):
        raise ManagerException(
            ErrorCode.COMMON_VALIDATION_FAILED,
            message=f"Path '{user_path}' escapes the project root",
        )
    return resolved
