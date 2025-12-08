import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  base: '/Hospital-Project/', 
  plugins: [react()],
  publicDir: 'public',
  build: { outDir: 'dist' }
});
