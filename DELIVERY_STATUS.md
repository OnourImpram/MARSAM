# MARSAM development status

Version 0.2.0. Eight-language development preview.

The branch contains the runnable source for Turkish, English, German, Simplified Chinese, Russian, Arabic, Indonesian and Malay. Javanese and Sundanese are outside this request's scope.

400 localized content routes, a language landing page and a 404 page are generated from 20 linked source records, 8 introductory dossiers and 3 learning paths. Source titles remain in their original language.

Run `npm run check` for 20 unit/content and 9 build/link tests. The additional `tests/browser_e2e.py` performs real local HTTP navigation, persistent storage, language switching, searches and native downloads. See the generated verification records for what actually ran. Local offline-fixture results are not described as end-to-end tests.

All editorial content and translations require human scientific and language review. No main-branch merge, production launch, clinical service or participant data collection is implied.
