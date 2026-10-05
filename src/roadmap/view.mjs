import {shell} from '../chrome.mjs';
import {labels,resources} from '../catalogue.mjs';
import {escapeHTML as e,route,safeURL} from '../lib.mjs';
import {resourceURL,icon} from '../ui.mjs';
import {instruments,datasets,constructs,bridges,q} from './platform.mjs';
import {road,datasetText} from './copy.mjs';
const tx=(x,l)=>x?.[l]||x?.en||x;
const intro=(l,b,title,lead)=>`<div class="wide page-intro"><nav class="breadcrumbs" aria-label="${e(labels[l].home)}"><a href="${route(l,'',b)}">${e(labels[l].home)}</a><span aria-hidden="true">/</span><span>${e(tx(title,l))}</span></nav><span class="eyebrow">MARSAM</span><h1>${e(tx(title,l))}</h1><p class="page-deck">${e(tx(lead,l))}</p></div>`;
const sourceList=(ids,l,b)=>`<ul class="scholar-sources">${ids.map(id=>{const r=resources.find(x=>x.sources.includes(id));return r?`<li><a href="${resourceURL(l,r.id,b)}">${e(r.title[l])}</a></li>`:'';}).join('')}</ul>`;
const trInstrument={
 status:{adaptation:'uyarlama',development:'geliştirme',validation:'doğrulama','independent-validation':'bağımsız doğrulama'},
 construct:{'religious and spiritual struggles':'dini ve manevi mücadele','spiritual psychological robustness':'manevi psikolojik sağlamlık','spiritual empathy fatigue':'manevi empati yorgunluğu','spiritual well-being':'manevi iyi oluş','complicated spiritual grief':'karmaşık manevi yas','spiritual distress':'manevi sıkıntı'},
 property:{'internal consistency':'iç tutarlılık','convergent/divergent validity':'yakınsak ve ayrışan geçerlik','criterion validity':'ölçüt geçerliği','test-retest':'test tekrar test','factor structure':'faktör yapısı','original conceptualization and measurement':'özgün kavramsallaştırma ve ölçüm','incremental validity':'artımsal geçerlik','content validity':'kapsam geçerliği','concurrent validity':'eşzamanlı geçerlik'},
 invariance:{'not reported in inspected abstract':'incelenen özette bildirilmedi','cross-cultural invariance not established':'kültürler arası değişmezlik gösterilmedi','not established':'gösterilmedi','see source record':'kaynak kaydındaki kanıta bakın','language and population specific evidence required':'dil ve örneklem için ayrı kanıt gerekir','cross-language invariance not established by this record':'bu kayıt diller arası değişmezliği göstermiyor','adaptation evidence does not establish cross-language invariance':'uyarlama kanıtı tek başına diller arası değişmezlik kanıtı değildir'}
};
const instrumentText=(l,kind,value)=>{
 if(l!=='tr')return value;
 if(kind==='status')return trInstrument.status[value]||value;
 if(kind==='construct')return trInstrument.construct[value]||value;
 if(kind==='property')return trInstrument.property[value]||value;
 if(kind==='invariance')return trInstrument.invariance[value]||value;
 return value;
};
const trBoundary={
 'spiritual-distress':'Manevi anlam, bağ veya çatışmayla ilişkili sıkıntıyı ifade eder. Düşük manevi iyi oluşla eş anlamlı değildir ve bir tanı değildir.',
 'rs-struggle':'İlahi, kişilerarası, ahlaki, kuşku veya nihai anlam alanlarındaki çatışma ve gerilimi kapsar. Hem olumlu hem olumsuz sonuçlarla ilişkili olabilir.',
 'religious-trauma':'Tartışmalı bir şemsiye terimdir. Tek bir sendrom varsaymak yerine travmatik olay, olumsuz dini deneyim, zorlama, stigma ve travma sonrası sonuçlar ayrı kaydedilmelidir.',
 'worldview-nonreligion':'Dini, manevi, seküler, ateist, agnostik ve diğer anlam sistemleri olası dünya görüşleridir. Hiçbiri varsayılan kabul edilmez.',
 'spiritual-bypassing':'Manevi çerçevelerin çözülmemiş psikolojik sıkıntıdan kaçınacak biçimde kullanılmasını anlatır. Kültüre duyarlı yorumlanmalıdır ve tanısal bir etiket değildir.',
 'cultural-humility':'Güç ilişkileri, varsayımlar ve kişinin kendi anlam sistemi üzerine süreğen özdüşünümsel bir tutumdur. Bir kültüre bütünüyle hâkim olma iddiası değildir.',
 'measurement-invariance':'Belirli varsayımlar altında puanların gruplar veya zamanlar arasında karşılaştırılabilir olduğuna ilişkin kanıttır. Çeviri veya yüksek iç tutarlılık tek başına değişmezliği göstermez.',
 'adverse-religious-experiences':'Zorlama, stigma, istismar, dışlanma veya manevi açıdan zarar verici deneyimler için betimleyici bir kategoridir. Mekanizma ile sonuç ayrı kaydedilmelidir.'
};
export function measurementObservatoryPage(l,b){
 const title={ [l]:road(l,'measurementTitle') },lead={ [l]:road(l,'measurementLead') };
 const cards=instruments.map(x=>`<article class="scholar-theme"><span class="eyebrow">${e(instrumentText(l,'status',x.status))} · <bdi>${e(x.language)}</bdi></span><h2><bdi>${e(x.title)}</bdi></h2><dl><dt>${e(road(l,'construct'))}</dt><dd>${e(instrumentText(l,'construct',x.construct))}</dd><dt>${e(road(l,'evidence'))}</dt><dd>${e(x.properties.map(v=>instrumentText(l,'property',v)).join(' · '))}</dd><dt>${e(road(l,'invariance'))}</dt><dd>${e(instrumentText(l,'invariance',x.invariance))}</dd></dl>${sourceList([x.sourceId],l,b)}</article>`).join('');
 return shell(l,'measurement-observatory',tx(title,l),tx(lead,l),intro(l,b,title,lead)+`<div class="wide section scholarly-page"><div class="two-grid">${cards}</div><p class="prose">${e(road(l,'consistency'))}</p></div>`,b);
}
export function evidenceBridgesPage(l,b){
 const title={ [l]:road(l,'bridgesTitle') },lead={ [l]:road(l,'bridgesLead') };
 const cards=bridges.map(x=>`<section class="scholar-theme" id="${e(x.id)}"><h2>${e(tx(x.title,l))}</h2><p>${e(tx(x.text,l))}</p>${sourceList(x.sourceIds,l,b)}</section>`).join('');
 return shell(l,'evidence-bridges',tx(title,l),tx(lead,l),intro(l,b,title,lead)+`<div class="wide section scholarly-page"><div class="scholar-theme-grid">${cards}</div></div>`,b);
}
export function datasetRegistryPage(l,b){
 const title={ [l]:road(l,'datasetsTitle') },lead={ [l]:road(l,'datasetsLead') };
 const cards=datasets.map(x=>`<article class="scholar-theme"><h2>${e(x.title)}</h2><p>${e(datasetText(x.id,l,0))}</p><p class="muted">${e(datasetText(x.id,l,1))}</p><a class="text-link" href="${e(safeURL(x.url))}" target="_blank" rel="noopener noreferrer">${e(labels[l].openSource)} ${icon('external')}</a></article>`).join('');
 return shell(l,'datasets',tx(title,l),tx(lead,l),intro(l,b,title,lead)+`<div class="wide section scholarly-page"><div class="two-grid">${cards}</div></div>`,b);
}
export function constructDictionaryPage(l,b){
 const title={ [l]:road(l,'constructsTitle') },lead={ [l]:road(l,'constructsLead') };
 const cards=constructs.map(x=>`<article class="scholar-theme" id="${e(x.id)}"><h2>${e(l==='tr'?x.tr:x.en)}</h2><p>${e(l==='tr'?(trBoundary[x.id]||x.boundary):x.boundary)}</p></article>`).join('');
 return shell(l,'construct-dictionary',tx(title,l),tx(lead,l),intro(l,b,title,lead)+`<div class="wide section scholarly-page"><div class="two-grid">${cards}</div></div>`,b);
}
export const roadmapRenderers={'measurement-observatory':measurementObservatoryPage,'evidence-bridges':evidenceBridgesPage,datasets:datasetRegistryPage,'construct-dictionary':constructDictionaryPage};
