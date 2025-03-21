import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Allows access from external hosts
    port: 5173,
    strictPort: true,
    cors: true
  },
  preview: {
    host: "0.0.0.0",
    port: 10000,
    strictPort: true,
    headers: {
      "Access-Control-Allow-Origin": "*"
    }
  }
});
