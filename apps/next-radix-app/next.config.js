/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    loader: 'akamai',
    path: '',
  },
  assetPrefix:
    'http://nextjs-deploy-practice.s3-website.ap-northeast-2.amazonaws.com',
  // generateBuildId: async () => {
  //   return 'test-1';
  // },
};
