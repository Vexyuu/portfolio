import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: "export", // on exporte en site statique
  images: {
    unoptimized: true, // évite les soucis avec l'optimisation Next sur GitHub Pages
  },
  basePath: process.env.NODE_ENV === "production" ? "/portfolio" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/portfolio/" : "",
};

export default nextConfig;