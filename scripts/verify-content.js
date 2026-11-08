// Integration checks: actual script order, generated assets, and fail-closed validation.
const fs = require('fs');
const path = require('path');
const os = require('os');
const vm = require('vm');
const { spawnSync } = require('child_process');
const assert = require('assert/strict');
const root = path.resolve(__dirname, '..');
const run = cwd => spawnSync(process.execPath, ['check.js'], { cwd, encoding: 'utf8' });
const baseline = run(root);
assert.equal(baseline.status, 0, baseline.stdout + baseline.stderr);
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const bundled = fs.readFileSync(path.join(root, 'math-atlas.html'), 'utf8');
for (const m of html.matchAll(/<script src="(js\/[^"]+)"/g)) {
  const source = fs.readFileSync(path.join(root, m[1]), 'utf8');
  const safe = source.replaceAll('</script', '<\\/script').replaceAll('</style', '<\\/style');
  assert.ok(bundled.includes(safe), 'Stale standalone script: ' + m[1]);
  new vm.Script(source, { filename: m[1] });
}
const generated = path.join(root, 'js/data/learning.js');
const before = fs.readFileSync(generated, 'utf8');
const build = spawnSync('python3', ['scripts/deepen-content.py'], { cwd: root, encoding: 'utf8' });
assert.equal(build.status, 0, build.stderr);
assert.equal(fs.readFileSync(generated, 'utf8'), before, 'Generator is not deterministic');
const temp = fs.mkdtempSync(path.join(os.tmpdir(), 'math-atlas-check-'));
try {
  fs.cpSync(path.join(root, 'js/data'), path.join(temp, 'js/data'), { recursive: true });
  for (const file of ['check.js', 'index.html', 'build_single.py']) fs.copyFileSync(path.join(root, file), path.join(temp, file));
  const target = path.join(temp, 'js/data/learning.js');
  fs.appendFileSync(target, "\ndelete window.ATLAS.learning['analysis/limits'];\n");
  const missing = run(temp);
  assert.equal(missing.status, 1);
  assert.match(missing.stdout, /MISSING LEARNING CARD analysis\/limits/);
  fs.writeFileSync(target, before + "\nwindow.ATLAS.subjects.analysis.branches[0].topics[0].related.push('missing-topic');\n");
  const broken = run(temp);
  assert.equal(broken.status, 1);
  assert.match(broken.stdout, /BAD RELATED/);
} finally {
  fs.rmSync(temp, { recursive: true, force: true });
}
console.log('PASS: 319-topic validation, standalone parity, deterministic generation, missing-card and broken-link regression checks');
