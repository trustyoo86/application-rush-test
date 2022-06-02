const ModuleFederationPlugin =
  require('webpack').container.ModuleFederationPlugin;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  webpack: config => {
    config.plugins.push(
      new ModuleFederationPlugin({
        name: 'host',
        filename: 'remoteEntry.js',
        remotes: {
          poc: 'poc@http://localhost:3003/remoteEntry.js',
        },
        exposes: {},
        shared: {},
      }),
    );

    return config;
  },
};

module.exports = nextConfig;
