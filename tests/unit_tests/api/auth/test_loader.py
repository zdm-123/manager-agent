"""Unit tests for manager.api.auth.loader.load_auth_provider."""

import sys
import types

import pytest

from manager.api.auth.header_context_provider import HeaderContextProvider
from manager.api.auth.loader import load_auth_provider
from manager.utils.exceptions import ManagerException


class _DummyAuth:
    """Implements the AuthProvider Protocol structurally."""

    def __init__(self, issuer: str = "", audience: str = ""):
        self.issuer = issuer
        self.audience = audience

    async def authenticate(self, request):  # pragma: no cover - not exercised here
        return None

    def on_evict(self, callback) -> None:  # pragma: no cover
        return None


class _NotAnAuth:
    def __init__(self):
        pass


@pytest.fixture
def fake_module():
    mod_name = "_manager_test_fake_auth_mod"
    mod = types.ModuleType(mod_name)
    mod.DummyAuth = _DummyAuth
    mod.NotAnAuth = _NotAnAuth
    sys.modules[mod_name] = mod
    yield mod_name
    sys.modules.pop(mod_name, None)


def test_default_when_empty():
    provider = load_auth_provider(None, datasource="default")
    assert isinstance(provider, HeaderContextProvider)

    provider = load_auth_provider({}, datasource="default")
    assert isinstance(provider, HeaderContextProvider)

    provider = load_auth_provider({"auth_provider": {}}, datasource="default")
    assert isinstance(provider, HeaderContextProvider)


def test_load_custom_with_kwargs(fake_module):
    cfg = {
        "auth_provider": {
            "class": f"{fake_module}.DummyAuth",
            "kwargs": {"issuer": "iss", "audience": "aud"},
        }
    }
    provider = load_auth_provider(cfg, datasource="ns")
    assert isinstance(provider, _DummyAuth)
    assert provider.issuer == "iss"
    assert provider.audience == "aud"


def test_load_custom_colon_separator(fake_module):
    cfg = {"auth_provider": {"class": f"{fake_module}:DummyAuth"}}
    provider = load_auth_provider(cfg, datasource="ns")
    assert isinstance(provider, _DummyAuth)


def test_invalid_class_path():
    with pytest.raises(ManagerException):
        load_auth_provider({"auth_provider": {"class": "NoModule"}}, datasource="ns")


def test_missing_module():
    with pytest.raises(ManagerException):
        load_auth_provider({"auth_provider": {"class": "nonexistent_pkg_xyz.SomeClass"}}, datasource="ns")


def test_missing_class(fake_module):
    with pytest.raises(ManagerException):
        load_auth_provider({"auth_provider": {"class": f"{fake_module}.MissingClass"}}, datasource="ns")


def test_not_implementing_protocol(fake_module):
    with pytest.raises(ManagerException):
        load_auth_provider({"auth_provider": {"class": f"{fake_module}.NotAnAuth"}}, datasource="ns")


def test_constructor_failure(fake_module):
    with pytest.raises(ManagerException):
        load_auth_provider(
            {"auth_provider": {"class": f"{fake_module}.DummyAuth", "kwargs": {"bad": 1}}},
            datasource="ns",
        )
