import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // GitHub Pages serves this site under /web-tour/, so all built
  // assets are prefixed with that base. Local dev: open
  // http://localhost:5173/web-tour/
  base: '/web-tour/',
  plugins: [react()],
})
