import test from 'node:test';
import assert from 'node:assert/strict';
import {existsSync} from 'node:fs';

const moduleURL = new URL('../src/lib.mjs', import.meta.url);
test('shared validation module exists', () => assert.ok(existsSync(moduleURL), 'src/lib.mjs must implement the content and safety contracts'));

if (existsSync(moduleURL)) {
  const {escapeHTML, safeURL, normalizeText, route, canPublish, validateContent} = await import(moduleURL);
  const {locales, labels} = await import('../src/i18n.mjs');
  const {sources, resources, sections} = await import('../src/content.mjs');
  const {articles} = await import('../src/articles.mjs');
  test('exact five requested locales', () => assert.deepEqual(locales, ['tr','en','de','zh','ru']));
  test('locale key parity, no empty translation', () => {
    const walk = (x,p='') => Object.entries(x).flatMap(([k,v]) => typeof v === 'object' && !Array.isArray(v) ? walk(v,p+k+'.') : [p+k]);
    const keys = walk(labels.tr).sort();
    for (const l of locales) { assert.deepEqual(walk(labels[l]).sort(),keys,l); assert.ok(!JSON.stringify(labels[l]).includes('TODO')); }
  });
  test('HTML is escaped including quotes', () => assert.equal(escapeHTML('<img onerror="x"> & \'x\''),'&lt;img onerror=&quot;x&quot;&gt; &amp; &#39;x&#39;'));
  test('only https external URLs are accepted', () => {
    for (const u of ['javascript:alert(1)','data:text/html,test','http://example.com','//evil.test','https://user:pass@example.com']) assert.equal(safeURL(u),null,u);
    assert.equal(safeURL('https://doi.org/10.1037/amp0000821'),'https://doi.org/10.1037/amp0000821');
  });
  test('search normalizes Turkish and leaves Chinese readable', () => { assert.equal(normalizeText('İnanç ÖLÇEĞİ ışık'),'inanc olcegi isik'); assert.ok(normalizeText('精神健康').includes('精神')); });
  test('route encodes no unsafe traversal', () => { assert.equal(route('tr','library','/MARSAM/'),'/MARSAM/tr/library/'); assert.throws(()=>route('xx','library')); assert.throws(()=>route('tr','../secret')); });
  test('build records are coherent and every localized body exists', () => assert.deepEqual(validateContent({locales,labels,sources,resources,sections,articles}),[]));
  test('missing scientific authorization blocks publishing', () => { assert.equal(canPublish({review:'draft',rights:'link-only',translation:'draft',approval:null}),false); assert.equal(canPublish({review:'approved',rights:'owned',translation:'approved',approval:{by:'Editor',date:'2026-10-01',hash:'a'.repeat(64)}}),true); });
  test('preview never silently upgrades sources to full verification', () => { for(const s of sources) {assert.ok(['VERIFIED','PARTIALLY_VERIFIED','FAILED','UNVERIFIABLE'].includes(s.status)); assert.ok(['V0','V1','V2','V3'].includes(s.level)); assert.ok(s.access.length>10); assert.ok(s.limit.length>10); assert.ok(s.checked); } });
  test('resource and article IDs are globally unique', () => {const ids=[...resources,...articles].map(x=>x.id); assert.equal(ids.length,new Set(ids).size);});
  test('no scale items or participant response objects are shipped', () => { for(const r of resources) {assert.ok(!('items' in r)); assert.ok(!('responses' in r));} });
}
