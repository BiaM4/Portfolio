import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/Portfolio/",
  // porta onde vai rodar 
  server: {
    port:3000
  },
})
