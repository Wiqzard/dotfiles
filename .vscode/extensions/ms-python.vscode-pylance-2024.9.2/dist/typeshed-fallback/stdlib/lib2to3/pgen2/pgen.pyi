from _typeshed import Incomplete, StrPath
from collections.abc import Iterable, Iterator
from typing import IO, NoReturn, overload

from . import grammar
from .tokenize import _TokenInfo

class PgenGrammar(grammar.Grammar): ...

class ParserGenerator:
    filename: StrPath
    stream: IO[str]
    generator: Iterator[_TokenInfo]
    first: dict[str, dict[str, int]]
    def __init__(self, filename: StrPath, stream: IO[str] | None = None) -> None: ...
    def make_grammar(self) -> PgenGrammar: ...
    def make_first(self, c: PgenGrammar, name: str) -> dict[int, int]: ...
    def make_label(self, c: PgenGrammar, label: str) -> int: ...
    def addfirstsets(self) -> None: ...
    def calcfirst(self, name: str) -> None: ...
    def parse(self) -> tuple[dict[str, list[DFAState]], str]: ...
    def make_dfa(self, start: NFAState, finish: NFAState) -> list[DFAState]: ...
    def dump_nfa(self, name: str, start: NFAState, finish: NFAState) -> list[DFAState]: ...
    def dump_dfa(self, name: str, dfa: Iterable[DFAState]) -> None: ...
    def simplify_dfa(self, dfa: list[DFAState]) -> None: ...
    def parse_rhs(self) -> tuple[NFAState, NFAState]: ...
    def parse_alt(self) -> tuple[NFAState, NFAState]: ...
    def parse_item(self) -> tuple[NFAState, NFAState]: ...
    def parse_atom(self) -> tuple[NFAState, NFAState]: ...
    def expect(self, type: int, value: str | None = None) -> str: ...
    def gettoken(self) -> None: ...
    @overload
    def raise_error(self, msg: object) -> NoReturn: ...
    @overload
    def raise_error(self, msg: str, *args: object) -> NoReturn: ...

class NFAState:
    arcs: list[tuple[str | None, NFAState]]
    def addarc(self, next: NFAState, label: str | None = None) -> None: ...

class DFAState:
    nfaset: dict[NFAState, Incomplete]
    isfinal: bool
    arcs: dict[str, DFAState]
    def __init__(self, nfaset: dict[NFAState, Incomplete], final: NFAState) -> None: ...
    def addarc(self, next: DFAState, label: str) -> None: ...
    def unifystate(self, old: DFAState, new: DFAState) -> None: ...
    def __eq__(self, other: DFAState) -> bool: ...  # type: ignore[override]

def generate_grammar(filename: StrPath = "Grammar.txt") -> PgenGrammar: ...
