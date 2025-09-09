import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: "export", // on exporte en site statique
  images: {
    unoptimized: true, // évite les soucis avec l'optimisation Next sur GitHub Pages
  },
  publicRuntimeConfig: {
    basePath: "/portfolio",
  }
  // basePath: "/portfolio",
  // assetPrefix: "/portfolio/",
};

export default nextConfig;