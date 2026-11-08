const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = __dirname;
const sandbox = { window: { ATLAS: { subjects: {} } } };
vm.createContext(sandbox);

const dir = path.join(root, 'js/data');
const files = [...fs.readFileSync(path.join(root, 'index.html'), 'utf8').matchAll(/<script src="js\/data\/([^"]+)"><\/script>/g)].map(m => m[1]);
let errors = 0;
if (!files.length || new Set(files).size !== files.length) {
  throw new Error('Data scripts missing or loaded twice in index.html');
}
const onDisk = fs.readdirSync(dir).filter(f => f.endsWith('.js'));
for (const f of onDisk) {
  if (!files.includes(f)) { errors++; console.log('UNLOADED DATA', f); }
}

for (const f of files) {
  const code = fs.readFileSync(path.join(dir, f), 'utf8');
  try {
    new vm.Script(code, { filename: f });
    vm.runInContext(code, sandbox, { filename: f });
    console.log('OK  ', f);
  } catch (e) {
    errors++;
    console.log('ERR ', f, '-', e.message);
  }
}

const subjects = sandbox.window.ATLAS.subjects;
const ids = new Set();
const stats = [];

for (const sid in subjects) {
  const s = subjects[sid];
  let n = 0;
  for (const b of s.branches || []) {
    if (!b.id || !b.name || !b.topics) {
      errors++; console.log('ERR branch missing fields:', sid, b.id);
    }
    const branchTopicIds = new Set();
    for (const t of b.topics || []) {
      n++;
      const key = sid + '/' + t.id;
      if (ids.has(key)) { errors++; console.log('DUP', key); }
      ids.add(key);
      if (branchTopicIds.has(t.id)) { errors++; console.log('DUP in branch', key); }
      branchTopicIds.add(t.id);
      if (!t.name || !t.brief || !t.definition || !t.intuition || !t.formulas || !t.example) {
        errors++; console.log('MISSING FIELDS', key);
      }
      const all = JSON.stringify(t);
      for (let i = 0; i < all.length; i++) {
        const c = all.charCodeAt(i);
        if (c < 32 && c !== 10 && c !== 13 && c !== 9) {
          errors++;
          console.log('CTRL CHAR in', key, 'U+' + c.toString(16));
          break;
        }
      }
    }
  }
  stats.push(`${s.name}: ${s.branches.length} branches, ${n} topics`);
}

for (const sid in subjects) {
  const s = subjects[sid];
  for (const b of s.branches || []) {
    for (const t of b.topics || []) {
      for (const ref of t.related || []) {
        let target = ref;
        if (!ref.includes('/')) target = sid + '/' + ref;
        if (!ids.has(target)) { errors++; console.log('BAD RELATED', sid + '/' + t.id, '->', ref); }
      }
    }
  }
}

if (sandbox.window.ATLAS.overview) {
  for (const b of sandbox.window.ATLAS.overview.branches) {
    for (const t of b.topics || []) {
      if (!ids.has(b.id + '/' + t.id)) { errors++; console.log('BAD OVERVIEW LEAF', b.id, '->', t.id); }
    }
  }
}


const extras = sandbox.window.ATLAS.extras || {};
const learning = sandbox.window.ATLAS.learning || {};
for (const key of ids) {
  const card = learning[key];
  if (!card || ['boundary', 'question', 'answer'].some(f => typeof card[f] !== 'string' || !card[f].trim())) {
    errors++; console.log('MISSING LEARNING CARD', key);
  }
  if (!extras[key] || !extras[key].insight || !extras[key].examples?.length) {
    errors++; console.log('MISSING EXTRAS', key);
  }
}
for (const collection of [extras, learning]) {
  for (const key of Object.keys(collection)) {
    if (!ids.has(key)) { errors++; console.log('ORPHAN SUPPLEMENT', key); }
  }
}
function checkStrings(value, location) {
  if (typeof value === 'string') {
    if (/[\x00-\x08\x0b\x0c\x0e-\x1f]/.test(value)) {
      errors++; console.log('INVALID CONTROL CHARACTER', location);
    }
  } else if (value && typeof value === 'object') {
    for (const [key, child] of Object.entries(value)) checkStrings(child, location + '/' + key);
  }
}
checkStrings(sandbox.window.ATLAS, 'ATLAS');

const book = sandbox.window.ATLAS.proofBook;
if (!book || !book.bases || !Array.isArray(book.proofs) || !book.proofs.length) {
  errors++; console.log('MISSING PROOF BOOK');
} else {
  const proofMap = new Map();
  for (const proof of book.proofs) {
    if (proofMap.has(proof.id) || book.bases[proof.id]) { errors++; console.log('DUP PROOF', proof.id); }
    proofMap.set(proof.id, proof);
    if (!proof.id || !proof.title || !proof.statement || !proof.idea || !Array.isArray(proof.dependencies) ||
        !Array.isArray(proof.steps) || proof.steps.length < 2 || !Array.isArray(proof.topics) || !proof.topics.length ||
        !proof.steps[proof.steps.length - 1]?.includes('\\square')) {
      errors++; console.log('MALFORMED PROOF', proof.id);
    }
    for (const topic of proof.topics || []) {
      if (!ids.has(topic)) { errors++; console.log('ORPHAN PROOF TOPIC', proof.id, topic); }
    }
  }
  const active = new Set(), done = new Set();
  function visitProof(id) {
    if (book.bases[id] || done.has(id)) return;
    if (!proofMap.has(id)) { errors++; console.log('MISSING PROOF DEPENDENCY', id); return; }
    if (active.has(id)) { errors++; console.log('CIRCULAR PROOF DEPENDENCY', id); return; }
    active.add(id);
    for (const dep of proofMap.get(id).dependencies || []) visitProof(dep);
    active.delete(id); done.add(id);
  }
  for (const id of proofMap.keys()) visitProof(id);
  console.log('Proofs:', book.proofs.length, '| Explicit foundations:', Object.keys(book.bases).length);
}

if (ids.size !== 319 || Object.keys(learning).length !== 319) {
  errors++; console.log('UNEXPECTED TOPIC COVERAGE', ids.size, Object.keys(learning).length);
}
// The standalone build must use the exact same script sequence as the website.
const builder = fs.readFileSync(path.join(root, 'build_single.py'), 'utf8');
const dataList = builder.match(/DATA_FILES = \[([\s\S]*?)\]/);
const bundled = dataList ? [...dataList[1].matchAll(/'([^']+\.js)'/g)].map(m => m[1]) : [];
if (JSON.stringify(bundled) !== JSON.stringify(files)) {
  errors++; console.log('BUNDLE DATA ORDER MISMATCH');
}

console.log('\n' + stats.join('\n'));
console.log('Total ids:', ids.size, '| Errors:', errors);
process.exitCode = errors ? 1 : 0;