from typing import Any

from django.db.migrations.migration import Migration, SwappableTuple
from django.db.migrations.state import ProjectState

RECURSION_DEPTH_WARNING: str

class Node:
    key: tuple[str, str] = ...
    children: set[Node] = ...
    parents: set[Node] = ...
    def __init__(self, key: tuple[str, str]) -> None: ...
    def __lt__(self, other: tuple[str, str] | Node) -> bool: ...
    def __getitem__(self, item: int) -> str: ...
    def add_child(self, child: Node) -> None: ...
    def add_parent(self, parent: Node) -> None: ...
    def ancestors(self) -> list[tuple[str, str]]: ...
    def descendants(self) -> list[tuple[str, str]]: ...

class DummyNode(Node):
    origin: Any = ...
    error_message: Any = ...
    def __init__(
        self, key: tuple[str, str], origin: Migration | str, error_message: str
    ) -> None: ...
    def promote(self) -> None: ...
    def raise_error(self) -> None: ...

class MigrationGraph:
    node_map: dict[tuple[str, str], Node] = ...
    nodes: dict[tuple[str, str], Migration] = ...
    cached: bool = ...
    def __init__(self) -> None: ...
    def add_node(self, key: tuple[str, str], migration: Migration | None) -> None: ...
    def add_dummy_node(
        self, key: tuple[str, str], origin: Migration | str, error_message: str
    ) -> None: ...
    def add_dependency(
        self,
        migration: Migration | str | None,
        child: tuple[str, str],
        parent: tuple[str, str],
        skip_validation: bool = ...,
    ) -> None: ...
    def remove_replaced_nodes(
        self, replacement: tuple[str, str], replaced: list[tuple[str, str]]
    ) -> None: ...
    def remove_replacement_node(
        self, replacement: tuple[str, str], replaced: list[tuple[str, str]]
    ) -> None: ...
    def validate_consistency(self) -> None: ...
    def clear_cache(self) -> None: ...
    def forwards_plan(self, target: tuple[str, str]) -> list[tuple[str, str]]: ...
    def backwards_plan(
        self, target: tuple[str, str] | Node
    ) -> list[tuple[str, str]]: ...
    def iterative_dfs(self, start: Any, forwards: bool = ...) -> Any: ...
    def root_nodes(self, app: str | None = ...) -> list[tuple[str, str]]: ...
    def leaf_nodes(self, app: str | None = ...) -> list[tuple[str, str]]: ...
    def ensure_not_cyclic(self) -> None: ...
    def make_state(
        self,
        nodes: tuple[str, str] | None = ...,
        at_end: bool = ...,
        real_apps: list[str] = ...,
    ) -> ProjectState: ...
    def __contains__(self, node: tuple[str, str] | SwappableTuple) -> bool: ...
