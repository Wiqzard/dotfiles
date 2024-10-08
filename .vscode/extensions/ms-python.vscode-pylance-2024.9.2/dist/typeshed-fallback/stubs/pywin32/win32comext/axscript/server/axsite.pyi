from _typeshed import Incomplete

class AXEngine:
    eScript: Incomplete
    eParse: Incomplete
    eSafety: Incomplete
    def __init__(self, site, engine) -> None: ...
    def __del__(self) -> None: ...
    def GetScriptDispatch(self, name: Incomplete | None = ...): ...
    def AddNamedItem(self, item, flags): ...
    def AddCode(self, code, flags: int = ...) -> None: ...
    def EvalCode(self, code): ...
    def Start(self) -> None: ...
    def Close(self) -> None: ...
    def SetScriptState(self, state) -> None: ...

IActiveScriptSite_methods: Incomplete

class AXSite:
    lcid: Incomplete
    objModel: Incomplete
    engine: Incomplete
    def __init__(self, objModel=..., engine: Incomplete | None = ..., lcid: int = ...) -> None: ...
    def AddEngine(self, engine): ...
    def GetLCID(self): ...
    def GetItemInfo(self, name, returnMask): ...
    def GetDocVersionString(self): ...
    def OnScriptTerminate(self, result, excepInfo) -> None: ...
    def OnStateChange(self, state) -> None: ...
    def OnScriptError(self, errorInterface): ...
    def OnEnterScript(self) -> None: ...
    def OnLeaveScript(self) -> None: ...
