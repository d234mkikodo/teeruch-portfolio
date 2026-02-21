import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  base: '/teeruch-portfolio/',
  build: {
    outDir: 'dist',
    sourcemap: false
  }
})
