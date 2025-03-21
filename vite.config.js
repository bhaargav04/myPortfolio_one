import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0",   // Bind to all interfaces
    port: 5173,        // Change if necessary
    strictPort: true,
    cors: true,
    allowedHosts: ["preview.allowedHosts"],  // Allow Render domain
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
