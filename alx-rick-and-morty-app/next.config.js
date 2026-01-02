/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    turbo: false
  },
  // Sentry configuration
  sentry: {
    hideSourceMaps: true,
  },
}

module.exports = nextConfig