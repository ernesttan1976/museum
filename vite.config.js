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
    target: 'node',
    outDir: 'dist',
    minify: true,
    sourcemap: false,
    // enable tree shaking
    rollupOptions: {
      output: {
        manualChunks: undefined,
        chunkSizeLimit: 100000,
      },
      treeshake: true,
    },
  },
})


// build: {
//   target: 'node',
//   outDir: 'dist',
//   minify: true,
//   sourcemap: false,
//   rollupOptions: {
//     input: {
//       main: './src/index.js'
//     }
//   }
// }
// output: {
//   dir: 'dist',
//   format: 'es',
//   chunkSizeWarningLimit: 1024 // Set limit to 1KB
// }