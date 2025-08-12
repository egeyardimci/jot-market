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
        theme_color: '#1EA4CE',
        background_color: '#1EA4CE', 
        start_url: '/jot-market/',
        scope: '/jot-market/',
        display: 'standalone',
        icons: [
          {
            src: '/jot-market/market.svg',
            sizes: 'any',
            type: 'image/svg+xml',
            purpose: 'any maskable'
          },
          {
            "src": "/web-app-manifest-192x192.png",
            "sizes": "192x192",
            "type": "image/png",
            "purpose": "maskable"
          },
          {
            "src": "/web-app-manifest-512x512.png",
            "sizes": "512x512",
            "type": "image/png",
            "purpose": "maskable"
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