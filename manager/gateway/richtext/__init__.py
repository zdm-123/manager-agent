# Copyright 2025-present DatusAI, Inc.
# Licensed under the Apache License, Version 2.0.
# See http://www.apache.org/licenses/LICENSE-2.0 for details.

"""Markdown IR layer: Markdown -> IR -> platform-specific rich text."""

from manager.gateway.richtext.chunker import chunk_text
from manager.gateway.richtext.escape import slack_escape
from manager.gateway.richtext.ir import MarkdownIR
from manager.gateway.richtext.parser import markdown_to_ir
from manager.gateway.richtext.render import render_ir

__all__ = ["MarkdownIR", "chunk_text", "markdown_to_ir", "render_ir", "slack_escape"]
