"""
This type stub file was generated by pyright.
"""

import os
from traitlets.config.application import Application, catch_config_error
from traitlets.config.loader import PyFileConfigLoader

"""
An application for IPython.

All top-level applications should use the classes in this module for
handling configuration and creating configurables.

The job of an :class:`Application` is to create the master configuration
object and then create the configurable objects, passing the config to them.
"""
if os.name == "nt":
    programdata = ...
else:
    ...
ENV_CONFIG_DIRS = ...
_env_config_dir = ...
if _env_config_dir not in SYSTEM_CONFIG_DIRS:
    ...
_envvar = ...
if _envvar in None, '':
    IPYTHON_SUPPRESS_CONFIG_ERRORS = ...
else:
    ...
base_aliases = ...
if isinstance(Application.aliases, dict):
    ...
base_flags = ...
if isinstance(Application.flags, dict):
    ...
class ProfileAwareConfigLoader(PyFileConfigLoader):
    """A Python file config loader that is aware of IPython profiles."""
    def load_subconfig(self, fname, path=..., profile=...): # -> None:
        ...
    


class BaseIPythonApplication(Application):
    name = ...
    description = ...
    version = ...
    aliases = ...
    flags = ...
    classes = ...
    python_config_loader_class = ProfileAwareConfigLoader
    config_file_specified = ...
    config_file_name = ...
    builtin_profile_dir = ...
    config_file_paths = ...
    extra_config_file = ...
    profile = ...
    add_ipython_dir_to_sys_path = ...
    ipython_dir = ...
    _in_init_profile_dir = ...
    profile_dir = ...
    overwrite = ...
    auto_create = ...
    config_files = ...
    copy_config_files = ...
    verbose_crash = ...
    crash_handler_class = ...
    @catch_config_error
    def __init__(self, **kwargs) -> None:
        ...
    
    def init_crash_handler(self): # -> None:
        """Create a crash handler, typically setting sys.excepthook to it."""
        ...
    
    def excepthook(self, etype, evalue, tb): # -> Any | None:
        """this is sys.excepthook after init_crashhandler

        set self.verbose_crash=True to use our full crashhandler, instead of
        a regular traceback with a short message (crash_handler_lite)
        """
        ...
    
    def load_config_file(self, suppress_errors=...): # -> None:
        """Load the config file.

        By default, errors in loading config are handled, and a warning
        printed on screen. For testing, the suppress_errors option is set
        to False, so errors will make tests fail.

        `suppress_errors` default value is to be `None` in which case the
        behavior default to the one of `traitlets.Application`.

        The default value can be set :
           - to `False` by setting 'IPYTHON_SUPPRESS_CONFIG_ERRORS' environment variable to '0', or 'false' (case insensitive).
           - to `True` by setting 'IPYTHON_SUPPRESS_CONFIG_ERRORS' environment variable to '1' or 'true' (case insensitive).
           - to `None` by setting 'IPYTHON_SUPPRESS_CONFIG_ERRORS' environment variable to '' (empty string) or leaving it unset.

        Any other value are invalid, and will make IPython exit with a non-zero return code.
        """
        ...
    
    def init_profile_dir(self): # -> None:
        """initialize the profile dir"""
        ...
    
    def init_config_files(self): # -> None:
        """[optionally] copy default config files into profile dir."""
        ...
    
    def stage_default_config_file(self): # -> None:
        """auto generate default config file, and stage it into the profile."""
        ...
    
    @catch_config_error
    def initialize(self, argv=...): # -> None:
        ...
    


