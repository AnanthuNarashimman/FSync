import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', 
    port: 5173,
    allowedHosts: ['605e-2401-4900-7b83-2f71-d27-b3e8-cf29-c960.ngrok-free.app'], // Add Ngrok host here
  },
})
