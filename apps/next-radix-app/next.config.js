/** @type {import('next').NextConfig} */
module.exports = {
  target: 'serverless',
  useFileSystemPublicRoutes: false,
  reactStrictMode: true,
  images: {
    loader: 'akamai',
    path: '',
  },
  assetPrefix: '/prod',
  distDir: 'build',
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
      };
    }

    return config;
  },
  // assetPrefix:
  //   'http://nextjs-deploy-practice.s3-website.ap-northeast-2.amazonaws.com',
  // generateBuildId: async () => {
  //   return 'test-1';
  // },
};
