import {locales} from './languages.mjs';
/** Shared, side-effect-free contracts. All editorial text is escaped at render time. */
export function escapeHTML(value='') { return String(value).replace(/[&<>"']/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }
export function safeURL(value) { try { const u=new URL(value); return u.protocol==='https:'&&!u.username&&!u.password ? u.href : null; } catch { return null; } }
export function normalizeText(value='') { return String(value).replace(/İ/g,'i').replace(/I/g,'i').toLocaleLowerCase('tr').replace(/ı/g,'i').normalize('NFD').replace(/\p{Diacritic}/gu,'').replace(/[\u0640\u064b-\u065f\u0670]/g,'').replace(/[أإآٱ]/g,'ا').replace(/ى/g,'ي'); }
export function normalizeBase(base='/') { if(!/^\/(?:[A-Za-z0-9_-]+\/)*$/.test(base)) throw new Error('BASE_PATH must be / or a slash-delimited safe path, e.g. /MARSAM/'); return base; }
export function route(locale,path='',base='/') { if(!locales.includes(locale))throw new Error('Unsupported locale'); if(path&&!/^[a-z0-9]+(?:[-/][a-z0-9]+)*$/.test(path))throw new Error('Invalid content path');return `${normalizeBase(base)}${locale}/${path?path+'/':''}`; }
export function canPublish(record,expectedHash=null) { const a=record?.approval;return record?.review==='approved'&&['owned','permission-recorded','link-only'].includes(record?.rights)&&record?.translation==='approved'&&typeof a?.by==='string'&&!!a.by.trim()&&/^\d{4}-\d{2}-\d{2}$/.test(a?.date||'')&&/^[a-f0-9]{64}$/.test(a?.hash||'')&&(!expectedHash||a.hash===expectedHash); }
export function validateContent({locales,labels,sources,resources,sections,articles}) {
 const errors=[];const ids=new Set();
 for(const l of locales)if(!labels[l])errors.push(`missing label dictionary ${l}`);
 if(new Set(sources.map(x=>x.id)).size!==sources.length)errors.push('duplicate source id'); const sourceIds=new Set(sources.map(s=>s.id));const sectionIds=new Set(sections.map(s=>s.id));
 const translated=(obj,where)=>{for(const l of locales)if(typeof obj?.[l]!=='string'||!obj[l].trim())errors.push(`${where}: missing ${l}`);};
 for(const [l,dict]of Object.entries(labels))for(const[k,v]of Object.entries(dict))if(typeof v!=='string'||!v.trim())errors.push(`label ${l}.${k}`);
 for(const s of sources){if(!safeURL(s.url))errors.push(`source ${s.id}: unsafe URL`);if(!s.citation||!s.access||!s.limit||!s.checked)errors.push(`source ${s.id}: missing provenance`);if(!['V0','V1','V2','V3'].includes(s.level))errors.push(`source ${s.id}: invalid depth`);if(!['VERIFIED','PARTIALLY_VERIFIED','FAILED','UNVERIFIABLE'].includes(s.status))errors.push(`source ${s.id}: invalid status`);}
 for(const item of [...resources,...articles]){if(ids.has(item.id))errors.push(`duplicate ${item.id}`);ids.add(item.id);if(!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(item.id))errors.push(`bad id ${item.id}`);translated(item.title,`${item.id}.title`);translated(item.summary,`${item.id}.summary`);for(const sid of item.sources||[])if(!sourceIds.has(sid))errors.push(`${item.id}: unknown source ${sid}`);for(const cat of item.sections||[])if(!sectionIds.has(cat))errors.push(`${item.id}: unknown section ${cat}`);}
 for(const item of articles){if(!item.sources?.length)errors.push(`${item.id}: no sources`);for(const l of locales){const b=item.body?.[l];if(!Array.isArray(b)||b.length<3)errors.push(`${item.id}: missing body ${l}`);else for(const x of b)if(!x.heading||!x.text)errors.push(`${item.id}: incomplete section ${l}`);}translated(item.limit,`${item.id}.limit`);translated(item.prompt,`${item.id}.prompt`);}
 for(const s of sections){translated(s.title,`${s.id}.title`);translated(s.summary,`${s.id}.summary`);}
 return errors;
}
export function readingMinutes(text,locale){const n=locale==='zh'?String(text).replace(/\s/g,'').length/350:String(text).split(/\s+/).length/180;return Math.max(2,Math.ceil(n));}
export function exportRIS(source){const year=String(source.year||'');return `TY  - ${source.kind==='study'?'JOUR':'GEN'}\nTI  - ${source.title}\nPY  - ${year}\nUR  - ${source.url}\nN1  - ${source.citation}\nER  - \n`;}
export function exportBib(source){const e=s=>String(s).replace(/[{}]/g,'').replace(/\n/g,' ');return `@misc{${source.id.replace(/-/g,'')},\n  title = {${e(source.title)}},\n  year = {${source.year||''}},\n  url = {${e(source.url)}},\n  note = {${e(source.citation)}}\n}\n`;}
