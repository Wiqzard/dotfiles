from collections.abc import Iterable
from typing import AnyStr

__all__ = ["filter", "fnmatch", "fnmatchcase", "translate"]

def fnmatch(name: AnyStr, pat: AnyStr) -> bool: ...
def fnmatchcase(name: AnyStr, pat: AnyStr) -> bool: ...
def filter(names: Iterable[AnyStr], pat: AnyStr) -> list[AnyStr]: ...
def translate(pat: str) -> str: ...
