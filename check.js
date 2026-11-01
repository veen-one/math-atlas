const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = __dirname;
const sandbox = { window: { ATLAS: { subjects: {} } } };
vm.createContext(sandbox);

const dir = path.join(root, 'js/data');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.js')).sort();
let errors = 0;

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
        if (!ids.has(target)) console.log('BAD RELATED', sid + '/' + t.id, '->', ref);
      }
    }
  }
}

if (sandbox.window.ATLAS.overview) {
  for (const b of sandbox.window.ATLAS.overview.branches) {
    for (const t of b.topics || []) {
      if (!ids.has(b.id + '/' + t.id)) console.log('BAD OVERVIEW LEAF', b.id, '->', t.id);
    }
  }
}

console.log('\n' + stats.join('\n'));
console.log('Total ids:', ids.size, '| Errors:', errors);
process.exitCode = errors ? 1 : 0;