/** @type {import('next').NextConfig} */
const isGithubPages = process.env.GITHUB_ACTIONS === 'true' || process.env.IS_GH_PAGES === 'true';

const nextConfig = {
  output: isGithubPages ? 'export' : undefined,
  basePath: isGithubPages ? '/portfolio' : '',
  assetPrefix: isGithubPages ? '/portfolio' : '',
  images: {
    unoptimized: true,
  },
  trailingSlash: false,
};

module.exports = nextConfig;