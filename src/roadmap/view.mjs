import {shell} from '../chrome.mjs';
import {labels,resources} from '../catalogue.mjs';
import {escapeHTML as e,route,safeURL} from '../lib.mjs';
import {resourceURL,icon} from '../ui.mjs';
import {instruments,datasets,constructs,bridges,q} from './platform.mjs';
const tx=(x,l)=>x?.[l]||x?.en||x;
const intro=(l,b,title,lead)=>`<div class="wide page-intro"><nav class="breadcrumbs" aria-label="${e(labels[l].home)}"><a href="${route(l,'',b)}">${e(labels[l].home)}</a><span aria-hidden="true">/</span><span>${e(tx(title,l))}</span></nav><span class="eyebrow">MARSAM</span><h1>${e(tx(title,l))}</h1><p class="page-deck">${e(tx(lead,l))}</p></div>`;
const sourceList=(ids,l,b)=>`<ul class="scholar-sources">${ids.map(id=>{const r=resources.find(x=>x.sources.includes(id));return r?`<li><a href="${resourceURL(l,r.id,b)}">${e(r.title[l])}</a></li>`:'';}).join('')}</ul>`;
const review=l=>`<p class="scholar-review">${e(l==='tr'?'Bu katman kaynak doğrulaması yapılmış, insan bilimsel onayı bekleyen editoryal taslaktır. Ölçek maddeleri yeniden yayımlanmaz.':'This layer is a source-checked editorial draft awaiting human scientific review. Instrument items are not republished.')}</p>`;
export function measurementObservatoryPage(l,b){
 const title=q('Ölçme Gözlemevi','Measurement Observatory'),lead=q('Aynı adı taşıyan araçları birleştirmeden ölçek ailesi, sürüm, dil formu, geliştirme veya uyarlama statüsü, ölçüm özelliği ve izin durumunu birlikte incele.','Inspect instrument family, version, language form, development or adaptation status, measurement properties and permissions without collapsing similarly named tools.');
 const cards=instruments.map(x=>`<article class="scholar-theme"><span class="eyebrow">${e(x.status)} · <bdi>${e(x.language)}</bdi></span><h2><bdi>${e(x.title)}</bdi></h2><dl><dt>Construct</dt><dd>${e(x.construct)}</dd><dt>Evidence</dt><dd>${e(x.properties.join(' · '))}</dd><dt>Invariance</dt><dd>${e(x.invariance)}</dd><dt>${e(labels[l].rights)}</dt><dd>${e(x.rights)}</dd></dl>${sourceList([x.sourceId],l,b)}</article>`).join('');
 return shell(l,'measurement-observatory',tx(title,l),tx(lead,l),intro(l,b,title,lead)+`<div class="wide section scholarly-page">${review(l)}<div class="two-grid">${cards}</div><p class="prose">${e(l==='tr'?'Bir aracın yüksek iç tutarlılık göstermesi, başka bir kültürde aynı yapıyı ölçtüğünü veya bireysel klinik karar için uygun olduğunu tek başına göstermez.':'High internal consistency alone does not establish cross-cultural equivalence or suitability for individual clinical decisions.')}</p></div>`,b);
}
export function evidenceBridgesPage(l,b){
 const title=q('Türkiye · Uluslararası Kanıt Köprüleri','Türkiye · International Evidence Bridges'),lead=q('Farklı tasarımları eşitlemeden, Türkiye bulgularını uluslararası ve kültürler arası kanıtla birlikte oku.','Read Turkish findings alongside international and cross-cultural evidence without treating unlike designs as equivalent.');
 const cards=bridges.map(x=>`<section class="scholar-theme" id="${e(x.id)}"><h2>${e(tx(x.title,l))}</h2><p>${e(tx(x.text,l))}</p>${sourceList(x.sourceIds,l,b)}</section>`).join('');
 return shell(l,'evidence-bridges',tx(title,l),tx(lead,l),intro(l,b,title,lead)+`<div class="wide section scholarly-page">${review(l)}<div class="scholar-theme-grid">${cards}</div></div>`,b);
}
export function datasetRegistryPage(l,b){
 const title=q('Araştırma Veri Setleri Dizini','Research Dataset Registry'),lead=q('Veriyi yeniden barındırmadan resmi erişim yolunu, araştırma kapsamını ve çıkarım sınırını birlikte göster.','Show official access routes, research scope and inferential limits without rehosting data.');
 const cards=datasets.map(x=>`<article class="scholar-theme"><h2>${e(x.title)}</h2><p>${e(x.scope)}</p><p class="muted">${e(x.access)}</p><a class="text-link" href="${e(safeURL(x.url))}" target="_blank" rel="noopener noreferrer">${e(labels[l].openSource)} ${icon('external')}</a></article>`).join('');
 return shell(l,'datasets',tx(title,l),tx(lead,l),intro(l,b,title,lead)+`<div class="wide section scholarly-page">${review(l)}<div class="two-grid">${cards}</div></div>`,b);
}
export function constructDictionaryPage(l,b){
 const title=q('Yapı ve Kavram Sözlüğü','Construct Dictionary'),lead=q('Yakın görünen kavramların sınırlarını tanı, fakat tanımları tanı veya klinik hükme dönüştürme.','Make boundaries between adjacent constructs explicit without turning definitions into diagnoses or clinical judgments.');
 const cards=constructs.map(x=>`<article class="scholar-theme" id="${e(x.id)}"><h2>${e(l==='tr'?x.tr:x.en)}</h2><p>${e(x.boundary)}</p></article>`).join('');
 return shell(l,'construct-dictionary',tx(title,l),tx(lead,l),intro(l,b,title,lead)+`<div class="wide section scholarly-page">${review(l)}<div class="two-grid">${cards}</div></div>`,b);
}
export const roadmapRenderers={'measurement-observatory':measurementObservatoryPage,'evidence-bridges':evidenceBridgesPage,datasets:datasetRegistryPage,'construct-dictionary':constructDictionaryPage};
