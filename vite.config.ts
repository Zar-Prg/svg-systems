import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // IMPORTANT: Replace 'repo-name' with your GitHub repository name
  // If your repo is 'my-portfolio', this should be '/my-portfolio/'
  // If you are using a custom domain (e.g. www.andreizaharia.dev), remove this line or set it to '/'
  base: '/repo-name/', 
})