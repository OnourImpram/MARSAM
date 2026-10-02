from pathlib import Path

p=Path('public/site.css');s=p.read_text()
old='.comparison-picker>div{min-width:0}'
new='.comparison-picker>div{min-width:0;position:relative}.comparison-picker>div::after{content:"";position:absolute;inset-inline-end:.9rem;inset-block-end:1.2rem;width:.4rem;height:.4rem;border-right:2px solid var(--text-primary);border-bottom:2px solid var(--text-primary);transform:rotate(45deg);pointer-events:none}'
if new not in s:
 assert old in s
 s=s.replace(old,new)
old='.comparison-picker select{max-width:100%;overflow:hidden;text-overflow:ellipsis;font-size:.85rem}'
new='.comparison-picker select{appearance:none;-webkit-appearance:none;white-space:nowrap;max-width:100%;overflow:hidden;text-overflow:ellipsis;font-size:.85rem}'
if new not in s:
 assert old in s
 s=s.replace(old,new)
p.write_text(s)

p=Path('tests/browser_suite.py');s=p.read_text()
old="            self.fit(page, f'{engine}/{locale} comparison scroll contained')"
new="""            for comparison_width in [320, 390]:
                page.set_viewport_size({'width': comparison_width, 'height': 900})
                self.fit(page, f'{engine}/{locale}/{comparison_width} comparison scroll contained')
            native = page.locator('#compare-1')
            native.focus()
            self.ck(f'{engine}/{locale} native select keeps keyboard focus', native.evaluate('(e)=>e.tagName===\"SELECT\"&&e===document.activeElement'))
            native.select_option('client-preference')
            expect(page.locator('.comparison-table thead th')).to_have_count(4)
            self.ck(f'{engine}/{locale} native selection updates comparison', native.input_value() == 'client-preference')
            if engine == 'webkit' and locale in ['ru','ar','en']:
                page.screenshot(path=str(self.output / f'{locale}-comparison-mobile.png'), full_page=True)"""
if new not in s:
 assert old in s
 s=s.replace(old,new)
p.write_text(s)

Path('.github/workflows/verify-preview.yml').write_text('''name: Verify preview
on:
  push:
    branches: [main]
  pull_request:
  workflow_dispatch:
permissions:
  contents: read
concurrency:
  group: preview-${{ github.event.pull_request.number || github.ref }}
  cancel-in-progress: true
jobs:
  verify:
    runs-on: ubuntu-latest
    container: mcr.microsoft.com/playwright/python:v1.61.0-noble
    timeout-minutes: 15
    env:
      BROWSERS: chromium,firefox,webkit
    steps:
      - uses: actions/checkout@v4
        with:
          persist-credentials: false
      - uses: actions/setup-node@v4
        with:
          node-version: '22'
      - name: Verify content contracts and both deployment roots
        shell: bash
        run: |
          set -euo pipefail
          mkdir -p verification
          BASE_PATH=/ npm run check | tee verification/reading-room-root.log
          BASE_PATH=/MARSAM/ PAGES_PREVIEW=true npm run check | tee verification/reading-room-pages.log
          node scripts/budget.mjs
      - name: Prepare matching browser and script coverage
        run: |
          python -m pip install --timeout 25 -q playwright==1.61.0
          python scripts/test-fonts.py
      - name: Verify native interactions, institutional boundaries and responsive layouts
        shell: bash
        run: |
          set -euo pipefail
          python tests/browser_e2e.py & core=$!
          python tests/scope_e2e.py & scope=$!
          python tests/heritage_e2e.py & layout=$!
          status=0
          wait "$core" || status=1
          wait "$scope" || status=1
          wait "$layout" || status=1
          exit "$status"
      - uses: actions/upload-artifact@v4
        if: always()
        with:
          name: reading-room-verification
          path: |
            verification/reading-room-*
            .browser-results/reading-room/
          include-hidden-files: true
          retention-days: 14
''')
Path('.github/workflows/deploy-pages.yml').write_text('''name: Prepare source-bound Pages artifact
on:
  workflow_dispatch:
permissions:
  contents: read
jobs:
  prepare:
    runs-on: ubuntu-latest
    timeout-minutes: 5
    env:
      BASE_PATH: /MARSAM/
      PAGES_PREVIEW: 'true'
    steps:
      - uses: actions/checkout@v4
        with:
          persist-credentials: false
      - uses: actions/setup-node@v4
        with:
          node-version: '22'
      - name: Build only the owner-authorized institutional review artifact
        run: |
          npm run check
          node scripts/budget.mjs
          node scripts/release-manifest.mjs
      - uses: actions/upload-artifact@v4
        with:
          name: marsam-pages-review-artifact
          path: dist/
          include-hidden-files: true
          retention-days: 14
# This prepares an artifact only. Publishing is scoped to MARSAM/ in the
# separate existing host, following docs/design/DEPLOYMENT.md.
''')
p=Path('docs/design/IMPLEMENTATION.md');s=p.read_text()
note='''
## Completion recovery, 2 October 2026

Recovered the exact candidate c1ee674b5dac4f8eaa96501de83e0c35ef88c219. The last candidate run passed layout and scope suites but failed the WebKit Russian comparison reflow check. Diagnostic run 36969003160 reproduced a 447px document at a 390px viewport. Native WebKit select rendering forced visible overflow despite the authored overflow rule. Changing only native control appearance to none restored the authored overflow and a 390px document. Clipping the control did not fix the layout and was rejected. The fix retains native HTML selects, full option labels, native change events and focus, with a noninteractive decorative chevron. It does not clip the page or discard scholarly titles.

The expanded regression repeats populated comparison at 320px and 390px in every locale and native engine. Permanent verify-preview and artifact-preparation workflows are aligned with the current three-engine suite. No test failure is relabelled as a pass. No formal, scientific or language approval is changed by this recovery.
'''
if '## Completion recovery, 2 October 2026' not in s:p.write_text(s+note)
