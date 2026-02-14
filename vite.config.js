import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// GitHub Pages serves from https://mattjliu.github.io/Notation-Trainer/
export default defineConfig({
  base: '/Notation-Trainer/',
  plugins: [
    react(),
  ],
  build: {
    outDir: 'build',
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.js',
  },
});
