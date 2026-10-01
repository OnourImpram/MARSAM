"""Editorial scope and user journeys, using real HTTP and native browser state."""
import json,os,re,subprocess,time,urllib.request,concurrent.futures
from pathlib import Path
from playwright.sync_api import sync_playwright
ROOT=Path(__file__).resolve().parents[1]
m=json.loads((ROOT/'dist/build-manifest.json').read_text());base=m['base']
origin=os.environ.get('PREVIEW_ORIGIN','http://127.0.0.1:4197').rstrip('/')
out=ROOT/'.browser-results/scope';out.mkdir(parents=True,exist_ok=True)
errors=[];checks=[];server=None
banned=re.compile(r'Harvard|Duke|GWish|Danielsen|Columbia|\bSMBI\b|\bIAPR\b|RCPsych|Bilkent',re.I)
def ck(name,v):
 checks.append({'name':name,'passed':bool(v)})
 assert v,name
def read(path):
 with urllib.request.urlopen(origin+base+path,timeout=30)as r:return r.read().decode('utf-8')
try:
 if not os.environ.get('PREVIEW_ORIGIN'):
  server=subprocess.Popen(['node','scripts/serve.mjs'],cwd=ROOT,env={**os.environ,'PORT':'4197'},stdout=subprocess.DEVNULL)
  for _ in range(50):
   try:read('tr/');break
   except Exception:time.sleep(.2)
 with concurrent.futures.ThreadPoolExecutor(max_workers=8)as pool:
  for path,text in zip(m['paths'],pool.map(lambda path:read(path.lstrip('/')),m['paths'])):
   ck('no benchmark branding '+path,not banned.search(text))
   ck('no obsolete network link '+path,'/network/' not in text)
   ck('no personal-research hero '+path,'hero-question' not in text)
 with sync_playwright()as p:
  browser=p.chromium.launch(headless=True)
  for l in m['locales']:
   ctx=browser.new_context(accept_downloads=True,reduced_motion='reduce')
   page=ctx.new_page();page.on('pageerror',lambda e:errors.append(str(e)))
   for width in [320,390,768,1440]:
    page.set_viewport_size({'width':width,'height':960})
    for path in ['', 'collections/','library/','events/','media/','projects/']:
     response=page.goto(origin+base+l+'/'+path,wait_until='networkidle')
     ck('HTTP '+l+'/'+path+' '+str(width),response.status==200)
     ck('viewport '+l+'/'+path+' '+str(width),page.evaluate('document.documentElement.scrollWidth<=innerWidth+1'))
     ck('current release '+l+'/'+path,page.locator('body').get_attribute('data-release')=='0.6.0')
     if not path:
      data=json.loads(page.locator('#ui-data').text_content())
      ck('actual institutional heading '+l,page.locator('h1').inner_text()==data['labels']['brand'])
      ck('three institutional pillars '+l,page.locator('.centre-pillars a').count()==3)
      ck('all area titles are noun headings '+l,'?' not in page.locator('.theme-grid').inner_text())
      ck('no logo directory '+l,page.locator('.institution-card').count()==0)
      if width<=768:
       page.locator('.mobile-nav summary').click()
       ck('mobile menu '+l,page.locator('.mobile-nav nav').is_visible())
       ck('open menu within viewport '+l,page.evaluate('document.documentElement.scrollWidth<=innerWidth+1'))
       page.locator('.mobile-nav summary').click()
      if width in [390,1440]:page.screenshot(path=str(out/f'{l}-home-{width}.png'),full_page=True)
   page.goto(origin+base+l+'/library/',wait_until='networkidle')
   page.locator('[data-compare-id]').nth(0).click();page.locator('[data-compare-id]').nth(1).click()
   page.locator('[data-compare-nav]').first.click();page.wait_for_selector('.comparison-table')
   ck('comparison still works '+l,page.locator('.comparison-table thead th').count()==3)
   with page.expect_download()as d:page.locator('[data-comparison-export]').click()
   ck('native comparison download '+l,len(json.loads(Path(d.value.path()).read_text())['items'])==2)
   page.goto(origin+base+l+'/dossier/understanding-spiritual-experience/',wait_until='networkidle')
   page.locator('[data-save]').click();page.reload(wait_until='networkidle')
   ck('reading list persists '+l,page.locator('[data-save]').get_attribute('aria-pressed')=='true')
   other='ar' if l!='ar' else 'en'
   page.locator('.language-select summary').click();page.locator(f'.language-panel a[hreflang="{other}"]').click()
   page.wait_for_url('**/'+other+'/dossier/understanding-spiritual-experience/')
   ck('same page locale '+l,page.locator('html').get_attribute('dir')==('rtl'if other=='ar'else'ltr'))
   ctx.close()
  nojs=browser.new_context(java_script_enabled=False);page=nojs.new_page()
  page.goto(origin+base+'tr/');ck('homepage readable without JS',page.locator('.centre-pillars a').count()==3)
  nojs.close();browser.close()
 ck('no browser errors',not errors)
finally:
 if server:server.terminate();server.wait(timeout=10)
 (ROOT/'verification').mkdir(exist_ok=True)
 (ROOT/'verification/scope-browser.json').write_text(json.dumps({'origin':origin,'release':'0.6.0','checks':checks,'errors':errors,'passed':sum(c['passed']for c in checks),'total':len(checks),'scientificApproval':False},ensure_ascii=False,indent=2))
print(json.dumps({'passed':len(checks),'origin':origin}))
