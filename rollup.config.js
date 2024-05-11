import typescript from 'rollup-plugin-typescript2';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/cjs/index.js',
      format: 'cjs',
      exports: 'auto',
      sourcemap: true, 
    },
    {
      file: 'dist/mjs/index.js',
      format: 'esm',
      sourcemap: true,
    }
  ],
  plugins: [
    typescript({
      declaration: true,
      declarationDir: 'dist/types',
    }),
    nodeResolve(),
    commonjs()
  ]
};
