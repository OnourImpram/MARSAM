let selected=0,comparison=false;
const choices=document.getElementById('choices'),frame=document.getElementById('preview'),frame2=document.getElementById('preview2'),other=document.getElementById('other');
files.forEach((f,i)=>{const b=document.createElement('button');b.type='button';b.className='choice';b.innerHTML='<span class="num">'+String(i+1).padStart(2,'0')+'</span><span><b>'+f.name+'</b><em>'+f.description.slice(0,40)+'</em></span>';b.onclick=()=>select(i);choices.appendChild(b);const o=document.createElement('option');o.value=i;o.textContent=String(i+1).padStart(2,'0')+' · '+f.name;other.appendChild(o);});
function select(i){selected=i;frame.srcdoc=files[i].html;document.getElementById('title').textContent=String(i+1).padStart(2,'0')+' · '+files[i].name;document.getElementById('description').textContent=files[i].description;document.getElementById('counter').textContent=String(i+1).padStart(2,'0')+' / 10';[...choices.children].forEach((b,j)=>b.setAttribute('aria-current',String(i===j)));if(comparison)renderOther();}
function renderOther(){frame2.srcdoc=files[Number(other.value)].html}
other.onchange=renderOther;
document.getElementById('mobile').onclick=()=>document.querySelectorAll('.framewrap').forEach(x=>x.classList.add('mobile'));
document.getElementById('desktop').onclick=()=>document.querySelectorAll('.framewrap').forEach(x=>x.classList.remove('mobile'));
document.getElementById('compare').onclick=()=>{comparison=!comparison;document.getElementById('frames').classList.toggle('compare',comparison);document.getElementById('second').hidden=!comparison;other.hidden=!comparison;document.getElementById('compare').textContent=comparison?'Tekli görünüm':'Yan yana';if(comparison){other.value=(selected+1)%10;renderOther();}};
function download(blob,name){const u=URL.createObjectURL(blob),a=document.createElement('a');a.href=u;a.download=name;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(u),1500);}
document.getElementById('one').onclick=()=>download(new Blob([files[selected].html],{type:'text/html;charset=utf-8'}),'MARSAM-'+files[selected].slug+'.html');
function u16(n){return Uint8Array.of(n&255,(n>>>8)&255)}function u32(n){return Uint8Array.of(n&255,(n>>>8)&255,(n>>>16)&255,(n>>>24)&255)}
function join(parts){const size=parts.reduce((n,p)=>n+p.length,0),out=new Uint8Array(size);let pos=0;for(const p of parts){out.set(p,pos);pos+=p.length}return out}
function crc32(bytes){let c=0xffffffff;for(const b of bytes){c^=b;for(let i=0;i<8;i++)c=(c>>>1)^((c&1)?0xedb88320:0)}return(c^0xffffffff)>>>0}
document.getElementById('all').onclick=()=>{const enc=new TextEncoder(),locals=[],centrals=[];let offset=0,centralSize=0;
for(const f of files){const name=enc.encode('MARSAM-'+f.slug+'.html'),bytes=enc.encode(f.html),crc=crc32(bytes),size=bytes.length;
const local=join([u32(0x04034b50),u16(20),u16(0),u16(0),u16(0),u16(0),u32(crc),u32(size),u32(size),u16(name.length),u16(0),name,bytes]);locals.push(local);
const central=join([u32(0x02014b50),u16(20),u16(20),u16(0),u16(0),u16(0),u16(0),u32(crc),u32(size),u32(size),u16(name.length),u16(0),u16(0),u16(0),u16(0),u32(0),u32(offset),name]);centrals.push(central);centralSize+=central.length;offset+=local.length;}
const end=join([u32(0x06054b50),u16(0),u16(0),u16(files.length),u16(files.length),u32(centralSize),u32(offset),u16(0)]);
download(new Blob([...locals,...centrals,end],{type:'application/zip'}),'MARSAM-10-HTML-Tasarim-Alternatifi.zip');};
select(0);