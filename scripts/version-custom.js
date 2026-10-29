// `npm run "version CUSTOM"`: asks for the new version (e.g. 1.2.0-beta1) and then does what `version MAJOR/MINOR/PATCH` do,
// i.e. runs `npm version <version>`: bump package.json, run the "version" script (build + git add dist), commit and tag.
import { spawnSync } from 'node:child_process';
import { readFileSync } from 'node:fs';
import { createInterface } from 'node:readline/promises';

// semver: MAJOR.MINOR.PATCH, optional -prerelease and +build
const SEMVER = /^\d+\.\d+\.\d+(-[0-9A-Za-z-]+(\.[0-9A-Za-z-]+)*)?(\+[0-9A-Za-z-]+(\.[0-9A-Za-z-]+)*)?$/;

const current = JSON.parse(readFileSync(new URL('../package.json', import.meta.url), 'utf8')).version;

const rl = createInterface({ input: process.stdin, output: process.stdout });
const answer = (await rl.question(`New version (current ${current}, e.g. 1.2.0-beta1): `)).trim().replace(/^v/, '');
rl.close();

if (!SEMVER.test(answer)) {
  console.error(`"${answer}" is not a valid version (expected MAJOR.MINOR.PATCH with an optional -prerelease, e.g. 1.2.0 or 1.2.0-beta1).`);
  process.exit(1);
}

// shell: npm is npm.cmd on Windows
const result = spawnSync('npm', ['version', answer], { stdio: 'inherit', shell: true });
process.exit(result.status ?? 1);
