/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  swcMinify: true,
  images: {
    dangerouslyAllowSVG: true,
    domains: ['tailwindui.com', 'images.unsplash.com', 'thrangra.sirv.com'],
  },
};

module.exports = nextConfig;
