/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
  },
  async headers() {
    return [
      {
        source: '/images/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      { source: '/garden-care', destination: '/services', permanent: true },
      { source: '/landscaping-care', destination: '/services/landscaping-design', permanent: true },
      { source: '/grass-cutting-services', destination: '/services/lawn-care', permanent: true },
      { source: '/winter-clearance', destination: '/services/snow-removal', permanent: true },
      { source: '/custom-patio-installation', destination: '/services/hardscaping', permanent: true },
      { source: '/exterior-landscaping', destination: '/gallery', permanent: true },
      { source: '/gardening-specialists', destination: '/about', permanent: true },
      { source: '/lawn-care-quote', destination: '/contact', permanent: true },
    ];
  },
};

module.exports = nextConfig;
