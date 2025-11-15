import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        mission: resolve(__dirname, 'mission.html'),
        projects: resolve(__dirname, 'projects.html'),
        support: resolve(__dirname, 'support.html'),
      },
    },
  },
});
