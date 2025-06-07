import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite'; // ! Esto importa el tailwind al vite

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(),
        tailwindcss(), // Agregamos el plugin de tailwind
    ],
});
