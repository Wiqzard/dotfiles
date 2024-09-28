from collections.abc import Iterable

m: list[list[float]]
m_inv: list[list[float]]
refX: float
refY: float
refZ: float
refU: float
refV: float
lab_e: float
lab_k: float

def husl_to_rgb(h: float, s: float, l: float) -> list[float]: ...
def husl_to_hex(h: float, s: float, l: float) -> str: ...
def rgb_to_husl(r: float, g: float, b: float) -> list[float]: ...
def hex_to_husl(hex: str) -> list[float]: ...
def huslp_to_rgb(h: float, s: float, l: float) -> list[float]: ...
def huslp_to_hex(h: float, s: float, l: float) -> str: ...
def rgb_to_huslp(r: float, g: float, b: float) -> list[float]: ...
def hex_to_huslp(hex: str) -> list[float]: ...
def lch_to_rgb(l: float, c: float, h: float) -> list[float]: ...
def rgb_to_lch(r: float, g: float, b: float) -> list[float]: ...
def max_chroma(L: float, H: float) -> float: ...
def max_chroma_pastel(L: float) -> float: ...
def dot_product(a: Iterable[float], b: Iterable[float]) -> float: ...
def f(t: float) -> float: ...
def f_inv(t: float) -> float: ...
def from_linear(c: float) -> float: ...
def to_linear(c: float) -> float: ...
def rgb_prepare(triple: Iterable[float]) -> list[int]: ...
def hex_to_rgb(hex: str) -> list[float]: ...
def rgb_to_hex(triple: Iterable[float]) -> str: ...
def xyz_to_rgb(triple: Iterable[float]) -> list[float]: ...
def rgb_to_xyz(triple: Iterable[float]) -> list[float]: ...
def xyz_to_luv(triple: Iterable[float]) -> list[float]: ...
def luv_to_xyz(triple: Iterable[float]) -> list[float]: ...
def luv_to_lch(triple: Iterable[float]) -> list[float]: ...
def lch_to_luv(triple: Iterable[float]) -> list[float]: ...
def husl_to_lch(triple: Iterable[float]) -> list[float]: ...
def lch_to_husl(triple: Iterable[float]) -> list[float]: ...
def huslp_to_lch(triple: Iterable[float]) -> list[float]: ...
def lch_to_huslp(triple: Iterable[float]) -> list[float]: ...
