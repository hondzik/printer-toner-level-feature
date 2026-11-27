import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['src/**/*.test.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'lcov', 'json-summary'],
      include: [
        'src/utils/config-utils.ts',
        'src/utils/last-known.ts',
        'src/utils/tap-action.ts',
        'src/utils/toner-sources.ts',
        'src/localize.ts',
      ],
      thresholds: {
        lines: 90,
        statements: 90,
        functions: 90,
        branches: 80,
      },
    },
  },
});
