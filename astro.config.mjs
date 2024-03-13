import { defineConfig } from 'astro/config';

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  site: 'https://profwilliamarte.github.io',/* aqui colocarias el nombre de tu cuenta*/
 
  output: 'server',
  adapter: node({
    mode: "standalone"
  }), 
  exclude: [
    "**/_*",
  ],
  base: '/supabase01',/* aqui colocarias el nombre de tu repositorio*/
  build: {
      assets: 'astro' /// muy importante
  }

  
});