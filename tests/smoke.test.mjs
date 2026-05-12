import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { describe, it } from 'node:test';
import assert from 'node:assert/strict';

const root = process.cwd();

function readJson(path) {
  return JSON.parse(readFileSync(join(root, path), 'utf8'));
}

describe('project smoke checks', () => {
  it('has the minimum files needed by Astro', () => {
    assert.equal(existsSync(join(root, 'package.json')), true);
    assert.equal(existsSync(join(root, 'astro.config.mjs')), true);
    assert.equal(existsSync(join(root, 'src/pages/index.astro')), true);
  });

  it('keeps the expected npm scripts available', () => {
    const pkg = readJson('package.json');

    assert.equal(pkg.scripts?.dev, 'astro dev');
    assert.equal(pkg.scripts?.build, 'astro build');
    assert.equal(pkg.scripts?.preview, 'astro preview');
    assert.ok(pkg.scripts?.test?.includes('node --test'));
  });

  it('includes a GitHub Pages workflow', () => {
    const workflowPath = join(root, '.github/workflows/pages.yml');
    assert.equal(existsSync(workflowPath), true);

    const workflow = readFileSync(workflowPath, 'utf8');
    assert.match(workflow, /actions\/deploy-pages@v4/);
    assert.match(workflow, /npm run build/);
    assert.match(workflow, /npm test/);
  });
});
