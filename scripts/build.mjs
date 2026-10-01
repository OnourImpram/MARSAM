import {mkdir,writeFile,readFile,cp,rm} from 'node:fs/promises';
import {resolve,dirname} from 'node:path';
import {fileURLToPath} from 'node:url';
import {createHash} from 'node:crypto';
import {locales,labels,localeNames,langTags} from '../src/i18n.mjs';
import {sources,resources,sections} from '../src/content.mjs';
import {articles} from '../src/articles.mjs';
import {learningPaths} from '../src/info.mjs';
import {normalizeBase,validateContent,escapeHTML as e,exportRIS,exportBib,canPublish} from '../src/lib.mjs';
import {home,sectionPage,dossierPage,resourcePage,pathPage,searchIndex} from '../src/site.mjs';
const root=resolve(dirname(fileURLToPath(import.meta.url)),'..');
const base=normalizeBase(process.env.BASE_PATH||'/');
const errors=validateContent({locales,labels,sources,resources,sections,articles});
if(errors.length)throw new Error(errors.join('\n'));
if(process.env.PUBLISH==='true'){
  const pending=[...resources,...articles].filter(r=>!canPublish(r,createHash('sha256').update(JSON.stringify({...r,approval:undefined})).digest('hex')));
  if(pending.length)throw new Error(`PUBLICATION BLOCKED: ${pending.length} records lack artifact-bound scientific/language approval. Preview builds are not publication approval.`);
  throw new Error('PUBLICATION BLOCKED: institutional release authorization, source currency and rights review must be recorded before enabling production generation.');
}
const dist=resolve(root,'dist');await rm(dist,{recursive:true,force:true});await mkdir(dist,{recursive:true});await cp(resolve(root,'public'),dist,{recursive:true});
const paths=[];
async function emit(path,html){const target=resolve(dist,path,'index.html');await mkdir(dirname(target),{recursive:true});await writeFile(target,html);paths.push('/'+(path?path+'/':''));}
for(const l of locales){await emit(l,home(l,base));for(const s of sections)await emit(`${l}/${s.id}`,sectionPage(s.id,l,base));for(const a of articles)await emit(`${l}/dossier/${a.id}`,dossierPage(a,l,base));for(const r of resources)await emit(`${l}/resource/${r.id}`,resourcePage(r,l,base));for(const p of learningPaths)await emit(`${l}/learning/${p.id}`,pathPage(p,l,base));}
await mkdir(resolve(dist,'data'),{recursive:true});
for(const l of locales)await writeFile(resolve(dist,`data/search-${l}.json`),JSON.stringify(searchIndex(l,base)));
await writeFile(resolve(dist,'data/source-ledger.json'),JSON.stringify({schemaVersion:1,checked:'2026-10-01',editorialState:'preview',review:'SEQUENTIAL_ROLE_REVIEW',note:'Source identity and inspection scope are separate. Technical validation is not scientific approval. Audit fields below use English; interface and reading texts are localized.',sources},null,2));
await mkdir(resolve(dist,'citations'),{recursive:true});for(const s of sources){await writeFile(resolve(dist,`citations/${s.id}.ris`),exportRIS(s));await writeFile(resolve(dist,`citations/${s.id}.bib`),exportBib(s));}
const landing=`<!doctype html><html lang="tr"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="robots" content="noindex,nofollow"><meta name="referrer" content="no-referrer"><title>MARSAM · Language / Dil</title><link rel="stylesheet" href="${base}site.css"><link rel="icon" href="${base}brand.svg"></head><body><main class="root-landing"><span class="wordmark">MARSAM</span><h1>Bilgiden anlayışa.</h1><p>Maneviyat ve ruh sağlığı · Spirituality and mental health</p><nav class="root-languages" aria-label="Dil / Language">${locales.map(l=>`<a href="${base}${l}/" lang="${langTags[l]}">${e(localeNames[l])}</a>`).join('')}</nav><p class="muted">${e(labels.tr.previewNote)}</p></main></body></html>`;
await emit('',landing);
await writeFile(resolve(dist,'404.html'),`<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="robots" content="noindex,nofollow"><title>404 · MARSAM</title><link rel="stylesheet" href="${base}site.css"></head><body><main class="error-body"><span class="wordmark">MARSAM</span><h1>404</h1><p>Sayfa bulunamadı · Page not found · Seite nicht gefunden · 页面不存在 · Страница не найдена</p><nav>${locales.map(l=>`<a href="${base}${l}/" lang="${langTags[l]}">${e(localeNames[l])}</a>`).join('')}</nav></main></body></html>`);
await writeFile(resolve(dist,'robots.txt'),'User-agent: *\nDisallow: /\n');
await writeFile(resolve(dist,'_headers'),`/*\n  X-Robots-Tag: noindex, nofollow\n  X-Content-Type-Options: nosniff\n  Referrer-Policy: no-referrer\n  Permissions-Policy: camera=(), microphone=(), geolocation=()\n  Content-Security-Policy: default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self' data:; connect-src 'self'; font-src 'self'; object-src 'none'; base-uri 'self'; form-action 'self'; frame-src 'none'; frame-ancestors 'none'\n`);
const manifest={version:'0.1.0',base,mode:'preview',generatedAt:new Date().toISOString(),locales,pages:paths.length,contentRoutes:paths.length-1,paths,resources:resources.length,articles:articles.length,learningPaths:learningPaths.length,sources:sources.length,publicationAuthorized:false};
await writeFile(resolve(dist,'build-manifest.json'),JSON.stringify(manifest,null,2));
console.log(`Built ${paths.length} pages + 404, ${locales.length} languages, ${articles.length} dossiers, ${sources.length} source records. BASE_PATH=${base}. PREVIEW ONLY.`);
