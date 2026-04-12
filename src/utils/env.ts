// src/utils/env.ts

export const isGithubPages = process.env.GITHUB_ACTIONS === 'true' || process.env.IS_GH_PAGES === 'true';
export const isDev = process.env.NODE_ENV === 'development';

export const BASE_URL = isGithubPages 
    ? 'https://vexyuu.github.io/portfolio' 
    : isDev 
        ? 'http://localhost:3000' 
        : 'https://killianfievet.com';

export const BASE_PATH = isGithubPages ? '/portfolio' : '';
