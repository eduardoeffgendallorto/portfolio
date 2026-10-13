import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Troque pelo nome EXATO do seu repositório, com barras no início e no fim.
  // Exceção: se o repositório se chamar "seu-usuario.github.io", use base: '/'
  base: '/portfolio/',
})