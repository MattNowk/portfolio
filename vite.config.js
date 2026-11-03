import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub Pages sert le site sous https://mattnowk.github.io/portfolio/
  base: '/portfolio/',
})
