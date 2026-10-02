from pathlib import Path

def replace(path,old,new):
    p=Path(path);s=p.read_text()
    if new in s:return
    assert old in s,(path,old)
    p.write_text(s.replace(old,new))
# Preserve readable text instead of clipping overflow at the page boundary.
replace('public/site.css','p{max-width:74ch}','p{max-width:74ch;overflow-wrap:anywhere}')
replace('public/site.css','.nav-wrap{display:flex;align-items:center;','.nav-wrap{display:flex;flex-wrap:wrap;align-items:center;')
replace('public/site.css','.preview-strip>.wide{display:flex;justify-content:space-between;','.preview-strip>.wide{display:flex;flex-wrap:wrap;justify-content:space-between;')
replace('public/site.css','.view-switch{display:flex;','.view-switch{min-inline-size:0;max-inline-size:100%;display:flex;')
replace('public/site.css','.field{margin-bottom:1.2rem}', '.field{min-width:0;margin-bottom:1.2rem}')
replace('public/site.css','grid-template-columns:2fr 1fr 1fr auto;', 'grid-template-columns:minmax(0,2fr) minmax(0,1fr) minmax(0,1fr) auto;')
replace('public/site.css','.filter-bar,.bibliography-filters{grid-template-columns:1fr 1fr;', '.filter-bar,.bibliography-filters{grid-template-columns:minmax(0,1fr) minmax(0,1fr);')
replace('public/site.css','.comparison-scroll{overflow:auto;max-width:100%;', '.comparison-scroll{overflow:auto;min-width:0;width:100%;max-width:100%;')
replace('public/site.css','.comparison-picker select{font-size:.85rem}', '.comparison-picker>div{min-width:0}.comparison-picker select{max-width:100%;font-size:.85rem}')
replace('public/site.css','.toast{position:fixed;', '.toast{overflow-wrap:anywhere;position:fixed;')
replace('public/site.css','.book-imprint{display:flex;', '.book-imprint{overflow-wrap:anywhere;display:flex;')
replace('public/site.css','.text-link{display:inline-flex;', '.text-link{max-width:100%;overflow-wrap:anywhere;display:inline-flex;')
replace('public/site.css','.button{display:inline-flex;', '.button{max-width:100%;overflow-wrap:anywhere;display:inline-flex;')
# Retain glyph/native-control overflow evidence for any remaining failure.
p=Path('tests/browser_suite.py');s=p.read_text()
old="(self.output / 'overflow.json').write_text(json.dumps({'name': name, 'size': size, 'offenders': offenders}, ensure_ascii=False, indent=2))"
new="""intrinsic = page.evaluate(\"\"\"() => [...document.querySelectorAll('body *')].filter(e=>{const s=getComputedStyle(e);return e.clientWidth>0&&e.scrollWidth>e.clientWidth+1&&s.overflowX==='visible'}).map(e=>({tag:e.tagName,cls:String(e.className),text:e.textContent.slice(0,100),scroll:e.scrollWidth,client:e.clientWidth,rect:e.getBoundingClientRect().toJSON()}))\"\"\")
            (self.output / 'overflow.json').write_text(json.dumps({'name': name, 'size': size, 'offenders': offenders, 'intrinsic': intrinsic}, ensure_ascii=False, indent=2))"""
if new not in s:
 assert old in s;s=s.replace(old,new);p.write_text(s)
