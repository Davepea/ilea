import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    typescript:{
    ignoreBuildErrors: true,
  },
  eslint:{
    ignoreDuringBuilds: true,
  },
  /* config options here */
  images: {
    domains: [
      'lh3.googleusercontent.com', // Google profile images
      'i.pinimg.com',              // Pinterest
      'images.pexels.com',         // Pexels
      'img.freepik.com',           // Freepik
      'cdn.sanity.io',
      'images.unsplash.com'
    ],
  },
};

export default nextConfig;
