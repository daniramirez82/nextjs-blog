// next.config.js
// @type {import('next').NextConfig}
 
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["static01.nyt.com"],
  },
  experimental: { images: { allowFutureImage: true } },
}

module.exports = nextConfig


