import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
    plugins: [vue()],
    server: {
        proxy: {
            '/api': {
                target: 'http://127.0.0.1:8000',
            },
            '/storage': {
                target: 'http://127.0.0.1:8000',
            },
            '/ws': {
                target: 'ws://127.0.0.1:8001',
                ws: true,                
            }
        }
    },
    resolve: {
        alias: {
          '@': path.resolve(__dirname, './src'),
        },
    },
});
