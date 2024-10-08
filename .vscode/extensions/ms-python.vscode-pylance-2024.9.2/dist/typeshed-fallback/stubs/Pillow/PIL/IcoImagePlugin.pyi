from _typeshed import Incomplete
from typing import ClassVar, Literal

from ._imaging import _PixelAccessor
from .ImageFile import ImageFile

class IcoFile:
    buf: Incomplete
    entry: Incomplete
    nb_items: Incomplete
    def __init__(self, buf): ...
    def sizes(self): ...
    def getentryindex(self, size, bpp: bool = False): ...
    def getimage(self, size, bpp: bool = False): ...
    def frame(self, idx): ...

class IcoImageFile(ImageFile):
    format: ClassVar[Literal["ICO"]]
    format_description: ClassVar[str]
    @property
    def size(self): ...
    @size.setter
    def size(self, value) -> None: ...
    im: Incomplete
    def load(self) -> _PixelAccessor: ...
    def load_seek(self) -> None: ...
