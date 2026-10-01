# MARSAM · spirituality, mental health, and accountable knowledge

A content-first, eight-language website **development preview** for the proposed *Maneviyat ve Ruh Sağlığı Araştırmaları Merkezi*. It is not an announcement of a formally established center, university affiliation, clinical service or approved training provider.

## Run locally

Requires **Node.js 22 or later**. There are no npm dependencies and no installation step.

```sh
npm run build
npm run preview
```

Open `http://127.0.0.1:4173/tr/`. Change `/tr/` to `/en/`, `/de/`, `/zh/` `/ru/`, `/ar/`, `/id/` or `/ms/`. The root page provides a language selector. Do not double-click generated HTML: the site uses root-relative assets and search indexes, so it requires a local HTTP server.

```sh
npm run check
# Optional subdirectory hosting preview:
BASE_PATH=/MARSAM/ npm run build
npm run preview
# Open http://127.0.0.1:4173/MARSAM/tr/
```

Windows PowerShell equivalent: `$env:BASE_PATH='/MARSAM/'; npm run build`. Remove it with `Remove-Item Env:BASE_PATH` before rebuilding at the root.

`HOST` and `PORT` configure the local server. Its default loopback binding is intentional. No public server has been provisioned or deployed.

## What is implemented

- Eight complete interface dictionaries: Turkish, English, German, Simplified Chinese, Russian, Arabic, Indonesian and Malay.
- **400 localized route files**, one language landing page and a real 404 page. This is 50 logical pages per locale, not 400 distinct research publications.
- **8 original introductory dossiers**, with body text, reflection prompts and limits in all eight languages.
- **20 linked source records**, not rehosted publications. Source titles and citation metadata remain in their original language.
- **3 reading pathways**, a concept map, theoretical comparison questions and proposed research areas.
- Full-text local search, type/topic filtering, locale switching on the same page, a browser-only reading list, citation copy, metadata-only RIS/BibTeX export and print styles.
- Local-only source-suggestion JSON download. The form does not send, register or publish anything.
- Institutional-status notices, source inspection limits, translation status, rights notices and a machine-readable source ledger.

The rich architecture covers concepts, theories, professional practice, ethics, methods, measurement directories, research participation, projects, learning, external media, announcements and an international resource directory. Empty research and course states are deliberate: no unapproved studies or invented events are presented as active.

## Content and maintenance

| File | Responsibility |
| --- | --- |
| `src/i18n.mjs` | Interface copy and localized source notes |
| `src/content.mjs` | Source records, catalogue entries, section metadata and taxonomy |
| `src/articles.mjs` | Eight eight-language introductory dossiers |
| `src/info.mjs` | Learning paths, editorial/about text and proposed work areas |
| `src/lib.mjs` | Validation, URL safety, HTML escaping, routes and export functions |
| `src/site.mjs` | Accessible shared templates and prerendered pages |
| `public/site.css` | Responsive visual system, typography, reduced motion and printing |
| `public/app.js` | Small client-side enhancements; no analytics or remote form posting |
| `scripts/build.mjs` | Static generation and fail-closed publication guard |
| `scripts/serve.mjs` | Local HTTP preview with real 404 and security headers |

Use a branch and pull request to change content. Keep source IDs stable. Add all eight language values and a bounded source role. Run the tests before requesting scientific and language review. A `draft` flag is not silently removed by a passing build. There is **no online CMS or shared editorial backend** in this preview. The local suggestion tool is not a substitute for one.

## Scientific, institutional and privacy boundaries

The content architecture adapts the user's canonical IAPOS source/claim controls. It does not implement the full IAPOS runtime or turn code tests into scientific approval. Current source records are **V1 / PARTIALLY_VERIFIED** with inspected scope and limitations. Original dossiers and translations are **AI-assisted editorial drafts** awaiting responsible human review. Native-language review has not been claimed.

No private messages, unpublished coursework, personal clinical material, restricted scale items or confidential research data are committed. Official publisher files are linked, not copied. A public tool or article page is not automatically permission to translate or republish it. External institutions are **resource links, not partners**.

The preview has no accounts, survey response store, tracking code, external font or embedded third-party video. A reading list stays in browser storage after user action. The contribution form exports a local file only. Hosting operators may have their own ordinary access logs; production privacy notices and data-controller decisions remain open.

`PUBLISH=true npm run build` intentionally fails. A production release requires institutional authorization, content approval tied to the reviewed versions, translation review, source/rights checks and hosting decisions. `noindex` is a crawler instruction, **not access control**; this public repository is not confidential.

## Verification

```sh
npm test              # content and safety contracts
npm run build
npm run test:build    # route parity, all generated internal links, citations and release guard
```

Optional browser checks require Python and Playwright. With a working browser and the preview server running:

```sh
python tests/browser_check.py --browser /path/to/chromium
```

The development environment blocked browser navigation to local URLs. For this delivery, visual and interaction checks used `--offline-fixture`: generated HTML and CSS were rendered locally, the actual application script ran, and browser I/O boundaries were mocked. Real local HTTP responses were checked separately. This mode is explicitly **not** full end-to-end verification. Native persistence, clipboard permissions, navigation, real file downloads, browser CSP enforcement, screen readers and cross-browser behaviour require a live-browser pass. No browser or machine policy was changed.

See `verification/` and `docs/VERIFICATION.md` for the exact scope and commands. Tests are implementation checks, not a claim of WCAG certification, clinical safety validation or scholarly approval.

## Documents

- `docs/MIMARI_VE_ICERIK_PLANI_TR.md`: meeting-ready Turkish architecture and content proposal.
- `docs/BENCHMARK_AND_SOURCES.md`: public precedents and inspected source roles.
- `docs/IAPOS_AND_RELEASE.md`: canonical IAPOS references, approval boundaries and release checklist.

Copyright permissions for external sources remain with their owners. This repository does not grant reuse rights for linked materials or impersonate an institution. Code and original editorial-text licensing should be decided by the project owner before a production release.

## Arabic, Indonesian and Malay extension, version 0.2.0

Scope follows the owner's academic-audience request. Supported locales are `tr en de zh ru ar id ms`. No Javanese or Sundanese locales have been added. Indonesian and Malay are separate language packs, not aliases. Arabic uses `dir=rtl`, logical spacing, mirrored directional arrows, bidirectional isolation of source citations, and Arabic-aware search normalization.

Each additional language has 360 explicit source-string translations, including the full eight introductory dossiers. New regional catalogue records are also written in all eight languages. Source-string lookup throws on missing translations. All translations remain AI-assisted drafts awaiting scientific and native-language review.

See `docs/LOCALE_EXPANSION_TR.md`. Run `python tests/browser_e2e.py` after installing Playwright and its Chromium browser for an independent live HTTP test environment. This test is not a clinical, scholarly, language-quality or screen-reader certification.
