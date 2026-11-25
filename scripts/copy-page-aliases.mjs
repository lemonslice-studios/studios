import { copyFile } from 'node:fs/promises';

await copyFile(
  new URL('../dist/ambiance/tos/index.html', import.meta.url),
  new URL('../dist/ambiance/tos.html', import.meta.url),
);
