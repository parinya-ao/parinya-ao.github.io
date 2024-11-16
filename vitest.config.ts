import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)), // Alias สำหรับ @ ชี้ไปที่ /src
    },
  },
  server: {
    port: 5173, // หรือพอร์ตที่ต้องการ
  },
  build: {
    outDir: 'dist', // กำหนด output directory
  },
})
