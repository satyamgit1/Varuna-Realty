const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const withPWA = require('next-pwa')({
  dest: 'public', // Destination where PWA files will be generated
  disable: process.env.NODE_ENV === 'development', // Disable PWA in development mode
});

module.exports = withBundleAnalyzer(
  withPWA({
    reactStrictMode: true,
    swcMinify: false, // Disable SWC minification to avoid platform-specific issues
  })
);
