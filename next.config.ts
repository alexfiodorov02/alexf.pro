import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',  // Enables static HTML export
  images: {
    unoptimized: true,  // For static export
  },
};

export default nextConfig;
