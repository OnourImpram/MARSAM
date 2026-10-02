import {renderCampusHome,campusRenderers} from '../src/campus.mjs';
import {mkdir,writeFile,readFile,cp,rm} from 'node:fs/promises';
import {resolve,dirname} from 'node:path';
import {fileURLToPath} from 'node:url';
import {createHash} from 'node:crypto';
import {locales,localeNames,langTags} from '../src/languages.mjs';
import {labels,sources,resources,sections,articles,learningPaths} from '../src/catalogue.mjs';
import {RELEASE} from '../src/release.mjs';
import {knowledgeLedger,translationLedger,validateRelationships} from '../src/provenance.mjs';
import {message,messages,translationRecord} from '../src/messages.mjs';
import {tokenCSS} from './styles.mjs';
import {normalizeBase,validateContent,escapeHTML as e,exportRIS,exportBib,canPublish} from '../src/lib.mjs';
import {languagePacks} from '../src/translate.mjs';
import {sectionPage,dossierPage,resourcePage,pathPage,searchIndex} from '../src/site.mjs';
const root=resolve(dirname(fileURLToPath(import.meta.url)),'..');
const base=normalizeBase(process.env.BASE_PATH||'/');
const errors=validateContent({locales,labels,sources,resources,sections,articles});
if(errors.length)throw new Error(errors.join('\n'));
if(process.env.PUBLISH==='true'){
  const pending=[...resources,...articles].filter(r=>!canPublish(r,createHash('sha256').update(JSON.stringify({...r,approval:undefined})).digest('hex')));
  if(pending.length)throw new Error(`PUBLICATION BLOCKED: ${pending.length} records lack artifact-bound scientific/language approval. Preview builds are not publication approval.`);
  throw new Error('PUBLICATION BLOCKED: institutional release authorization, source currency and rights review must be recorded before enabling production generation.');
}
const dist=resolve(root,'dist');await rm(dist,{recursive:true,force:true});await mkdir(dist,{recursive:true});await cp(resolve(root,'public'),dist,{recursive:true,filter:path=>!/(?:water-(?:640|1440)\.webp)$/.test(path)});
await writeFile(resolve(dist,'site.css'),tokenCSS()+await readFile(resolve(root,'public/site.css'),'utf8'));
const paths=[];
async function emit(path,html){const target=resolve(dist,path,'index.html');await mkdir(dirname(target),{recursive:true});const [locale,...parts]=path.split('/');await writeFile(target,html);paths.push('/'+(path?path+'/':''));}
for(const l of locales){await emit(l,renderCampusHome(l,base));for(const s of sections)await emit(`${l}/${s.id}`,(campusRenderers[s.id]?campusRenderers[s.id](l,base):sectionPage(s.id,l,base)));for(const a of articles)await emit(`${l}/dossier/${a.id}`,dossierPage(a,l,base));for(const r of resources)await emit(`${l}/resource/${r.id}`,resourcePage(r,l,base));for(const p of learningPaths)await emit(`${l}/learning/${p.id}`,pathPage(p,l,base));}
await mkdir(resolve(dist,'data'),{recursive:true});
for(const l of locales)await writeFile(resolve(dist,`data/search-${l}.json`),JSON.stringify(searchIndex(l,base)));
await writeFile(resolve(dist,'data/source-ledger.json'),JSON.stringify({schemaVersion:1,checked:'2026-10-01',editorialState:'preview',review:'SEQUENTIAL_ROLE_REVIEW',note:'Source identity and inspection scope are separate. Technical validation is not scientific approval. Audit fields below use English; interface and reading texts are localized.',sources},null,2));
await mkdir(resolve(dist,'citations'),{recursive:true});for(const s of sources){await writeFile(resolve(dist,`citations/${s.id}.ris`),exportRIS(s));await writeFile(resolve(dist,`citations/${s.id}.bib`),exportBib(s));}
// The project root opens the full Turkish preview, not a placeholder splash.
await emit('',renderCampusHome('tr',base));
await writeFile(resolve(dist,'404.html'),`<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="robots" content="noindex,nofollow"><title>404 · MARSAM</title><link rel="stylesheet" href="${base}site.css?v=${RELEASE.version}"></head><body><main class="error-body"><span class="wordmark">MARSAM</span><h1>404</h1><p>Sayfa bulunamadı · Page not found · Seite nicht gefunden · 页面不存在 · Страница не найдена · الصفحة غير موجودة · Halaman tidak ditemukan · Halaman tidak dijumpai</p><nav>${locales.map(l=>`<a href="${base}${l}/" lang="${langTags[l]}"><bdi>${e(localeNames[l])}</bdi></a>`).join('')}</nav></main></body></html>`);
await writeFile(resolve(dist,'.nojekyll'),'');
await writeFile(resolve(dist,'robots.txt'),'User-agent: *\nDisallow: /\n');
// GitHub Pages does not apply a Netlify-style _headers file. HTTP headers are measured at release.
const knowledge=knowledgeLedger();const relationshipErrors=validateRelationships(knowledge.relationships);if(relationshipErrors.length)throw Error(relationshipErrors.join('\n'));
await writeFile(resolve(dist,'data/knowledge-ledger.json'),JSON.stringify(knowledge,null,2));
const translationRecords=translationLedger();
await writeFile(resolve(dist,'data/translation-records.json'),JSON.stringify({schemaVersion:1,review:'AI_ASSISTED_DRAFT',humanReviewed:false,records:translationRecords},null,2));
const uiRecords=Object.keys(messages).flatMap(id=>locales.map(l=>translationRecord(id,l,message(id,'tr'),message(id,l))));
await writeFile(resolve(dist,'data/interface-review.json'),JSON.stringify({schemaVersion:1,records:uiRecords},null,2));
await writeFile(resolve(dist,'data/design-tokens.json'),await readFile(resolve(root,'src/tokens.json'),'utf8'));
const manifest={institution:{name:'Marmara University',relationship:'planned-centre',faculty:'Atatürk Eğitim Fakültesi',department:'Eğitim Bilimleri Bölümü',division:'Rehberlik ve Psikolojik Danışmanlık Anabilim Dalı',plannedHomeSource:'project-owner clarification, 2026-10-02',unitNameSource:'https://aef.marmara.edu.tr/bolumler-programlar/egitim-bilimleri',formalApprovalVerified:false},previewDeploymentAuthorized:process.env.PAGES_PREVIEW==='true',version:RELEASE.version,release:RELEASE.id,base,mode:'preview',generatedAt:new Date().toISOString(),locales,pages:paths.length,contentRoutes:paths.length-1,paths,resources:resources.length,articles:articles.length,learningPaths:learningPaths.length,sources:sources.length,publicationAuthorized:false,localeReview:Object.fromEntries(locales.map(l=>[l,{status:'AI_ASSISTED_DRAFT',humanReviewed:false,direction:l==='ar'?'rtl':'ltr'}]))};
await writeFile(resolve(dist,'data/translation-status.json'),JSON.stringify({locales,review:'AI_ASSISTED_DRAFT',humanReviewed:false,additionalLanguages:Object.keys(languagePacks),regionalScope:'Indonesian and Malay. No Javanese or Sundanese.',sourceBinding:'Exact source strings. Missing translation fails the build.'},null,2));
await writeFile(resolve(dist,'build-manifest.json'),JSON.stringify(manifest,null,2));
console.log(`Built ${paths.length} pages + 404, ${locales.length} languages, ${articles.length} dossiers, ${sources.length} source records. BASE_PATH=${base}. PREVIEW ONLY.`);
