from typing import Any

class Error(Exception): ...

class ContextError(Error):
    def __init__(self) -> None: ...

class BadValueError(Error): ...
class BadArgumentError(Error): ...
class BadRequestError(Error): ...
class Rollback(Error): ...
class BadQueryError(Error): ...

class BadFilterError(Error):
    filter: Any
    def __init__(self, filter) -> None: ...

class NoLongerImplementedError(NotImplementedError):
    def __init__(self) -> None: ...

class Cancelled(Error): ...
class NestedRetryException(Error): ...
