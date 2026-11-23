"""API Services module.

Consolidated service layer for Manager Agent API.
"""

# Core services
from manager.api.services.manager_service_cache import ManagerServiceCache

# Lazy imports - services are imported only when needed by routes
# This avoids circular dependencies and import errors

__all__ = [
    "ManagerServiceCache",
]


def __getattr__(name):
    """Lazy import of services on demand."""
    if name == "ManagerService":
        from manager.api.services.manager_service import ManagerService

        return ManagerService
    elif name == "ChatService":
        from manager.api.services.chat_service import ChatService

        return ChatService
    elif name == "ChatTaskManager":
        from manager.api.services.chat_task_manager import ChatTaskManager

        return ChatTaskManager
    elif name == "ChatTask":
        from manager.api.services.chat_task_manager import ChatTask

        return ChatTask
    elif name == "CLIService":
        from manager.api.services.cli_service import CLIService

        return CLIService
    elif name == "DatasourceService":
        from manager.api.services.database_service import DatasourceService

        return DatasourceService
    elif name == "ExplorerService":
        from manager.api.services.explorer_service import ExplorerService

        return ExplorerService
    elif name == "MCPService":
        from manager.api.services.mcp_service import MCPService

        return MCPService
    elif name == "KbService":
        from manager.api.services.kb_service import KbService

        return KbService
    elif name == "action_to_sse_event":
        from manager.api.services.action_sse_converter import action_to_sse_event

        return action_to_sse_event
    elif name == "AgentService":
        from manager.api.services.agent_service import AgentService

        return AgentService
    raise AttributeError(f"module {__name__!r} has no attribute {name!r}")
