import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
    plugins: [vue(), tailwindcss()],
    css: {
        postcss: './postcss.config.js', // 指向 postcss.config.js 文件
    },
})
