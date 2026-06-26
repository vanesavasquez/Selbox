import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base: './' -> rutas relativas para que funcione en la raíz o en una
// subcarpeta de Hostinger sin reconfigurar nada.
export default defineConfig({
  base: './',
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsInlineLimit: 0,
  },
})
