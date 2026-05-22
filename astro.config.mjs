// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  output: 'static',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()]
  },
  site: 'https://autopartes-continental.vercel.app'
});