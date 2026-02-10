import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react({
      include: '**/*.{jsx,tsx}' 
    })
  ],
  css: {
    devSourcemap: true
  },
  build: {
    sourcemap: true,
    rollupOptions: {
      input: {
        main: 'index.html'
      }
    }
  }
})