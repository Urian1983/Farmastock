import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// El proxy evita tocar el backend: no hace falta configurar CORS en Spring.
export default defineConfig({
  plugins: [react()],
  server: { proxy: { '/api': 'http://localhost:8080' } },
});
