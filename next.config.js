const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
const withPWA = require('next-pwa')({
  dest: 'public', // destination of service worker and other PWA-related files
});

module.exports = withBundleAnalyzer(
  withPWA({
    // Place any other Next.js configuration options here
    reactStrictMode: true, // Example configuration
  })
);
