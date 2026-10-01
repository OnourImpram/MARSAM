# MARSAM development delivery status

Date: 2026-10-01.

## Repository status

This development branch contains the complete application source, five-language content, build and preview scripts, tests, and architecture documents. It supersedes the earlier incomplete-synchronization notice. The main branch has not been merged and no website has been deployed.

The companion archive `MARSAM_Web_Sitesi_ve_Kaynak_Kodu.zip` includes the same application source plus generated HTML, raw local verification logs and a delivery manifest. Generated files are intentionally not committed to Git.

## Scope

- Turkish, English, German, Simplified Chinese and Russian interface and introductory content.
- 240 localized routes, one language landing page and a 404 page.
- 18 source records, eight reading dossiers and three learning paths.
- Search, filters, browser-local reading list, citation export and local-only contribution draft.
- Node.js 22+ with no npm dependencies. See README for build and preview commands.

## Verification

12 Node content/safety tests and nine build/link tests passed locally. The subdirectory build was tested separately. A further 96 checks used an offline browser fixture and separate real HTTP checks. The test script and limitations are in `tests/browser_check.py` and `docs/VERIFICATION.md`. Raw execution logs accompany the archive; no remote CI run is claimed.

The browser environment blocked navigation. Offline DOM tests mock fetch, storage and download boundaries. Native browser persistence, clipboard permissions, real downloads, browser CSP enforcement and assistive-technology review remain open.

## Release boundaries

MARSAM is a proposed center, not a formally established institution or clinical service. Original editorial texts and translations await human scientific and language review. No participant data is collected. No private messages, unpublished chapters or restricted scale items are included. Technical verification is not IAPOS scientific approval. Production publication remains blocked in the builder.
