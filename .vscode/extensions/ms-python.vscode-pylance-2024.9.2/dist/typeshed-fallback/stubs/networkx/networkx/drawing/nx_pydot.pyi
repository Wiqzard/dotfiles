from _typeshed import Incomplete

from networkx.utils.backends import _dispatch

def write_dot(G, path) -> None: ...
@_dispatch
def read_dot(path): ...
@_dispatch
def from_pydot(P): ...
def to_pydot(N): ...
def graphviz_layout(G, prog: str = "neato", root: Incomplete | None = None): ...
def pydot_layout(G, prog: str = "neato", root: Incomplete | None = None): ...
