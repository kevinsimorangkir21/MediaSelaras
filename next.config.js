/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['i.scdn.co', 'api.medselaras.com'],
    formats: ["image/webp"]
  }
}

module.exports = nextConfig
