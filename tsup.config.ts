import { type Options, defineConfig } from 'tsup';

const defaultOptions: Options = {
  format: ['esm'],
  dts: true,
  clean: true,
  sourcemap: true,
  splitting: false,
  minify: false,
  outDir: 'dist',
};

export default defineConfig([
  {
    ...defaultOptions,
    entry: ['src/index.ts'],
  },
  {
    ...defaultOptions,
    entry: ['src/queryUtils/withCursor.ts'],
  },
  {
    ...defaultOptions,
    entry: ['src/queryUtils/createId.ts'],
  },
  {
    ...defaultOptions,
    entry: ['src/queryUtils/dropQuery.ts'],
  },
]);
