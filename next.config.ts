import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [
      'lh3.googleusercontent.com', // Google profile images
      'i.pinimg.com',              // Pinterest
      'images.pexels.com',         // Pexels
      'img.freepik.com',           // Freepik
      'cdn.sanity.io',
    ],
  },
};

export default nextConfig;
