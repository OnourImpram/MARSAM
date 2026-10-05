import test from 'node:test';
import assert from 'node:assert/strict';
import {strategicSections,bridges} from '../src/roadmap/platform.mjs';
const locales=['tr','en','de','zh','ru','ar','id','ms'];

test('roadmap public section and bridge records expose every locale',()=>{
 for(const record of [...strategicSections,...bridges]){
  for(const field of record.summary?['title','summary']:['title','text']){
   for(const locale of locales) assert.ok(record[field]?.[locale]?.trim(),record.id+'/'+field+'/'+locale);
  }
 }
});

test('roadmap locale state does not imply human review',()=>{
 for(const record of [...strategicSections,...bridges]) assert.equal(record.humanReviewed??false,false);
});
