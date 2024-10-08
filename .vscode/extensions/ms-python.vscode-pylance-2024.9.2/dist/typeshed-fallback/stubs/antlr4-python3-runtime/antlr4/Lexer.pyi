from _typeshed import Incomplete
from typing import TextIO

from antlr4.atn.LexerATNSimulator import LexerATNSimulator as LexerATNSimulator
from antlr4.CommonTokenFactory import CommonTokenFactory as CommonTokenFactory
from antlr4.error.Errors import (
    IllegalStateException as IllegalStateException,
    LexerNoViableAltException as LexerNoViableAltException,
    RecognitionException as RecognitionException,
)
from antlr4.InputStream import InputStream as InputStream
from antlr4.Recognizer import Recognizer as Recognizer
from antlr4.Token import Token as Token

class TokenSource: ...

class Lexer(Recognizer, TokenSource):
    DEFAULT_MODE: int
    MORE: int
    SKIP: int
    DEFAULT_TOKEN_CHANNEL: Incomplete
    HIDDEN: Incomplete
    MIN_CHAR_VALUE: int
    MAX_CHAR_VALUE: int
    def __init__(self, input: InputStream, output: TextIO = ...) -> None: ...
    def reset(self) -> None: ...
    def nextToken(self): ...
    def skip(self) -> None: ...
    def more(self) -> None: ...
    def mode(self, m: int): ...
    def pushMode(self, m: int): ...
    def popMode(self): ...
    @property
    def inputStream(self): ...
    @inputStream.setter
    def inputStream(self, input: InputStream): ...
    @property
    def sourceName(self): ...
    def emitToken(self, token: Token): ...
    def emit(self): ...
    def emitEOF(self): ...
    @property
    def type(self): ...
    @type.setter
    def type(self, type: int): ...
    @property
    def line(self): ...
    @line.setter
    def line(self, line: int): ...
    @property
    def column(self): ...
    @column.setter
    def column(self, column: int): ...
    def getCharIndex(self): ...
    @property
    def text(self): ...
    @text.setter
    def text(self, txt: str): ...
    def getAllTokens(self): ...
    def notifyListeners(self, e: LexerNoViableAltException): ...
    def getErrorDisplay(self, s: str): ...
    def getErrorDisplayForChar(self, c: str): ...
    def getCharErrorDisplay(self, c: str): ...
    def recover(self, re: RecognitionException): ...
