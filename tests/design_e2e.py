"""Real HTTP visual and interaction regression. Never replace denied navigation with mocks."""
from pathlib import Path
import os,json,subprocess,time,urllib.request
from playwright.sync_api import sync_playwright
ROOT=Path(__file__).resolve().parents[1]
m=json.loads((ROOT/'dist/build-manifest.json').read_text());base=m['base']
origin=os.getenv('PREVIEW_ORIGIN','http://127.0.0.1:4199').rstrip('/')
out=ROOT/'.browser-results/editorial';out.mkdir(parents=True,exist_ok=True)
checks=[];errors=[];server=None

def check(name,ok):
 checks.append({'name':name,'passed':bool(ok)})
 assert ok,name

def screenshot(page,name,full=False):
 page.screenshot(path=str(out/name),full_page=full)

try:
 if not os.getenv('PREVIEW_ORIGIN'):
  server=subprocess.Popen(['node','scripts/serve.mjs'],cwd=ROOT,env={**os.environ,'PORT':'4199'},stdout=subprocess.DEVNULL)
  for _ in range(60):
   try:urllib.request.urlopen(origin+base+'tr/',timeout=1);break
   except Exception:time.sleep(.1)
 with sync_playwright() as p:
  browser=p.chromium.launch()
  for l in m['locales']:
   ctx=browser.new_context(accept_downloads=True,reduced_motion='reduce')
   page=ctx.new_page();page.on('pageerror',lambda error:errors.append(str(error)))
   for w in [320,390,768,1440]:
    page.set_viewport_size({'width':w,'height':1000})
    paths=[''] if w in [320,768] else ['','library/','collections/','learning/','dossier/theory-and-integration/','resource/theories-book/','compare/']
    for path in paths:
     r=page.goto(origin+base+l+'/'+path,wait_until='networkidle')
     check(f'HTTP {l}/{path} {w}',r.status==200)
     check(f'no horizontal overflow {l}/{path} {w}',page.evaluate('document.documentElement.scrollWidth<=innerWidth+1'))
     check(f'correct release {l}/{path} {w}',page.locator('body').get_attribute('data-release')==m['version'])
     check(f'loaded images {l}/{path} {w}',page.evaluate('[...document.images].every(i=>i.complete&&i.naturalWidth>0)'))
     if not path:
      t=json.loads(page.locator('#ui-data').text_content())['labels']
      check('institutional heading '+l,page.locator('h1').inner_text()==t['brand'])
      check('decorative image '+l,page.locator('.hero-water').get_attribute('alt')=='')
      check('research index '+l,page.locator('.study-index a').count()==6)
      check('preserved resources '+l,page.locator('.publication-card').count()==3)
      if w in [390,1440]:
       screenshot(page,f'{l}-home-{w}.png',True)
       screenshot(page,f'{l}-home-{w}-top.png')
      if w<=600:check('compact masthead '+l,page.locator('.header-inner').bounding_box()['height']<=95)
      if w<=768:
       page.locator('.mobile-nav summary').click()
       check('visible mobile menu '+l,page.locator('.mobile-nav nav').is_visible())
       check('open mobile menu fits '+l,page.evaluate('document.documentElement.scrollWidth<=innerWidth+1'))
       page.locator('.mobile-nav summary').click()
     elif l=='tr' and w==1440:screenshot(page,'tr-'+path.strip('/').replace('/','-')+'.png',True)
   page.set_viewport_size({'width':1440,'height':1000})
   page.goto(origin+base+l+'/',wait_until='networkidle')
   d=page.locator('.learning-choice').nth(1)
   d.locator('summary').focus();page.keyboard.press('Enter')
   check('keyboard learning route '+l,d.get_attribute('open') is not None)
   check('one learning route open '+l,page.locator('.learning-choice[open]').count()==1)
   check('real pathway destination '+l,'/learning/professional/' in d.locator('a').get_attribute('href'))
   page.goto(origin+base+l+'/library/',wait_until='networkidle')
   page.locator('[data-compare-id]').nth(0).click();page.locator('[data-compare-id]').nth(1).click()
   page.locator('[data-compare-nav]').first.click();page.wait_for_selector('.comparison-table')
   check('comparison remains reachable '+l,page.locator('.comparison-table thead th').count()==3)
   with page.expect_download() as download:page.locator('[data-comparison-export]').click()
   check('native comparison export '+l,len(json.loads(Path(download.value.path()).read_text())['items'])==2)
   ctx.close()
  ctx=browser.new_context(java_script_enabled=False,viewport={'width':390,'height':1000});page=ctx.new_page()
  page.goto(origin+base+'tr/',wait_until='networkidle')
  check('no-JS study index',page.locator('.study-index a').count()==6)
  page.locator('.learning-choice').nth(2).locator('summary').click()
  check('no-JS learning choice',page.locator('.learning-choice').nth(2).locator('.choice-body').is_visible())
  ctx.close();browser.close()
 check('no browser runtime errors',not errors)
finally:
 if server:server.terminate();server.wait(timeout=10)
 (ROOT/'verification').mkdir(exist_ok=True)
 (ROOT/'verification/editorial-browser.json').write_text(json.dumps({'origin':origin,'version':m['version'],'checks':checks,'errors':errors,'passed':sum(x['passed']for x in checks),'total':len(checks),'independentDesignReview':False},ensure_ascii=False,indent=2))
print(json.dumps({'passed':len(checks),'origin':origin}))
