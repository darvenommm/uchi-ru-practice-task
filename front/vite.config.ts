import path from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { TanStackRouterVite } from '@tanstack/router-plugin/vite';
import wyw from '@wyw-in-js/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    TanStackRouterVite({
      routesDirectory: 'src/pages',
    }),
    wyw({
      include: ['**/*.{ts,tsx}'],
      babelOptions: {
        presets: ['@wyw-in-js/babel-preset'],
      },
    }),
    react(),
  ],
  resolve: {
    alias: {
      '@': path.resolve('./src'),
    },
  },
  define: {
    SERVER_DOMAIN: JSON.stringify(process.env.SERVER_DOMAIN),
    SERVER_PORT: JSON.stringify(process.env.SERVER_PORT),
  },
});
