/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_STREAM_API_KEY: process.env.NEXT_PUBLIC_STREAM_API_KEY,
    STREAM_SECRET_KEY: process.env.STREAM_SECRET_KEY
  }
};

export default nextConfig;
