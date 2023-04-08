///<reference types="vitest" />
///<reference types="vite/client" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": "http://127.0.0.1:3001",
    }
  },
  build: {
    minify: true,
    // enable tree shaking
    rollupOptions: {
      treeshake: true,
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    css: true,
    setupFiles: './src/test/setup.js',
    coverage: {
      reporter: ['default','text', 'json', 'html'],
    },
  }
})

