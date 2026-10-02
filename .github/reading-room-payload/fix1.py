from pathlib import Path

def replace(path,old,new):
    p=Path(path);s=p.read_text()
    if new in s:return
    assert old in s,(path,old)
    p.write_text(s.replace(old,new))
replace('tests/browser_suite.py','from playwright.sync_api import sync_playwright','from playwright.sync_api import sync_playwright, expect\nimport re, pwd\n# Container HOME must belong to its effective user, especially for Firefox.\nos.environ["HOME"] = pwd.getpwuid(os.getuid()).pw_dir')
replace('scripts/test-fonts.py','import hashlib,json,subprocess,time','import hashlib,json,subprocess,time,os,pwd\n# Use the same effective-user home as the native browsers.\nos.environ["HOME"] = pwd.getpwuid(os.getuid()).pw_dir')
replace('tests/browser_suite.py','page.wait_for_function("document.body.dataset.release === " + json.dumps(VERSION))','expect(page.locator("body")).to_have_attribute("data-release", VERSION)')
replace('tests/browser_suite.py','page.wait_for_function("document.querySelectorAll(\'.saved-item\').length === 0")','expect(page.locator(".saved-item")).to_have_count(0)')
replace('tests/browser_suite.py','page.wait_for_function("document.querySelector(\'.search-result\')?.href.includes(\'/resource/trauma-spirituality/\')")','expect(page.locator(".search-result").first).to_have_attribute("href", re.compile(r"/resource/trauma-spirituality/"))')
replace('tests/browser_suite.py','page.wait_for_function("document.querySelectorAll(\'[data-bib-record]:not([hidden])\').length === 1")','expect(page.locator("[data-bib-record]:not([hidden])")).to_have_count(1)')
replace('tests/browser_suite.py','page.wait_for_function("document.querySelectorAll(\'[data-bib-record]:not([hidden])\').length > 1")','expect(page.locator("[data-bib-record]:not([hidden])")).to_have_count(page.locator("[data-bib-record]").count())')
replace('public/site.css','h1,h2,h3{color:var(--text-heading);text-wrap:pretty}','h1,h2,h3{color:var(--text-heading);text-wrap:pretty;overflow-wrap:anywhere;hyphens:auto}')
replace('public/site.css','.header-inner{display:flex;align-items:center;','.header-inner{display:flex;flex-wrap:wrap;align-items:center;')
replace('public/site.css','.header-actions{display:flex;align-items:center;gap:.65rem;flex-shrink:0}', '.header-actions{display:flex;align-items:center;gap:.65rem;flex-shrink:0;margin-inline-start:auto;max-width:100%}')
