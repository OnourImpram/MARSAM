"""Real browser acceptance for heritage composition and the source-backed catalogue.
PREVIEW_ORIGIN can select the deployed host. Never mock denied network requests.
"""
from pathlib import Path
from playwright.sync_api import sync_playwright
import json,os,subprocess,time,urllib.request
ROOT=Path(__file__).resolve().parents[1]
m=json.loads((ROOT/'dist/build-manifest.json').read_text());base=m['base']
origin=os.environ.get('PREVIEW_ORIGIN','http://127.0.0.1:4201').rstrip('/')
out=ROOT/'.browser-results/heritage';out.mkdir(parents=True,exist_ok=True)
checks=[];errors=[];external=[];server=None

def check(name,value):
 checks.append({'name':name,'passed':bool(value)})
 assert value,name

def visible(page):return page.locator('[data-bib-record]:visible').count()

def capture(page,name,full=False):page.screenshot(path=str(out/name),full_page=full)

try:
 if not os.environ.get('PREVIEW_ORIGIN'):
  server=subprocess.Popen(['node','scripts/serve.mjs'],cwd=ROOT,env={**os.environ,'PORT':'4201'},stdout=subprocess.DEVNULL)
  for _ in range(60):
   try:urllib.request.urlopen(origin+base+'tr/',timeout=1);break
   except Exception:time.sleep(.1)
 with sync_playwright() as p:
  browser=p.chromium.launch()
  for l in m['locales']:
   ctx=browser.new_context(accept_downloads=True,reduced_motion='reduce')
   page=ctx.new_page();page.on('pageerror',lambda e:errors.append(str(e)))
   page.on('request',lambda r:external.append(r.url)if r.url.startswith('http')and not r.url.startswith(origin+'/')else None)
   for w in [320,390,768,1440]:
    page.set_viewport_size({'width':w,'height':844 if w<600 else 1000})
    for route in ['', 'books/','publications/','resource/trauma-spirituality/','resource/spiritual-burnout/']:
     response=page.goto(origin+base+l+'/'+route,wait_until='networkidle')
     check(f'HTTP {l}/{route} {w}',response.status==200)
     check(f'release {l}/{route} {w}',page.locator('body').get_attribute('data-release')=='0.6.0')
     check(f'no overflow {l}/{route} {w}',page.evaluate('document.documentElement.scrollWidth<=innerWidth+1'))
     # Scroll loads actual catalogue thumbnails before measuring, not substituted placeholders.
     page.evaluate('window.scrollTo(0,document.body.scrollHeight)');page.wait_for_timeout(90)
     page.evaluate('window.scrollTo(0,0)')
     check(f'loaded visible images {l}/{route} {w}',page.evaluate('[...document.images].filter(i=>i.getBoundingClientRect().top<innerHeight).every(i=>i.complete&&i.naturalWidth>0)'))
     if not route:
      check('ebrucolophon '+l,'Battal_Ebru' in page.locator('.visual-credits').inner_html())
      check('latestdate '+l,page.locator('.research-lead time').get_attribute('datetime')=='2026-09-21')
      check('six real home covers '+l,page.locator('.book-room .book-cover').count()==6)
      check('motion reduced '+l,page.locator('.book-cover').first.evaluate("el=>getComputedStyle(el).transitionDuration")=='0s')
     if w in [390,1440]and (not route or l=='tr'):
      stem=l+'-'+(route.strip('/').replace('/','-')or'home')+'-'+str(w)
      capture(page,stem+'-top.png')
      if l=='tr':capture(page,stem+'-full.png',True)
   page.set_viewport_size({'width':1440,'height':1000})
   page.goto(origin+base+l+'/books/',wait_until='networkidle')
   check('nine books '+l,visible(page)==9)
   page.locator('#bib-q').fill('Travmanın');check('unicode book search '+l,visible(page)==1)
   page.locator('#bib-q').fill('no-record-marsam-xyz');check('empty state '+l,visible(page)==0 and page.locator('[data-bib-empty]').is_visible())
   page.locator('button[type=reset]').click();page.wait_for_timeout(80);check('reset books '+l,visible(page)==9)
   page.locator('#bib-author').select_option('Osman Hatun');check('editor filter '+l,visible(page)==1)
   page.reload(wait_until='networkidle');check('filter deep link '+l,visible(page)==1 and page.locator('#bib-author').input_value()=='Osman Hatun')
   page.locator('button[type=reset]').click();page.wait_for_timeout(80)
   page.locator('#bib-year').select_option('2026');check('edition year '+l,visible(page)==1)
   page.goto(origin+base+l+'/publications/',wait_until='networkidle');check('eight papers '+l,visible(page)==8)
   page.locator('#bib-author').select_option('Fatma Betül Karalı');check('verified coauthor filter '+l,visible(page)==2)
   page.locator('[data-bib-record]:visible details summary').first.focus();page.keyboard.press('Enter')
   check('keyboard original record '+l,page.locator('[data-bib-record]:visible details[open]').count()==1)
   page.goto(origin+base+l+'/resource/trauma-spirituality/',wait_until='networkidle')
   check('book metadata '+l,'978-625-8804-58-4' in page.locator('.bibliographic-detail').inner_text())
   with page.expect_download() as d:page.locator('a[download][href$=".ris"]').click()
   ris=Path(d.value.path()).read_text();check('real book RIS '+l,'TY  - BOOK' in ris and 'ED  - Halil Ekşi' in ris)
   page.goto(origin+base+l+'/resource/sipas/',wait_until='networkidle')
   with page.expect_download() as d:page.locator('a[download][href$=".bib"]').click()
   bib=Path(d.value.path()).read_text();check('real article BibTeX '+l,'@article{' in bib and '10.37898/spiritualpc.1793082' in bib)
   ctx.close()
  ctx=browser.new_context(java_script_enabled=False,viewport={'width':390,'height':844});page=ctx.new_page()
  for route,n in [('books',9),('publications',8)]:
   page.goto(origin+base+'tr/'+route+'/',wait_until='networkidle');check('no-JS '+route,visible(page)==n)
  ctx.close();browser.close()
 check('no JavaScript runtime errors',not errors)
 check('no third-party page requests',not external)
finally:
 if server:server.terminate();server.wait(timeout=10)
 (ROOT/'verification').mkdir(exist_ok=True)
 (ROOT/'verification/heritage-browser.json').write_text(json.dumps({'origin':origin,'version':m['version'],'checks':checks,'errors':errors,'externalRequests':external,'passed':all(x['passed']for x in checks),'nativeLanguageReview':False,'browser':'Chromium'},ensure_ascii=False,indent=2))
print(json.dumps({'passed':len(checks),'origin':origin}))
