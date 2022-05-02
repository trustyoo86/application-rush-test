/** @type {import('next').NextConfig} */
const nextConfig = {
  target: 'serverless',
  reactStrictMode: true,
  webpack: config => {
    // config.node = {
    //   fs: 'empty',
    // };

    return config;
  },
};

module.exports = nextConfig;
