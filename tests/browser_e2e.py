"""Live HTTP browser verification. No mocked navigation, storage, fetch or downloads.
Run after building. A browser-policy denial is a failed run, not something to bypass.
"""
import json, os, subprocess, time, urllib.request
from pathlib import Path
from playwright.sync_api import sync_playwright
ROOT=Path(__file__).resolve().parents[1]
manifest=json.loads((ROOT/'dist/build-manifest.json').read_text())
base=manifest['base']; origin='http://127.0.0.1:4188'; output=ROOT/'.browser-results/live'
output.mkdir(parents=True,exist_ok=True)
checks=[]; errors=[]; posts=[]
def check(name,condition):
    checks.append({'name':name,'passed':bool(condition)})
    assert condition,name
server=subprocess.Popen(['node','scripts/serve.mjs'],cwd=ROOT,env={**os.environ,'PORT':'4188'},stdout=subprocess.DEVNULL)
try:
    for _ in range(50):
        try:
            urllib.request.urlopen(origin+base+'tr/',timeout=1);break
        except Exception:time.sleep(.1)
    with sync_playwright() as pw:
        options={'headless':True}
        if os.getenv('BROWSER_PATH'):options['executable_path']=os.environ['BROWSER_PATH']
        browser=pw.chromium.launch(**options)
        for locale in manifest['locales']:
            ctx=browser.new_context(viewport={'width':1440,'height':960},accept_downloads=True)
            page=ctx.new_page();page.on('pageerror',lambda e:errors.append(str(e)))
            page.on('request',lambda r:posts.append(r.url) if r.method=='POST' else None)
            for width in [320,390,768,1440]:
                page.set_viewport_size({'width':width,'height':900})
                for suffix in ['', 'library/', 'dossier/understanding-spiritual-experience/', 'resource/spiritual-competence/', 'editorial/', 'contribute/']:
                    response=page.goto(origin+base+locale+'/'+suffix,wait_until='networkidle')
                    check(f'HTTP {locale}/{suffix} {width}',response.status==200)
                    check(f'layout {locale}/{suffix} {width}',page.evaluate('document.documentElement.scrollWidth <= innerWidth+1'))
                    check(f'direction {locale}/{suffix}',page.locator('html').get_attribute('dir')==('rtl' if locale=='ar' else 'ltr'))
                    if not suffix and width in [390,1440]:page.screenshot(path=str(output/f'{locale}-home-{width}.png'),full_page=True)
            page.goto(origin+base+locale+'/dossier/preferences-and-boundaries/')
            page.locator('[data-open-search]').click()
            check(f'dialog focus {locale}',page.locator('#global-search').evaluate('(e)=>e===document.activeElement'))
            page.keyboard.press('Escape')
            check(f'dialog closes {locale}',not page.locator('dialog').is_visible())
            page.locator('[data-save]').click()
            check(f'native saved state {locale}',page.locator('[data-save]').get_attribute('aria-pressed')=='true')
            page.reload();check(f'native storage persists {locale}',page.locator('[data-save]').get_attribute('aria-pressed')=='true')
            other='ms' if locale!='ms' else 'ar'
            page.locator('.language-select summary').click()
            page.locator(f'.language-panel a[hreflang="{other}"]').click()
            page.wait_for_url('**/'+other+'/dossier/preferences-and-boundaries/')
            check(f'real same-page locale switch {locale}',page.locator('[data-save]').get_attribute('aria-pressed')=='true')
            page.goto(origin+base+other+'/saved/');page.wait_for_selector('.saved-item')
            check(f'cross-language reading list {locale}',page.locator('.saved-item').count()==1)
            page.goto(origin+base+locale+'/contribute/')
            page.locator('#draft-title').fill('Public source proposal')
            page.locator('#draft-url').fill('https://doi.org/10.1037/amp0000821')
            page.locator('#draft-note').fill('Bibliographic suggestion only. No participant data.')
            page.locator('#draft-confirm').check()
            with page.expect_download() as event:page.locator('[data-requires-js]').click()
            download=event.value;data=json.loads(Path(download.path()).read_text())
            check(f'native local-only JSON download {locale}',data['submission']=='not-sent')
            ctx.close()
        for locale,query in [('ar','الإِرشـاد'),('id','konseling'),('ms','kaunseling')]:
            ctx=browser.new_context();page=ctx.new_page()
            page.goto(origin+base+locale+'/search/');page.locator('#page-search').fill(query)
            page.wait_for_selector('[data-search-results] .search-result')
            check(f'live search {locale}',page.locator('[data-search-results] .search-result').count()>0)
            page.locator('#page-search').fill('<svg onload=alert(1)>');page.wait_for_timeout(350)
            check(f'literal hostile query {locale}',page.locator('[data-search-results] svg').count()==0)
            ctx.close()
        ctx=browser.new_context(java_script_enabled=False);page=ctx.new_page()
        page.goto(origin+base+'ar/dossier/reading-evidence/')
        check('Arabic without JavaScript',page.locator('.reading-body p').count()>5)
        check('citation direction isolation',page.locator('.references p[dir="ltr"]').count()>0)
        ctx.close();browser.close()
    check('no uncaught JS errors',not errors);check('no POST requests',not posts)
    result={'mode':'LIVE_HTTP_BROWSER','count':len(checks),'checks':checks,'errors':errors,'mockedIO':False,'scientificApproval':False,'limits':['Chromium only. No screen-reader or native-language expert assessment.']}
    (ROOT/'verification/live-browser.json').write_text(json.dumps(result,ensure_ascii=False,indent=2))
    print(json.dumps({'passed':len(checks),'mode':result['mode']}))
finally:
    server.terminate();server.wait(timeout=10)
