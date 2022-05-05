const stage = process.env.STAGE || 'local';

/** @type {import('next').NextConfig} */
const nextConfig = {
  target: 'serverless',
  reactStrictMode: true,
  assetPrefix: `/${stage}`,
  webpack: config => {
    // config.node = {
    //   fs: 'empty',
    // };

    return config;
  },
};

module.exports = nextConfig;
