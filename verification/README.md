# Verification outputs

Raw local execution logs are included in the downloadable development archive. They are not claimed as GitHub CI output.

`npm run check` re-runs the 12 core tests, build, and nine output/link tests.

`tests/browser_check.py` writes `browser-check.json` here. The development run used its explicit offline-fixture mode because browser navigation was restricted. See `docs/VERIFICATION.md` for limits before interpreting the 96 recorded fixture/HTTP checks as test evidence.

No generated result is a scientific, translation, institutional or clinical approval.
