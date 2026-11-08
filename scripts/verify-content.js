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
// Generated proof chapters and the topic/claim audit must be reproducible together.
const generatedProofFiles = ['js/data/proofs.js', 'docs/proofs/volume-1.md', 'docs/proofs/volume-1.tex', 'docs/proofs/topic-inventory.json', 'docs/proofs/claim-audit.json', 'docs/proofs/coverage.md'];
const proofSnapshots = generatedProofFiles.map(file => fs.readFileSync(path.join(root, file), 'utf8'));
for (const [command, args] of [['python3', ['-W', 'error', 'scripts/build-proofs.py']], [process.execPath, ['scripts/audit-proofs.js']]]) {
  const result = spawnSync(command, args, { cwd: root, encoding: 'utf8' });
  assert.equal(result.status, 0, result.stderr);
}
for (let i=0; i<generatedProofFiles.length; i++) {
  assert.equal(fs.readFileSync(path.join(root, generatedProofFiles[i]), 'utf8'), proofSnapshots[i], 'Stale generated chapter or audit: ' + generatedProofFiles[i]);
}

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

  fs.writeFileSync(target, before);
  const proofPath = path.join(temp, 'js/data/proofs.js');
  const proofSource = fs.readFileSync(proofPath, 'utf8');
  fs.writeFileSync(proofPath, proofSource + "\nwindow.ATLAS.proofBook.proofs[0].dependencies.push('unknown-lemma');\n");
  const missingLemma = run(temp);
  assert.equal(missingLemma.status, 1);
  assert.match(missingLemma.stdout, /MISSING PROOF DEPENDENCY/);
  fs.writeFileSync(proofPath, proofSource + "\nwindow.ATLAS.proofBook.proofs[0].dependencies.push(window.ATLAS.proofBook.proofs[0].id);\n");
  const circular = run(temp);
  assert.equal(circular.status, 1);
  assert.match(circular.stdout, /CIRCULAR PROOF DEPENDENCY/);

} finally {
  fs.rmSync(temp, { recursive: true, force: true });
}
console.log('PASS: 319-topic validation, standalone parity, deterministic generation, missing-card, broken-link, missing-lemma and circular-dependency regression checks');
