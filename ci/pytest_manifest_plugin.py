"""Pytest plugin used by nightly manifest collection."""

from __future__ import annotations


def pytest_collection_finish(session):
    print("MANAGER_MANIFEST_NODEIDS_START")
    for item in session.items:
        print(f"MANAGER_MANIFEST_NODEID {item.nodeid}")
    print("MANAGER_MANIFEST_NODEIDS_END")
