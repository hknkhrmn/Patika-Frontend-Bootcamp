import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // Jest gibi global olarak test fonksiyonlarını kullanmak için
    environment: 'jsdom', // Testlerde jsdom ortamını kullanır
    transformMode: {
      web: [/\.jsx$/] // jsx dosyalarını dönüştürür
    }
  }
});
