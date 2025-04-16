/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
      },
    ],
    unoptimized: false, // Change this to false for proper optimization
  },
  // Add output configuration for better static file handling
  output: 'standalone',
};

module.exports = nextConfig; 
