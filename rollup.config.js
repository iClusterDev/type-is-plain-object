import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import path from 'path';
import config from './config';
import uglify from 'rollup-plugin-uglify';

export default [
  {
    // --> for common js
    input: config.input,
    plugins: [nodeResolve(), babel({ exclude: 'node_modules/**' })],
    output: {
      file: path.join('boundle', config.outCjs),
      format: 'cjs'
    }
  },
  {
    // --> for es6 modules
    input: config.input,
    external: config.dependencies,
    plugins: [nodeResolve(), commonjs(), babel({ exclude: 'node_modules/**' })],
    output: {
      file: path.join('boundle', config.outEsm),
      format: 'esm'
    }
  },
  {
    // --> for browser umd
    input: config.input,
    plugins: [nodeResolve(), commonjs(), babel({ exclude: 'node_modules/**' })],
    output: {
      name: config.name,
      file: path.join('boundle', 'dist', `${config.name}.js`),
      format: 'umd'
    }
  },
  {
    // --> for browser umd minified
    input: config.input,
    plugins: [
      nodeResolve(),
      commonjs(),
      babel({ exclude: 'node_modules/**' }),
      uglify.uglify()
    ],
    output: {
      name: config.name,
      file: path.join('boundle', 'dist', `${config.name}.min.js`),
      format: 'umd'
    }
  }
];
