/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['pt', 'en'], // Adicione outros idiomas conforme necessário
    defaultLocale: 'pt', // Defina 'pt' como o idioma padrão
  },
}

export default nextConfig
