// @ts-check
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
    vite: {
        ssr: {
            noExternal: ['webcoreui']
        }
    },
    site: 'https://jessica-albers.de/',
    // base: '/jessica-albers.de/',
})

