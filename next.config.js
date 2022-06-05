/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['upload.wikimedia.org'],
  },
  webpack: (config) => {
    config.experiments.topLevelAwait = true;
    return config;
  },
};

module.exports = nextConfig;
