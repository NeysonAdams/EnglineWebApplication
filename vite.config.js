import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build',  // Папка для сборки
    rollupOptions: {
      output: {
        assetFileNames: 'static/assets/[name].[hash][extname]',  // Переносит файлы в static/assets
        chunkFileNames: 'static/assets/[name].[hash].js',  // Переносит JS файлы в static/assets
        entryFileNames: 'static/assets/[name].[hash].js',  // Переносит основной файл JS в static/assets
      },
    },
  },
});