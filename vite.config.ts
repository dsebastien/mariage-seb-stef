import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/mariage-seb-stef/',
  root: 'src',
  plugins: [react(), tailwindcss()],
  build: {
    outDir: '../docs',
    assetsDir: 'assets',
    sourcemap: false,
    emptyOutDir: true,
  },
  publicDir: '../public',
})
