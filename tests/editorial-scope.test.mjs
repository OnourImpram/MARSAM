import test from 'node:test';
import assert from 'node:assert/strict';
import {renderCampusHome,decorate,institutions,events} from '../src/campus.mjs';
import {locales,labels} from '../src/i18n.mjs';
import {sources,resources,sections} from '../src/content.mjs';
import {searchIndex} from '../src/site.mjs';
const brands=/Harvard|Duke|GWish|Danielsen|Columbia|\bSMBI\b|\bIAPR\b|RCPsych|Bilkent/i;
test('design benchmarks are not public catalogue institutions',()=>{
 assert.equal(institutions.length,0);assert.equal(events.length,0);
 assert.ok(!resources.some(r=>r.kind==='hub'));
 assert.ok(!sources.some(s=>brands.test(s.title+' '+s.url+' '+s.citation)));
});
test('centre name, not a personal research question, is the main headline',()=>{
 for(const l of locales){const h=renderCampusHome(l,'/MARSAM/');
 const title=h.match(/<h1[^>]*>([\s\S]*?)<\/h1>/)?.[1].replace(/<[^>]+>/g,'');
 assert.equal(title,labels[l].brand,l);
 assert.ok(!h.includes('hero-question'));assert.ok(!brands.test(h));
 assert.ok(!h.includes('kimin tercihi'));assert.ok(!h.includes('institution-grid'));
 }
});
test('navigation and search do not promote reference institutions',()=>{
 for(const l of locales){const h=decorate(renderCampusHome(l,'/MARSAM/'),l,'','/MARSAM/');
 assert.ok(!h.includes(`/${l}/network/`));
 assert.ok(!brands.test(JSON.stringify(searchIndex(l,'/MARSAM/'))));
 }
 assert.ok(!sections.some(s=>s.id==='network'));
});
test('homepage leads to centre research, education and publications',()=>{
 for(const l of locales){const h=renderCampusHome(l,'/MARSAM/');
 for(const page of ['collections','learning','library','projects','events','media'])assert.ok(h.includes(`/${l}/${page}/`),l+' '+page);
 const visible=h.replace(/<script[\s\S]*?<\/script>/g,'');assert.ok(!visible.includes('JSON'));assert.ok(!visible.includes('PARTIALLY_VERIFIED'));
 }
});
