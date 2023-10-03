/// <reference types="vitest" />
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import eslint from 'vite-plugin-eslint';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const withPolling = env.USE_POLLING === 'true';

  return {
    base: '/',
    plugins: [react(), eslint(), viteTsconfigPaths()],
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: './setup-tests.js',
      coverage: {
        reporter: ['lcov', 'text', 'html'],
      },
    },
    build: {
      outDir: 'build',
      assetsDir: 'static',
      sourcemap: mode === 'development',
    },
    server: {
      host: true, // same as 0.0.0.0
      strictPort: true,
      port: 3000,
      hmr: {
        port: 3001,
      },
      ...(withPolling
        ? {
            watch: {
              usePolling: true,
              interval: 1000,
            },
          }
        : {}),
    },
    define:
      mode !== 'test'
        ? {
            // https://github.com/vitejs/vite/issues/2723
            'process.platform': null, // needed for deployed envs
            'process.version': null,
            'process.env': {}, // needed for local dev
          }
        : {},
  };
});
