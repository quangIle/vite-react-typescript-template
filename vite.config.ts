import react from '@vitejs/plugin-react-swc'
import path from 'path'
import { defineConfig } from 'vite'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr({ exportAsDefault: false })],
  server: { port: 3000 },
  css: { devSourcemap: true },
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './src'),
    },
  },
})
