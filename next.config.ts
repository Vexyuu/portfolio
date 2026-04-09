/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // On est maintenant sur killianfievet.com (racine), pas besoin de préfixe
  basePath: '',
  assetPrefix: '',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

module.exports = nextConfig;