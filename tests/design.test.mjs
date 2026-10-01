import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync,existsSync} from 'node:fs';
import {renderCampusHome,decorate} from '../src/campus.mjs';
import {locales,labels} from '../src/i18n.mjs';
import {resources} from '../src/content.mjs';

test('refined home has an explicit editorial hierarchy rather than the former repeated grid',()=>{
 for(const l of locales){const h=renderCampusHome(l,'/MARSAM/');
  for(const c of ['editorial-hero','study-index','publication-shelf','learning-feature','reading-selection'])assert.ok(h.includes(c),l+' '+c);
  assert.equal(h.match(/<h1[^>]*>([\s\S]*?)<\/h1>/)[1].replace(/<[^>]*>/g,''),labels[l].brand);
  assert.ok(!/Harvard|Duke|Columbia|SMBI|IAPR|Elif|mobilya|kimin tercihi/i.test(h));
 }
});
test('hero artwork is responsive and decorative, not falsely attributed campus photography',()=>{
 const h=renderCampusHome('tr','/MARSAM/');
 assert.ok(h.includes('ebru-marbling.webp'));assert.ok(h.includes('ebru-marbling-small.webp'));
 assert.match(h,/<img[^>]+class="hero-water"[^>]+alt=""/);
 assert.equal((h.match(/fetchpriority="high"/g)||[]).length,1);
});
test('design keeps the real sources, pathways and direct comparison controls',()=>{
 for(const l of locales){const h=decorate(renderCampusHome(l,'/MARSAM/'),l,'','/MARSAM/');
  for(const path of ['collections','library','learning','projects','events','media','compare'])assert.ok(h.includes(`/${l}/${path}/`));
  assert.ok(h.includes('data-compare-nav'));assert.ok(h.includes('data-release="0.6.0"'));
  assert.equal((h.match(/class="learning-choice"/g)||[]).length,3);
  assert.ok(h.includes('editorial.css'));
 }
 assert.equal(resources.length,27);
});
test('refinement has reduced-motion, print and RTL rules without hidden content tricks',()=>{
 assert.ok(existsSync(new URL('../public/editorial.css',import.meta.url)));
 const css=readFileSync(new URL('../public/editorial.css',import.meta.url),'utf8');
 for(const x of ['prefers-reduced-motion','@media print','[dir="rtl"]','focus-visible'])assert.ok(css.includes(x));
 assert.ok(!css.includes('body{overflow-x:hidden'));
});

test('publication-selection cards preserve the source type rather than calling every source a study',()=>{const h=renderCampusHome('tr','/');assert.ok(h.includes('Kuramsal çalışma'));});

test('preview server serves WebP and university PNG with image MIME types',()=>{const s=readFileSync(new URL('../scripts/serve.mjs',import.meta.url),'utf8');assert.ok(s.includes("'.webp':'image/webp'"));assert.ok(s.includes("'.png':'image/png'"));});
