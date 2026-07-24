import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';
import json from '@rollup/plugin-json';
import summary from 'rollup-plugin-summary';

export default {
  input: 'src/printer-toner-level-feature.ts',
  output: {
    file: 'dist/printer-toner-level-feature.js',
    format: 'es',
    sourcemap: false,
  },
  plugins: [
    resolve({
      browser: true,
      preferBuiltins: false,
      exportConditions: ['default', 'module', 'import'],
    }),
    commonjs(),
    json(),
    typescript({
      tsconfig: './tsconfig.json',
      declaration: false,
      sourceMap: false,
      compilerOptions: {
        skipLibCheck: true,
      },
    }),
    terser({
      ecma: 2021,
      module: true,
      warnings: true,
      format: {
        comments: false,
      },
    }),
    summary({
      showBrotliSize: true,
      showGzippedSize: true,
    }),
  ],
  // Externalize dependencies that should not be bundled
  external: [],
  onwarn(warning, warn) {
    // Suppress circular dependency warnings from lit
    if (warning.code === 'CIRCULAR_DEPENDENCY' && warning.message.includes('node_modules/lit')) {
      return;
    }
    warn(warning);
  },
};
