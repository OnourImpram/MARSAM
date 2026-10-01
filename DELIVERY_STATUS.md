# MARSAM institutional preview status

1 October 2026. Version 0.3.0.

The complete institutional enhancement is committed as regular source files on `feat/multilingual-knowledge-platform`. Verified application commit: `e7087f6805431438fa3aba83627cf0084c52026d`. The subsequent documentation and permanent-workflow commit does not alter the tested application.

## Implemented

Marmara University planned-center identity, unchanged official university marks, eight languages, Arabic RTL, six thematic collections, four-source comparison with persistent selection and cross-language shareable URLs, local JSON export, dated external events and an international research directory. The catalog contains 22 sources, eight introductory dossiers and three learning paths. There are 440 localized routes plus a full Turkish root page and 404.

## Recorded technical checks

GitHub Actions run `36871527013` completed successfully. Both root and `/MARSAM/` builds passed 29 Node content/locale/contract tests and nine generated-link tests. Real HTTP Chromium suites passed 642 baseline checks and 803 institutional-feature checks. These are automated assertions, not counts of distinct user journeys. No mocked fetch, storage or downloads were used. The successful artifact contains logs, screenshots and the exact committed source archive.

German and Russian long-heading overflow at 320px was reproduced in real browser screenshots and corrected through heading wrapping. Closed mobile menu layout and Malay preview-banner overflow were also corrected and retested. No body-level overflow masking was used.

## GitHub Pages

The user authorized a public development preview. The permanent deployment workflow is `.github/workflows/deploy-pages.yml`. Initial Pages creation was rejected by GitHub with `Resource not accessible by integration`. The account owner must select GitHub Actions in repository Settings, Pages. A deployment workflow being present is not evidence of a live website. Its post-deployment job verifies public HTML and the deployed commit before announcing a live URL.

## Limits

No formal center-establishment claim, director/board appointments, private course files, book drafts or participant data. Sources remain V1 / PARTIALLY_VERIFIED. Translations and original editorial content await human academic and language review. No genuine CMS, LMS, account system or participant database. Chromium checks are not independent accessibility certification, cross-browser verification or academic approval. Main has not been merged.
