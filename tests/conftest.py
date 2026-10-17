"""Initialize isolated storage before any test module imports the application."""
import gc
import os
import tempfile

_WORKSPACE = tempfile.TemporaryDirectory(prefix='cutline-pytest-')
os.environ['CUTLINE_DATA_DIR'] = _WORKSPACE.name


def pytest_sessionfinish(session, exitstatus):
    gc.collect()
    _WORKSPACE.cleanup()
