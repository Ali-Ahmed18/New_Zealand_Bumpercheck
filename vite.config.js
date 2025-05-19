import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default {
  optimizeDeps: {
    include: ['react-router-dom']
  }
};
