import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  base: '/4urney/roadmap/', // Replace <repository> with your GitHub repo name
});
