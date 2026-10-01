import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
test('compact search labels stay on one line across scripts',()=>{
 const css=readFileSync(new URL('../public/editorial.css',import.meta.url),'utf8');
 assert.ok(css.includes('.discovery-bar form>button{white-space:nowrap;flex-shrink:0}'));
});
