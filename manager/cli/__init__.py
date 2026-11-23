# Copyright 2025-present DatusAI, Inc.
# Licensed under the Apache License, Version 2.0.
# See http://www.apache.org/licenses/LICENSE-2.0 for details.

"""
Manager-CLI package initialization.
"""

from .autocomplete import SQLCompleter

__all__ = ["ManagerCLI", "SQLCompleter"]


def __getattr__(name: str):
    """Lazy import to avoid circular dependency with agent modules."""
    if name == "ManagerCLI":
        from .repl import ManagerCLI

        return ManagerCLI
    raise AttributeError(f"module {__name__!r} has no attribute {name!r}")
