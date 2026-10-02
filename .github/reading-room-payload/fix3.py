from pathlib import Path
p=Path('public/site.css');s=p.read_text()
def swap(old,new):
 global s
 if new in s:return
 assert old in s,old
 s=s.replace(old,new)
swap('body{margin:0;', 'body{overflow-wrap:anywhere;margin:0;')
swap('.resource-aside{order:-1;display:grid;grid-template-columns:1fr 1fr;', '.resource-aside{order:-1;display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);')
swap('.card-top{display:flex;', '.card-top{display:flex;flex-wrap:wrap;')
swap('.mobile-nav{display:none}', '.mobile-nav{flex:0 0 auto;max-width:100%;display:none}')
swap('.comparison-picker select{max-width:100%;font-size:.85rem}', '.comparison-picker select{max-width:100%;overflow:hidden;text-overflow:ellipsis;font-size:.85rem}')
swap('.footer-main{grid-template-columns:1fr 1fr;', '.footer-main{grid-template-columns:minmax(0,1fr) minmax(0,1fr);')
p.write_text(s)
