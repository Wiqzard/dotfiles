from os import _Environ

InterruptedError: type
string_types: tuple[type, ...]

def is_executable_file(path): ...
def which(filename, env: _Environ[str] | None = None): ...
def split_command_line(command_line): ...
def select_ignore_interrupts(iwtd, owtd, ewtd, timeout: float | None = None): ...
def poll_ignore_interrupts(fds, timeout: float | None = None): ...
