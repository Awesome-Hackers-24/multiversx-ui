/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.externals.push(
      'pino-pretty',
      'lokijs',
      'utf-8-validate',
      'bufferutil'
    );
    return config;
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    dirs: ['components', 'hooks', 'lib', 'app'],
  },
};

module.exports = nextConfig;
