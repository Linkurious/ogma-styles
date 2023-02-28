import { main, name, license, description } from './package.json';
import typescript from '@rollup/plugin-typescript';

const toCamelCase = str =>
  str
    .split('/')
    .pop()
    .replace(/[-_]([a-z])/g, g => g[1].toUpperCase());

const presets = ['midsummer-night', 'morning-breeze', 'afternoon-nap'];
const plugins = [typescript()];

const banner = `
/**
 * ${name}
 * @description ${description}
 * @license ${license}
 */
`;

export default [
  ...presets.map(preset => ({
    input: `src/${preset}.ts`,
    output: {
      file: `dist/${preset}.js`,
      format: 'umd',
      banner,
      name: toCamelCase(preset),
      sourcemap: true
    },
    plugins
  })),
  {
    input: 'src/index.ts',
    output: {
      file: main,
      banner,
      format: 'umd',
      name: toCamelCase(name),
      sourcemap: true
    },
    plugins
  }
];
