import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/360degree_consistent_scene_generation/',
  plugins: [react()]
});
