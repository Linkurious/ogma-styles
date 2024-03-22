import { main, browser, name, license, description } from './package.json';
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
  ...presets.map(preset => {
    const input = `src/${preset}.ts`;
    const name = toCamelCase(preset);
    const sourcemap = true;
    return [
      {
        input,
        output: {
          file: `dist/${preset}.mjs`,
          format: 'esm',
          banner,
          name,
          sourcemap
        },
        plugins
      },
      {
        input,
        output: {
          file: `dist/${preset}.js`,
          format: 'umd',
          banner,
          name,
          sourcemap
        },
        plugins
      }
    ];
  }).flat(),
  {
    input: 'src/index.ts',
    output: {
      file: browser,
      banner,
      format: 'umd',
      name: toCamelCase(name),
      sourcemap: true
    },
    plugins
  },
  {
    input: 'src/index.ts',
    output: {
      file: main,
      banner,
      format: 'esm',
      name: toCamelCase(name),
      sourcemap: true
    },
    plugins
  }
];
