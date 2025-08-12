import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  base: '/jot-market/',
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      base: '/jot-market/',
      devOptions: {
        enabled: true
      },
      manifest: {
        name: 'Jot Market',
        short_name: 'JotMarket',
        description: 'Jot Market App',
        theme_color: '#ffffff',
        start_url: '/jot-market/',
        scope: '/jot-market/',
        icons: [
          {
            src: '/jot-market/market.svg',
            sizes: 'any',
            type: 'image/svg+xml',
            purpose: 'any maskable'
          }
        ]
      },
      workbox: {
        globPatterns: [
          '**/*.{js,css,html,ico,png,svg}'
        ],
        
        navigateFallbackDenylist: [/\.json$/],
        
        runtimeCaching: [
          {
            urlPattern: /\/jot-market\/.*\.json$/,
            handler: 'StaleWhileRevalidate',
            options: {
              cacheName: 'json-data-cache',
              cacheableResponse: {
                statuses: [0, 200]
              }
            }
          }
        ]
      }
    })
  ],
})