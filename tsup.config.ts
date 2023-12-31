import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.tsx'],
  splitting: false,
  sourcemap: true,
  clean: true,
  outDir: 'dist',
  format: 'esm',
  dts: true,
});
