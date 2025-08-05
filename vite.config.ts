import react from '@vitejs/plugin-react';

import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

import { copyFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

// Определяем __dirname для ESM
const __dirname = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig({
  plugins: [
    react(),
    svgr({
      include: '**/*.svg',
    }),
    {
      name: 'copy-pdf-plugin',
      writeBundle() {
        const srcPath = resolve(__dirname, 'src/assets/coderun.pdf');
        const destPath = resolve(__dirname, 'dist/assets/coderun.pdf');
        copyFileSync(srcPath, destPath);
      },
    },
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
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
      output: {
        assetFileNames: (assetInfo: any) => {
          if (/\.(pdf)$/i.test(assetInfo.name)) {
            return `assets/[name][extname]`;
          }
          return `assets/[name]-[hash][extname]`;
        },
      },
    },
  },
  publicDir: 'public',
});
