# MARSAM

A content-first, eight-language development preview for the proposed Maneviyat ve Ruh Sağlığı Araştırmaları Merkezi. It is not an announcement of formal establishment, university affiliation, accreditation, clinical services or approved training.

## Run locally

Node.js 22 or later is required. There are no npm dependencies and no installation step.

```sh
npm run check
npm run preview
```

Open `http://127.0.0.1:4173/tr/`. The language selector preserves the current page. Supported routes are `/tr/`, `/en/`, `/de/`, `/zh/`, `/ru/`, `/ar/`, `/id/` and `/ms/`. Do not double-click generated HTML. Search and root-relative assets require the provided local HTTP server.

Optional subdirectory hosting preview:

```sh
BASE_PATH=/MARSAM/ npm run build
npm run preview
```

On Windows PowerShell, use `$env:BASE_PATH='/MARSAM/'; npm run build`. Remove that setting with `Remove-Item Env:BASE_PATH` before rebuilding at the root. `HOST` and `PORT` configure the local preview server. No public hosting is provisioned.

## Implemented scope

- Turkish, English, German, Simplified Chinese, Russian, Arabic, Indonesian and Malay.
- 400 localized content routes, one language landing page and a real 404 page. This represents 50 logical pages per locale, not 400 research publications.
- Eight original introductory dossiers with complete body text, reflection questions, sources and limits in each language.
- Twenty linked source records and three learning pathways.
- Concepts, theoretical comparison questions, practice, ethics, methods, instrument directory, proposed research areas, participation conditions, external media, announcements and an international resource directory.
- Local full-text search, topic/type filters, same-page language switching, persistent browser-only reading lists, citation copy, RIS/BibTeX export and printing.
- A local-only contribution draft tool. It downloads JSON and does not submit or register anything.

Each new language has 360 explicit translated source strings. Indonesian and Malay have separate dictionaries. Javanese and Sundanese are not included, following the owner's academic-audience scope. Arabic has RTL layout, logical spacing, direction-aware arrows, Arabic search normalization, and isolation of original Latin-script citations and URLs. Missing translations stop the build instead of silently displaying English.

The Malaysia and Indonesia additions are an original UKM journal record and UII's Pusat Studi Psikologi Islam resource page. The UKM article describes content analysis of previous publications, not a new clinical trial. Neither institution is presented as a MARSAM partner.

## Source organization

- `src/languages.mjs`, `src/i18n.mjs`, `src/translate.mjs` and `src/locales/` define languages and translation contracts.
- `src/content.mjs` and `src/regional.mjs` hold linked sources, bounded descriptions, inspection status and taxonomy.
- `src/articles.mjs` and `src/info.mjs` hold reading dossiers, learning paths, editorial policies and proposed work areas.
- `src/site.mjs` and `public/` contain the shared templates and progressive browser enhancements.
- `src/lib.mjs` validates records, routes, escaping and publication boundaries.
- `scripts/build.mjs` generates static HTML. `scripts/serve.mjs` serves the preview with real status codes and security headers.

There is no online CMS, survey-response database or shared editorial backend. A local proposal file is not a submission system. Future tools require separate design and authorization.

## Verification

20 Node unit/content/locale tests and 9 build/link tests passed at both root and `/MARSAM/` paths. GitHub Actions additionally completed 642 live HTTP Chromium assertions using real navigation, storage and downloads. The application files downloaded from the CI artifact matched the local implementation byte for byte.

See `docs/VERIFICATION_8_LANGUAGES.md` and `verification/live-browser.json` for the exact snapshot, scope and limitations. Older verification documents describe the earlier five-language preview and offline fixture, not the new live test.

Optional live browser test:

```sh
python -m pip install playwright==1.57.0
python -m playwright install chromium
python tests/browser_e2e.py
```

The test starts its own local server. Clipboard permissions, screen-reader use, other browsers and native-language expert review remain outside the recorded checks. Tests are not accessibility certification or scientific approval.

## Scientific, rights and institutional boundaries

Relevant IAPOS distinctions between source identity, claim support, interpretation, translation and authorization inform the content model. This does not implement the full IAPOS runtime. Source records are V1 / PARTIALLY_VERIFIED with explicit inspection scopes. Editorial content and translations remain AI-assisted drafts awaiting human scientific and language review.

No private messages, unpublished coursework, identifiable clinical material, restricted instrument items or confidential research data are included. Original files are linked, not rehosted. Public availability does not automatically permit translation or republication. Source titles and citations remain in their original languages.

There are no user accounts, tracking cookies, third-party analytics, remote fonts or embedded external video. Reading lists are stored locally after user action. Hosting providers may keep ordinary access logs, which require separate production decisions.

`PUBLISH=true npm run build` intentionally fails pending institutional authorization, content and translation review, source/rights checks and hosting decisions. `noindex` is not access control. This public repository is not confidential. No main-branch merge or production deployment has been performed.

## Documents

- `docs/LOCALE_EXPANSION_TR.md` records the Arabic, Indonesian and Malay implementation and regional sources.
- `docs/VERIFICATION_8_LANGUAGES.md` records the verified application delivery.
- `docs/MIMARI_VE_ICERIK_PLANI_TR.md` preserves the original architecture proposal. Read its initial five-language scope together with the expansion note.
- `docs/BENCHMARK_AND_SOURCES.md` records the original source selection.
- `docs/IAPOS_AND_RELEASE.md` describes scientific review and authorization boundaries.

The project owner must decide licensing for original code and editorial text before public production release. Rights in linked materials remain with their respective owners.
