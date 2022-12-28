/** @type {import('next').NextConfig} */

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: [
    'page.js',
    'page.ts',
    'page.tsx',
  ]
}

module.exports = withBundleAnalyzer(
  nextConfig
);
