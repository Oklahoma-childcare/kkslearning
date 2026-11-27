import { defineConfig } from 'vite';
export default defineConfig({ appType: 'mpa', build: { rollupOptions: { input: ['index.html','programs/index.html','about/index.html','faq/index.html','contact/index.html'] } } });
