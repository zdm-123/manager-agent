# Copyright 2025-present DatusAI, Inc.
# Licensed under the Apache License, Version 2.0.
# See http://www.apache.org/licenses/LICENSE-2.0 for details.

"""
AgentSkills integration for Manager-agent.

This module provides skill discovery, loading, and execution capabilities
following the AgentSkills specification (agentskills.io).

Skills are filesystem-based folders containing SKILL.md files with YAML frontmatter
that define specialized capabilities, workflows, and script execution patterns.
"""

from manager.tools.skill_tools.skill_bundle import calculate_sha256, create_bundle, extract_bundle
from manager.tools.skill_tools.skill_config import SkillConfig, SkillMetadata
from manager.tools.skill_tools.skill_func_tool import SkillFuncTool
from manager.tools.skill_tools.skill_manager import SkillManager
from manager.tools.skill_tools.skill_registry import SkillRegistry

__all__ = [
    "SkillConfig",
    "SkillMetadata",
    "SkillRegistry",
    "SkillManager",
    "SkillFuncTool",
    "create_bundle",
    "extract_bundle",
    "calculate_sha256",
]
