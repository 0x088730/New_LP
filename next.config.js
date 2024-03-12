/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  exportPathMap: async function () {
    return {
      '/': { page: '/' },
      '/presale': { page: '/presale' },
      '/referral-info': { page: '/referral-info' },
      '/presale': { page: '/presale' },
      // '/presale-admin': {page: '/presale-admin'}
    };
  },
  images: {
    unoptimized: true
  }
}

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  ...nextConfig,
  assetPrefix: isProd ? 'https://cdn.mydomain.com' : "",
}
