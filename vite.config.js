import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0",  // Binds to all network interfaces
    port: 5173,       // Default Vite port (change if needed)
    strictPort: true, // Ensures Vite doesn't switch ports
    cors: true        // Allows external access
  },
  preview: {
    host: "0.0.0.0",  // Required for Render deployment
    port: 10000,
    strictPort: true
  }
});
