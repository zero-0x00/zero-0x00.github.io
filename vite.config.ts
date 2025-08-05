import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

// Определяем __dirname для ESM
const __dirname = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig({
  plugins: [
    react(),
    svgr({
      include: '@assets/**/*.svg',
    }),
  ],
  resolve: {
    alias: {
      '@ui': resolve(__dirname, './src/ui'),
      '@assets': resolve(__dirname, './src/assets'),
      '@hooks': resolve(__dirname, './src/hooks'),
      '@components': resolve(__dirname, './src/components'),
    },
  },
  build: {
    outDir: './dist',
    emptyOutDir: true,
  },
});
