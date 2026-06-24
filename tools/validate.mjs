import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';

const root = process.cwd();
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const js = fs.readFileSync(path.join(root, 'assets/js/app.js'), 'utf8');
const css = fs.readFileSync(path.join(root, 'assets/css/styles.css'), 'utf8');
const sw = fs.readFileSync(path.join(root, 'sw.js'), 'utf8');

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

const refs = [...html.matchAll(/(?:href|src)="([^"]+)"/g)].map(match => match[1]).filter(ref => !ref.startsWith('#') && !ref.startsWith('http'));
for (const ref of refs) assert(fs.existsSync(path.join(root, ref)), `Missing asset: ${ref}`);

const ids = [...html.matchAll(/id="([^"]+)"/g)].map(match => match[1]);
const duplicates = ids.filter((id, index) => ids.indexOf(id) !== index);
assert(duplicates.length === 0, `Duplicated IDs: ${duplicates.join(', ')}`);

const constants = js.slice(0, js.indexOf('const STORAGE_KEY')).replace(/const /g, 'var ');
const ctx = {};
vm.createContext(ctx);
vm.runInContext(constants, ctx);
assert(ctx.PRINCIPLES.length === 100, `Expected 100 principles, found ${ctx.PRINCIPLES.length}`);
assert(ctx.SCENARIOS.length === 50, `Expected 50 scenarios, found ${ctx.SCENARIOS.length}`);
assert(ctx.QUIZ.length === 100, `Expected 100 quiz questions, found ${ctx.QUIZ.length}`);
assert(ctx.CAMPAIGN.length === 13, `Expected 13 campaign missions, found ${ctx.CAMPAIGN.length}`);
assert(ctx.SCENARIOS.every(s => s.options?.length >= 3 && s.options.every(o => typeof o.score === 'number' && o.feedback)), 'Invalid scenario options');
assert(ctx.QUIZ.every(q => q.choices?.length === 4 && Number.isInteger(q.answer) && q.answer >= 0 && q.answer < 4), 'Invalid quiz questions');
assert(/Content-Security-Policy/.test(html), 'Missing CSP meta tag');
assert(!/unsafe-inline/.test(html), 'CSP should not allow unsafe-inline');
assert(/@media \(max-width:1100px\)/.test(css) && /@media \(max-width:680px\)/.test(css), 'Missing responsive breakpoints');
assert(/CACHE='sun-tzu-strategy-lab-campaign-v4'/.test(sw), 'Service worker cache version is not v4');

console.log('Validation OK');
console.log(JSON.stringify({ principles: ctx.PRINCIPLES.length, scenarios: ctx.SCENARIOS.length, quiz: ctx.QUIZ.length, campaign: ctx.CAMPAIGN.length, assets: refs.length }, null, 2));
