// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';

// Site 100% estático (sem adapter) para o Cloudflare Pages.
// SITE_URL e BASE_PATH só são definidos no deploy do GitHub Pages (subpasta do repositório);
// sem eles, o build usa o domínio oficial na raiz.
export default defineConfig({
  site: process.env.SITE_URL ?? 'https://www.aguiasatsistemas.com.br',
  base: process.env.BASE_PATH ?? '/',
  output: 'static',
  integrations: [icon()],
  vite: {
    plugins: [tailwindcss()],
  },
});
