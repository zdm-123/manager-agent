"""Authentication plugin interface and default implementations."""

from manager.api.auth.context import AppContext
from manager.api.auth.header_context_provider import HeaderContextProvider
from manager.api.auth.loader import load_auth_provider
from manager.api.auth.provider import AuthProvider, EvictCallback

__all__ = [
    "AppContext",
    "AuthProvider",
    "EvictCallback",
    "HeaderContextProvider",
    "load_auth_provider",
]
