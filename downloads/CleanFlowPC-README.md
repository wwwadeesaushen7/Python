# CleanFlow PC 1.0.1 download

[Download CleanFlowPC-1.0.1.zip](CleanFlowPC-1.0.1.zip?raw=true)

Extract the entire ZIP, open the CleanFlowPC folder, and double-click **START_CLEANFLOW.bat**. This launches the app with an installed Python 3.10+ (3.12 recommended), without building. No runtime pip packages are needed.

For an EXE, run **build_windows.bat**. It now saves build.log, keeps errors visible, and opens the EXE after a successful build. If your earlier build succeeded, the app is at `dist\CleanFlowPC\CleanFlowPC.exe`.

Startup failures show a Windows error dialog and save `%LOCALAPPDATA%\CleanFlowPC\startup-error.log`, with a temp-folder fallback. Scheduled startup failures remain unattended without dialogs.

This is a source project ZIP; no prebuilt EXE is included. Verification: 40 tests passed, 3 Windows-native tests skipped on Linux. Windows batch execution, native API tests, and EXE packaging still require a Windows acceptance run. Read README.md and VERIFICATION.md in the ZIP.

SHA-256: `840a68347021e34f45a1881f5e41c8893a85c4622d1f894d2e13e40b64c88a79`
