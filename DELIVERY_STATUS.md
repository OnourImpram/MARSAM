# MARSAM development delivery status

Date: 2026-10-01.

A runnable, five-language static website preview was built in the development environment and delivered to the project owner as `MARSAM_Web_Sitesi_ve_Kaynak_Kodu.zip` in the ChatGPT conversation. The archive contains the complete source, generated preview, Turkish architecture proposal, source ledger and test records.

## Repository status

**The complete application source has not been synchronized into this branch.** The committed repository currently contains the initial project description, design and implementation proposals, initial test contract, and this status note. This branch must not be described as a complete or runnable website checkout. No production deployment or main-branch merge has been performed.

## Implemented archive scope

- Turkish, English, German, Simplified Chinese and Russian interface and introductory content.
- 240 localized routes, a language landing page and a 404 page.
- 18 source records, 8 reading dossiers and 3 learning paths.
- Local search, topic/type filters, reading-list controls, citation export and a local-only contribution draft tool.
- Institution-in-development notices, editorial/translation draft status, source access limits and permission boundaries.
- Node.js 22+ build and preview scripts with no npm dependencies.

## Verification scope

12 Node content/safety tests and 9 build/link tests passed. An additional 96 checks ran in an offline browser fixture plus separate local HTTP checks. Browser navigation was restricted in the environment; the fixture used embedded assets and mocked browser I/O. It is not full live-browser end-to-end verification. Native persistence, real downloads, clipboard permissions, CSP enforcement and assistive-technology review remain open.

## Publication boundary

This is a development preview of a proposed center, not a formally established institution or clinical service. All original editorial text and translations require human scientific and language review. No participant data is collected. No private conversations, unpublished coursework or restricted scale items are included. Technical checks do not confer IAPOS scientific approval.
