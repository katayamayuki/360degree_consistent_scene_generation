import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: './',       // GitHub Pages で公開する際のパス
  plugins: [react()]
});
