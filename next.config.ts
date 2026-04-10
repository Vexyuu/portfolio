/** @type {import('next').NextConfig} */
const isGithubPages = process.env.GITHUB_ACTIONS === 'true' || process.env.IS_GH_PAGES === 'true';

const nextConfig = {
  output: 'export',
  // On adapte le chemin selon l'environnement de build
  basePath: isGithubPages ? '/portfolio' : '',
  assetPrefix: isGithubPages ? '/portfolio' : '',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

module.exports = nextConfig;