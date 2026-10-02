import {labels,resources,articles,learningPaths} from './catalogue.mjs';
import {centreRows as n} from './centre-copy.mjs';
import {collections} from './campus-data.mjs';
import {shell} from './chrome.mjs';
import {icon,resourceURL} from './ui.mjs';
import {dossierCard} from './site.mjs';
import {recentFeature,booksFeature} from './publications-view.mjs';
import {message} from './messages.mjs';
import {escapeHTML as e,route} from './lib.mjs';
const link=(url,text,cls='text-link')=>`<a class="${cls}" href="${url}">${e(text)} ${icon('arrow')}</a>`;
export function renderEditorialHome(l,base) {
 const t=labels[l];
 const body=`
 <section class="editorial-hero heritage-hero" aria-labelledby="centre-title"><div class="wide editorial-hero-grid">
  <div class="editorial-hero-copy"><span class="eyebrow">${e(message('site.kicker',l))}</span><h1 id="centre-title">${e(t.brand)}</h1><p class="hero-deck">${e(n.lead[l])}</p>
  <form class="hero-search-form" action="${route(l,'search',base)}" method="get"><label for="hero-search">${e(message('search.prompt',l))}</label><div>${icon('search')}<input id="hero-search" type="search" name="q" maxlength="160" dir="auto" autocomplete="off"><button class="button" type="submit">${e(t.search)} ${icon('arrow')}</button></div></form>
  <div class="hero-actions">${link(route(l,'library',base),message('nav.library',l))}${link(route(l,'books',base),t.books)}${link(route(l,'publications',base),t.publications)}</div>
  </div>
  <div class="heritage-art" aria-hidden="true"><div class="manuscript-frame"><picture class="ebru-sheet"><source media="(max-width: 800px)" srcset="${base}assets/heritage/ebru-marbling-small.webp"><img class="hero-water" src="${base}assets/heritage/ebru-marbling.webp" srcset="${base}assets/heritage/ebru-marbling-small.webp 650w, ${base}assets/heritage/ebru-marbling.webp 1192w" sizes="320px" alt="" width="1192" height="1450" decoding="async" fetchpriority="low"></picture><div class="manuscript-inner"><img src="${base}assets/heritage/rosette.svg" width="160" height="160" alt=""><span class="manuscript-wordmark" dir="ltr">MARSAM</span><span class="manuscript-subline">${e(message('nav.research',l))} · ${e(message('nav.learn',l))}</span><img class="heritage-floral" src="${base}assets/heritage/floral.svg" width="75" height="75" alt=""></div></div></div>
 </div></section>
 <section class="wide audience-section" aria-labelledby="audience-title"><div class="section-heading compact-heading"><h2 id="audience-title">${e(message('paths.title',l))}</h2><a href="${route(l,'learning',base)}">${e(t.learning)} ${icon('arrow')}</a></div><div class="audience-paths">${learningPaths.map((p,i)=>`<a class="audience-path" href="${route(l,'learning/'+p.id,base)}"><span class="folio" aria-hidden="true">0${i+1}</span><div><h3>${e(t[p.audience])}</h3><p>${e(p.summary[l])}</p></div>${icon('arrow')}</a>`).join('')}</div></section>
 ${recentFeature(l,base)}
 ${booksFeature(l,base)}
 <section class="wide section editorial-studies"><div class="editorial-section-heading"><div><span class="eyebrow">${e(message('nav.explore',l))}</span><h2>${e(n.areas[l])}</h2></div><p>${e(n.areasLead[l])}</p></div><div class="study-index">${collections.map((x,i)=>`<a class="study-row" href="${route(l,'collections',base)}#${x.id}"><span class="study-number" aria-hidden="true">0${i+1}</span><div><h3>${e(x.title[l])}</h3><p>${e(x.description[l])}</p></div>${icon('arrow')}</a>`).join('')}</div></section>
 <section class="reading-selection"><div class="wide section"><div class="editorial-section-heading"><div><span class="eyebrow">${e(message('nav.learn',l))}</span><h2>${e(n.readings[l])}</h2></div><p>${e(n.readingsLead[l])}</p></div><div class="three-grid">${['theory-and-integration','culture-and-worldviews','assessment-and-permission'].map((id,i)=>dossierCard(articles.find(a=>a.id===id),l,base,i)).join('')}</div></div></section>
 <section class="wide section trust-entry"><div><span class="eyebrow">MARSAM</span><h2>${e(message('governance.title',l))}</h2><p>${e(message('governance.lead',l))}</p>${link(route(l,'governance',base),t.readPolicy)}</div><div class="trust-paths">${link(route(l,'about',base),message('about.public',l))}${link(route(l,'contribute',base),message('about.editor',l))}${link(route(l,'research',base),message('collection.full',l))}</div></section>`;
 return shell(l,'',t.home,n.lead[l],body,base);
}
