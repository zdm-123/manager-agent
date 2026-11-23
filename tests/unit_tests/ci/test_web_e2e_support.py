from pathlib import Path

import pytest

from tests.web_e2e_support import local_chatbot_dist


def test_requires_explicit_local_assets(monkeypatch):
    monkeypatch.delenv("MANAGER_TEST_CHATBOT_DIST", raising=False)
    with pytest.raises(ValueError, match="Set MANAGER_TEST_CHATBOT_DIST"):
        local_chatbot_dist()


@pytest.mark.parametrize("missing", ["manager-chatbot.css", "manager-chatbot.umd.js", "react.production.min.js"])
def test_rejects_incomplete_assets_instead_of_cdn_fallback(tmp_path, monkeypatch, missing):
    for name in ("manager-chatbot.css", "manager-chatbot.umd.js", "react.production.min.js"):
        if name != missing:
            (tmp_path / name).write_text("asset", encoding="utf-8")
    monkeypatch.setenv("MANAGER_TEST_CHATBOT_DIST", str(tmp_path))
    with pytest.raises(ValueError, match=missing):
        local_chatbot_dist()


def test_resolves_complete_local_assets(tmp_path, monkeypatch):
    for name in ("manager-chatbot.css", "manager-chatbot.umd.js", "react.production.min.js"):
        (tmp_path / name).write_text("asset", encoding="utf-8")
    monkeypatch.chdir(tmp_path.parent)
    monkeypatch.setenv("MANAGER_TEST_CHATBOT_DIST", tmp_path.name)
    assert local_chatbot_dist() == Path(tmp_path).resolve()
