/** Visual composition only. Existing catalogue, institutional status and language copy are authoritative. */
import {labels} from './i18n.mjs';
import {resources,typeKeys} from './content.mjs';
import {articles} from './articles.mjs';
import {learningPaths} from './info.mjs';
import {shell,icon,dossierCard,sourceById,resourceURL} from './site.mjs';
import {escapeHTML as e,route} from './lib.mjs';
import {centreRows as n} from './centre-copy.mjs';
import {campusCopy} from './campus-copy.mjs';
import {collections} from './campus-data.mjs';
const link=(url,text,cls='text-link')=>`<a class="${cls}" href="${url}">${e(text)} ${icon('arrow')}</a>`;
const label=(text)=>`<span class="eyebrow">${e(text)}</span>`;

function studyIndex(l,b){
 return `<div class="theme-grid study-index">${collections.map((x,i)=>`<a class="theme-tile ${i===0?'study-major':'study-row'}" href="${route(l,'collections',b)}#${x.id}"><span class="study-number">${String(i+1).padStart(2,'0')}</span>${i===0?`<div class="study-art" aria-hidden="true"><i></i><i></i><i></i><b></b></div>`:''}<div class="study-copy"><h3>${e(x.title[l])}</h3><p>${e(x.description[l])}</p></div><span class="study-arrow">${icon('arrow')}</span></a>`).join('')}</div>`;
}
function publication(r,l,b,i){
 const s=sourceById[r.sources[0]];
 return `<article class="publication-card ${i===0?'publication-feature':''}"><div class="publication-meta">${label(labels[l][typeKeys[s.kind]]||labels[l].references)}<span>${s.year||''}</span></div>${i===0?'<div class="publication-lines" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i></div>':''}<div class="publication-text"><h3>${link(resourceURL(l,r.id,b),r.title[l],'publication-title')}</h3><p>${e(r.summary[l])}</p></div><div class="publication-bottom">${link(resourceURL(l,r.id,b),labels[l].viewRecord)}<span class="publication-number" aria-hidden="true">0${i+1}</span></div></article>`;
}
export function renderEditorialHome(l,b){
 const t=labels[l],c=campusCopy[l];
 const pillars=[['research','researchLine','collections'],['education','educationLine','learning'],['practice','practiceLine','practice']];
 const selected=['theories-book','three-waves','integration-meta-analysis'].map(id=>resources.find(r=>r.id===id));
 const body=`
 <section class="editorial-hero" aria-labelledby="centre-title">
  <div class="wide editorial-hero-grid">
   <div class="editorial-hero-copy">${label(c.university+' · MARSAM')}<h1 id="centre-title">${e(t.brand)}</h1><p class="hero-deck">${e(n.lead[l])}</p><div class="hero-actions">${link(route(l,'collections',b),n.areas[l],'button')}${link(route(l,'library',b),n.viewLibrary[l])}</div></div>
   <div class="editorial-visual" aria-hidden="true"><picture><source media="(max-width: 650px)" srcset="${b}assets/water-640.webp"><img class="hero-water" src="${b}assets/water-1440.webp" alt="" width="1440" height="1080" fetchpriority="high" decoding="async"></picture><div class="visual-orbits"><i></i><i></i><i></i><b></b></div><span class="visual-signature" dir="ltr">MARSAM</span><div class="visual-caption"><span>${e(n.research[l])}</span><span>${e(n.education[l])}</span><span>${e(n.practice[l])}</span></div></div>
  </div>
 </section>
 <div class="wide centre-pillars editorial-pillars" aria-label="MARSAM">${pillars.map(([title,line,url],i)=>`<a href="${route(l,url,b)}"><span class="pillar-no">0${i+1}</span><div><h2>${e(n[title][l])}</h2><p>${e(n[line][l])}</p></div>${icon('arrow')}</a>`).join('')}</div>
 <div class="wide discovery-bar"><form action="${route(l,'search',b)}" method="get">${icon('search')}<label class="sr-only" for="hero-search">${e(t.searchLabel)}</label><input id="hero-search" type="search" name="q" placeholder="${e(t.searchLabel)}" maxlength="160" dir="auto"><button class="button compact" type="submit">${e(t.search)}</button></form><div class="discovery-links">${link(route(l,'measures',b),t.measures)}${link(route(l,'media',b),n.media[l])}</div></div>
 <section class="wide editorial-about"><div>${label(n.aboutTitle[l])}<h2>${e(n.research[l])}.<br>${e(n.education[l])}.<br><em>${e(n.practice[l])}.</em></h2></div><div class="about-copy"><p>${e(n.aboutText[l])}</p>${link(route(l,'about',b),n.aboutTitle[l])}</div></section>
 <section class="editorial-studies"><div class="wide section"><div class="editorial-section-heading"><div>${label('01 / MARSAM')}<h2>${e(n.areas[l])}</h2></div><p>${e(n.areasLead[l])}</p></div>${studyIndex(l,b)}</div></section>
 <section class="wide section editorial-publications"><div class="editorial-section-heading"><div>${label('02 / MARSAM')}<h2>${e(n.library[l])}</h2></div><div><p>${e(n.libraryLead[l])}</p>${link(route(l,'library',b),n.viewLibrary[l])}</div></div><div class="publication-shelf">${selected.map((r,i)=>publication(r,l,b,i)).join('')}</div></section>
 <section class="learning-feature"><div class="wide learning-feature-grid"><div class="learning-feature-intro">${label('03 / MARSAM')}<h2>${e(n.educationTitle[l])}</h2><p>${e(n.educationLead[l])}</p>${link(route(l,'learning',b),n.viewEducation[l],'button light')}<div class="learning-art" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i></div></div><div class="learning-choices">${learningPaths.map((p,i)=>`<details class="learning-choice" name="learning-pathway" ${i===0?'open':''}><summary><span class="choice-index">0${i+1}</span><h3>${e(t[p.audience])}</h3><span class="choice-plus" aria-hidden="true"></span></summary><div class="choice-body"><p>${e(p.summary[l])}</p>${link(route(l,`learning/${p.id}`,b),p.title[l])}</div></details>`).join('')}</div></div></section>
 <section class="wide section reading-selection"><div class="editorial-section-heading"><div>${label('04 / MARSAM')}<h2>${e(n.readings[l])}</h2></div><p>${e(n.readingsLead[l])}</p></div><div class="three-grid">${['theory-and-integration','culture-and-worldviews','assessment-and-permission'].map((id,i)=>dossierCard(articles.find(a=>a.id===id),l,b,i)).join('')}</div></section>
 <section class="editorial-updates"><div class="wide updates-grid"><div>${label('MARSAM')}<h2>${e(n.news[l])}</h2><p>${e(n.emptyNews[l])}</p>${link(route(l,'news',b),n.news[l])}</div><div class="update-item">${icon('layers')}<h3>${e(n.projects[l])}</h3><p>${e(n.projectsLead[l])}</p>${link(route(l,'projects',b),n.projects[l])}</div><div class="update-item">${icon('globe')}<h3>${e(n.events[l])}</h3><p>${e(n.eventLead[l])}</p>${link(route(l,'events',b),n.events[l])}</div></div></section>`;
 return shell(l,'',t.home,n.lead[l],body,b);
}
