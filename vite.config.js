import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',  // Allows access from any device in the local network
    port: 5173,       // Your specified port
    strictPort: true, // Ensures the server fails if the port is already in use
  }
})
