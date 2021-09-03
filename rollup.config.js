import { main } from './package.json';
import typescript from '@rollup/plugin-typescript';

export default [
  {
    input: 'src/midsummer-night.ts',
    output: {
      file: 'dist/midsummer-night.js',
      format: 'umd',
      name: 'theme',
      sourcemap: true
    },
    plugins: [typescript()]
  },
  {
    input: 'src/index.ts',
    output: {
      file: main,
      format: 'umd',
      name: 'themes',
      sourcemap: true
    },
    plugins: [typescript()]
  }
];
