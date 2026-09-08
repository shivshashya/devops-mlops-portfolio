import { copyFile, stat } from 'node:fs/promises';

const astroWorker = new URL('../dist/server/entry.mjs', import.meta.url);
const sitesEntrypoint = new URL('../dist/server/index.js', import.meta.url);

await stat(astroWorker);
await copyFile(astroWorker, sitesEntrypoint);
