const { join } = require('path');
const Dotenv = require('dotenv-webpack');
const STAGE = process.env.STAGE || 'local';

/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'build',
  target: 'serverless',
  useFileSystemPublicRoutes: false,
  reactStrictMode: true,
  webpack: config => {
    config.plugins.push(
      new Dotenv({
        path: join(__dirname, 'envs', `.env.${STAGE}`),
      }),
    );

    return config;
  },
};

module.exports = nextConfig;
