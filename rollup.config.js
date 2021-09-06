import { main, name } from './package.json';
import typescript from '@rollup/plugin-typescript';

const toCamelCase = str =>
  str
    .split('/')
    .pop()
    .replace(/[-_]([a-z])/g, g => g[1].toUpperCase());

const presets = ['midsummer-night', 'morning-breeze'];
const plugins = [typescript()];

export default [
  ...presets.map(preset => ({
    input: `src/${preset}.ts`,
    output: {
      file: `dist/${preset}.js`,
      format: 'umd',
      name: toCamelCase(preset),
      sourcemap: true
    },
    plugins
  })),
  {
    input: 'src/index.ts',
    output: {
      file: main,
      format: 'umd',
      name: toCamelCase(name),
      sourcemap: true
    },
    plugins
  }
];
