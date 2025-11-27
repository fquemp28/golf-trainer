import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  // REMPLACEZ 'golf-training-app' PAR LE NOM EXACT DE VOTRE REPO GITHUB
  // Exemple: si votre repo est https://github.com/Fred/mon-golf, mettez base: '/mon-golf/'
  base: '/golf-trainer/', 
  
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      // J'ai retiré les fichiers audio locaux de la pré-cache car vous utilisez maintenant des liens CDN
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],
      manifest: {
        name: 'Golf Training Companion',
        short_name: 'Golf Coach',
        description: 'Votre compagnon d\'entraînement de golf intelligent',
        theme_color: '#059669',
        background_color: '#ffffff',
        display: 'standalone',
        orientation: 'portrait',
        start_url: '.', // Important pour supporter le chemin relatif du sous-dossier
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ],
})