/** MARSAM public institutional composition. No design-benchmark directory. */
import {locales,labels,langTags,sourceNotes} from './i18n.mjs';
import {sources,resources,sections,topics,typeKeys} from './content.mjs';
import {articles} from './articles.mjs';
import {overview,learningPaths} from './info.mjs';
import {shell,icon,sourceById,dossierCard,resourceCard,articleURL,resourceURL} from './site.mjs';
import {escapeHTML as e,route,safeURL} from './lib.mjs';
import {campusCopy,campusRows as cr,C} from './campus-copy.mjs';
import {dossierTitles,pathSummaries,publicationSummaries,permissionsText} from './catalogue-copy.mjs';
import {centreRows as n} from './centre-copy.mjs';
import {institutions,collections,events} from './campus-data.mjs';
import {parseSelection,eventState} from '../public/campus-core.js';
export {campusCopy,institutions,collections,events,parseSelection,eventState};
for(const l of locales){
 Object.assign(campusCopy[l],{scope:C('Özet','Summary','Zusammenfassung','摘要','Краткое описание','ملخص','Ringkasan','Ringkasan')[l],heroLead:n.lead[l],collections:n.areas[l],collectionLead:n.areasLead[l],events:n.events[l],eventsLead:n.eventLead[l],status:n.institutionNotice[l]});
 for(const key of ['heroFirst','heroSecond','heroQuestion','question','institutionMap','mapLead'])delete campusCopy[l][key];
 Object.assign(labels[l],{preview:campusCopy[l].preview,previewNote:n.institutionNotice[l],heroText:n.lead[l],collections:n.areas[l],compare:campusCopy[l].compare,events:n.events[l],center:n.centre[l],research:n.research[l],learn:n.education[l],explore:n.resources[l],library:n.library[l],readings:n.readings[l],readingsIntro:n.readingsLead[l],selectedSources:n.library[l],selectedSourcesIntro:n.libraryLead[l],forYou:n.educationTitle[l],forYouIntro:n.educationLead[l],student:n.students[l],professional:n.professionals[l],researcher:n.researchers[l],learning:n.learning[l],media:n.media[l],news:n.news[l],projects:n.projects[l],practicePage:n.practiceTitle[l],footerLine:n.footer[l],featuredTitle:labels[l].brand,browse:n.viewLibrary[l],startLearning:n.viewEducation[l],heroTitle:labels[l].brand,heroAccent:n.research[l]});
}
for(const a of articles)if(dossierTitles[a.id])a.title=dossierTitles[a.id];
for(const p of learningPaths)if(pathSummaries[p.id])p.summary=pathSummaries[p.id];
for(const r of resources)if(publicationSummaries[r.id])r.summary=publicationSummaries[r.id];
overview.editorial[2].text=permissionsText;
overview.about=[{title:n.aboutTitle,text:n.aboutText},{title:n.areas,text:n.areasLead},{title:n.educationTitle,text:n.educationLead}];
// Source-based teaching text remains in dossiers. Institutional pages do not borrow personal reflections.
for(const id of ['collections','compare','events'])if(!sections.some(s=>s.id===id))sections.push({id,title:id==='collections'?n.areas:id==='events'?n.events:cr.compare,summary:id==='collections'?n.areasLead:id==='events'?n.eventLead:cr.compareLead,group:id==='events'?'center':'research',topic:'methods'});
const updated={library:[n.library,n.libraryLead],learning:[n.learning,n.educationLead],media:[n.media,n.mediaLead],projects:[n.projects,n.projectsLead],about:[n.aboutTitle,n.aboutText],news:[n.news,n.emptyNews],practice:[n.practiceTitle,n.practiceLead]};
for(const [id,[title,summary]]of Object.entries(updated)){const s=sections.find(x=>x.id===id);if(s){s.title=title;s.summary=summary;}}
const ext=(url,title,cls='text-link')=>`<a href="${e(safeURL(url)||'')}" class="${cls}" target="_blank" rel="noopener noreferrer">${e(title)} ${icon('external')}</a>`;
const link=(url,title,cls='text-link')=>`<a class="${cls}" href="${url}">${e(title)} ${icon('arrow')}</a>`;
const json=x=>JSON.stringify(x).replace(/</g,'\\u003c');
const heading=(title,desc='',eyebrow='MARSAM')=>`<div class="section-heading"><div><span class="eyebrow">${e(eyebrow)}</span><h2>${e(title)}</h2>${desc?`<p>${e(desc)}</p>`:''}</div></div>`;
const intro=(l,title,text,b)=>`<div class="wide page-intro"><nav class="breadcrumbs" aria-label="${e(labels[l].home)}"><a href="${route(l,'',b)}">${e(labels[l].home)}</a><span aria-hidden="true">/</span><span>${e(title)}</span></nav><span class="eyebrow">MARSAM</span><h1>${e(title)}</h1><p class="page-deck">${e(text)}</p></div>`;
function compareButton(id,l){const c=campusCopy[l];return `<button type="button" class="compare-toggle" data-compare-id="${e(id)}" aria-pressed="false" title="${e(c.compareAdd)}">${icon('layers')}<span>${e(c.compareAdd)}</span></button>`;}
export function comparisonRows(items,l){return items.map(r=>{const s=sourceById[r.sources[0]];return {id:r.id,title:r.title[l],summary:r.summary[l],type:labels[l][typeKeys[s.kind]],citation:s.citation,inspection:labels[l][s.inspection==='official'?'officialPage':s.inspection==='metadata'?'metadataOnly':'abstractOnly'],limit:sourceNotes[s.id]?.[l]||labels[l].verificationNote,rights:s.id==='s-fica'?r.summary[l]:s.id==='s-flourish'?sourceNotes[s.id][l]:labels[l].rightsNote,review:`${s.level} / ${s.status}`,checked:s.checked,url:s.url};});}

function collectionTiles(l,b){return `<div class="theme-grid">${collections.map((x,i)=>`<a class="theme-tile" href="${route(l,'collections',b)}#${x.id}"><div class="tile-top"><span class="folio">0${i+1}</span>${icon(i%2?'book':'layers')}</div><h3>${e(x.title[l])}</h3><p>${e(x.description[l])}</p><span class="theme-bottom">${e(labels[l].open)} ${icon('arrow')}</span></a>`).join('')}</div>`;}
export function renderCampusHome(l,b){const t=labels[l],c=campusCopy[l];
 const pillars=[['research','researchLine','collections'],['education','educationLine','learning'],['practice','practiceLine','practice']];
 const selected=['theories-book','three-waves','integration-meta-analysis'].map(id=>resources.find(r=>r.id===id));
 const body=`<section class="campus-hero centre-hero"><div class="wide campus-hero-grid"><div class="campus-hero-copy"><span class="eyebrow">${e(c.university)} · MARSAM</span><h1>${e(t.brand)}</h1><p>${e(n.lead[l])}</p><div class="hero-actions">${link(route(l,'collections',b),n.viewAreas[l],'button light')}${link(route(l,'library',b),n.viewLibrary[l])}</div></div><div class="centre-pillars" aria-label="MARSAM">${pillars.map(([title,line,url],i)=>`<a href="${route(l,url,b)}"><span class="pillar-no">0${i+1}</span><div><h2>${e(n[title][l])}</h2><p>${e(n[line][l])}</p></div>${icon('arrow')}</a>`).join('')}</div></div></section>
 <div class="wide discovery-bar"><form action="${route(l,'search',b)}" method="get">${icon('search')}<label class="sr-only" for="hero-search">${e(t.searchLabel)}</label><input id="hero-search" type="search" name="q" placeholder="${e(t.searchLabel)}" maxlength="160" dir="auto"><button class="button" type="submit">${e(t.search)}</button></form><div class="discovery-links">${link(route(l,'measures',b),t.measures)}${link(route(l,'media',b),n.media[l])}</div></div>
 <section class="wide section centre-introduction"><div><span class="eyebrow">${e(n.aboutTitle[l])}</span><h2>${e(n.research[l])}. ${e(n.education[l])}. ${e(n.practice[l])}.</h2></div><div><p>${e(n.aboutText[l])}</p>${link(route(l,'about',b),n.aboutTitle[l])}</div></section>
 <section class="paper-section"><div class="wide section">${heading(n.areas[l],n.areasLead[l])}${collectionTiles(l,b)}</div></section>
 <section class="wide section centre-publications">${heading(n.library[l],n.libraryLead[l])}<div class="source-list">${selected.map(r=>resourceCard(r,l,b)).join('')}</div><div class="catalogue-actions">${link(route(l,'library',b),n.viewLibrary[l])}</div></section>
 <section class="wide section"><div class="portal-introduction"><div><span class="eyebrow">MARSAM</span><h2>${e(n.educationTitle[l])}</h2><p>${e(n.educationLead[l])}</p>${link(route(l,'learning',b),n.viewEducation[l])}</div><div class="audience-routes">${learningPaths.map((p,i)=>`<a href="${route(l,`learning/${p.id}`,b)}"><span class="route-index">0${i+1}</span><div><h3>${e(t[p.audience])}</h3><p>${e(p.summary[l])}</p></div>${icon('arrow')}</a>`).join('')}</div></div></section>
 <section class="paper-section"><div class="wide section">${heading(n.readings[l],n.readingsLead[l])}<div class="three-grid">${['theory-and-integration','culture-and-worldviews','assessment-and-permission'].map((id,i)=>dossierCard(articles.find(a=>a.id===id),l,b,i)).join('')}</div></div></section>
 <section class="wide section centre-updates"><div>${heading(n.projects[l])}<p>${e(n.projectsLead[l])}</p>${link(route(l,'projects',b),n.projects[l])}</div><div>${heading(n.events[l])}<p>${e(n.eventLead[l])}</p>${link(route(l,'events',b),n.events[l])}</div></section>
 <section class="wide section"><div class="campus-closing"><div><span class="eyebrow">MARSAM</span><h2>${e(n.news[l])}</h2><p>${e(n.emptyNews[l])}</p></div>${link(route(l,'news',b),n.news[l],'button')}</div></section>`;
 return shell(l,'',t.home,n.lead[l],body,b);
}
export function renderCollections(l,b){const c=campusCopy[l],t=labels[l];return shell(l,'collections',n.areas[l],n.areasLead[l],intro(l,n.areas[l],n.areasLead[l],b)+`<div class="wide section"><nav class="collection-jumps" aria-label="${e(n.areas[l])}">${collections.map(x=>`<a href="#${x.id}">${e(x.title[l])}</a>`).join('')}</nav>${collections.map((x,i)=>`<section class="collection-section" id="${x.id}">${heading(x.title[l],x.description[l],`0${i+1}`)}<div class="collection-columns"><div><h3 class="collection-label">${e(t.readings)}</h3>${x.readings.map(id=>{const a=articles.find(z=>z.id===id);return `<article class="collection-reading"><h3>${link(articleURL(l,id,b),a.title[l])}</h3><p>${e(a.summary[l])}</p></article>`;}).join('')}</div><div><h3 class="collection-label">${e(t.references)}</h3><div class="source-list">${x.resources.map(id=>resourceCard(resources.find(z=>z.id===id),l,b)).join('')}</div>${link(route(l,'compare',b)+'?ids='+x.resources.join(','),c.compare)}</div></div></section>`).join('')}</div>`,b);}
function emptyPage(id,l,b,title,lead,message,target,targetLabel){return shell(l,id,title,lead,intro(l,title,lead,b)+`<div class="wide section"><section class="centre-empty"><span class="eyebrow">MARSAM</span><p>${e(message)}</p>${link(route(l,target,b),targetLabel)}</section></div>`,b);}
export const renderEvents=(l,b)=>emptyPage('events',l,b,n.events[l],n.eventLead[l],n.emptyEvent[l],'learning',n.viewEducation[l]);
const renderMedia=(l,b)=>emptyPage('media',l,b,n.media[l],n.mediaLead[l],n.emptyMedia[l],'learning',n.viewEducation[l]);
const renderNews=(l,b)=>emptyPage('news',l,b,n.news[l],'',n.emptyNews[l],'events',n.events[l]);
const renderProjects=(l,b)=>emptyPage('projects',l,b,n.projects[l],n.projectsLead[l],n.emptyProjects[l],'collections',n.viewAreas[l]);
export function renderCompare(l,b){const c=campusCopy[l],t=labels[l];const rows=comparisonRows(resources,l);
 return shell(l,'compare',c.compare,c.compareLead,intro(l,c.compare,c.compareLead,b)+`<div class="wide section" data-compare-page><div class="notice">${icon('circle')}<p>${e(c.reviewNote)} ${e(t.verificationNote)}</p></div><form class="comparison-picker">${[1,2,3,4].map(i=>`<div><label for="compare-${i}">${e(c.choose)} ${i}</label><select id="compare-${i}" data-compare-slot><option value="">${e(c.none)}</option>${resources.map(r=>`<option value="${r.id}">${e(r.title[l])}</option>`).join('')}</select></div>`).join('')}</form><div class="comparison-actions"><a class="text-link" data-comparison-share href="${route(l,'compare',b)}">${e(c.share)} ${icon('external')}</a><button type="button" class="button secondary" data-comparison-export>${e(c.export)}</button></div><div data-compare-results aria-live="polite"></div><noscript><div class="source-list">${resources.slice(0,4).map(r=>resourceCard(r,l,b)).join('')}</div><p>${e(t.needsJS)}</p></noscript><script type="application/json" data-comparison-records>${json(rows)}</script></div>`,b);
}

export const campusRenderers={collections:renderCollections,compare:renderCompare,events:renderEvents,media:renderMedia,news:renderNews,projects:renderProjects};
export function decorate(html,l,path,b){if(!l)return html;const t=labels[l],c=campusCopy[l];
 html=html.replace('</head>',`<link rel="stylesheet" href="${b}campus.css"><script type="module" src="${b}campus.js"></script></head>`).replace('<body ',`<body data-campus="marmara-preview" data-release="0.4.0" `).replace('content="#173f38"','content="#003d72"');
 html=html.replace(/<a class="brand" href="[^"]+"[^>]*>[\s\S]*?<\/a>/,`<div class="institution-lockup"><a class="university-signature" href="https://www.marmara.edu.tr/" target="_blank" rel="noopener noreferrer"><img src="${b}assets/marmara-${l==='tr'?'tr':'en'}.png" alt="${e(c.university)}" width="210" height="66"></a><span class="lockup-rule" aria-hidden="true"></span><a class="brand campus-brand" href="${route(l,'',b)}"><span><span class="wordmark" dir="ltr">MARSAM</span><span class="brand-sub">${e(t.brand)}</span></span></a></div>`);
 const toolbar=`<div class="campus-tools"><nav class="wide" aria-label="${e(c.tools)}">${['collections','compare','events'].map(k=>`<a href="${route(l,k,b)}" ${path===k?'aria-current="page"':''} ${k==='compare'?'data-compare-nav':''}>${e(c[k])}${k==='compare'?'<span class="compare-count" data-compare-count>0</span>':''}</a>`).join('')}<a href="${route(l,'media',b)}">${e(t.media)}</a></nav></div>`;
 html=html.replace('</header>','</header>'+toolbar);
 html=html.replace(/<article class="source-card"[\s\S]*?<\/article>/g,card=>{const m=card.match(/\/resource\/([a-z0-9-]+)\//);return m?card.replace('</article>',compareButton(m[1],l)+'</article>'):card;});
 if(path.startsWith('resource/'))html=html.replace('<div class="aside-save">',compareButton(path.split('/')[1],l)+'<div class="aside-save">');
 html=html.replace('</body>',`<script type="application/json" id="campus-data">${json({locale:l,base:b,copy:c,labels:t,resourceIds:resources.map(r=>r.id)})}</script></body>`);
 html=html.replace(/(src|href)="([^"]+\.(?:css|js))"/g,'$1="$2?v=0.4.0"');
 return html;
}
