const Dotenv = require('dotenv-webpack');
const STAGE = process.env.STAGE || 'local';

/** @type {import('next').NextConfig} */
module.exports = {
  target: 'serverless',
  useFileSystemPublicRoutes: false,
  reactStrictMode: true,
  images: {
    loader: 'akamai',
    path: '',
  },
  distDir: 'build',
  webpack: (config, { isServer, dev }) => {
    // if (!isServer) {
    //   config.resolve.fallback = {
    //     fs: false,
    //   };
    // }

    console.log('dev ======>', dev);

    config.devtool = 'cheap-module-source-map';

    config.plugins.push(
      new Dotenv({
        path: `./envs/env.${STAGE}`,
      }),
    );

    return config;
  },
  // assetPrefix:
  //   'http://nextjs-deploy-practice.s3-website.ap-northeast-2.amazonaws.com',
  // generateBuildId: async () => {
  //   return 'test-1';
  // },
};
