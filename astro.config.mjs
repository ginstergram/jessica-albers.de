// @ts-check
import { defineConfig } from 'astro/config'

import svelte from '@astrojs/svelte';

// https://astro.build/config
export default defineConfig({
  vite: {
      ssr: {
          noExternal: ['webcoreui']
      }
  },

  // base: '/jessica-albers.de/',
  site: 'https://jessica-albers.de/',

  integrations: [svelte()],
})