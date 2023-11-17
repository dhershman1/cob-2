import path from 'path'
import vue from '@vitejs/plugin-vue'
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  envDir: './config',
  plugins: [
    vue(),
    VueI18nPlugin({
      include: [path.resolve(__dirname, './src/locales/**')]
    })],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        secure: false,
        changeOrigin: true
      }
    }
  }
})
