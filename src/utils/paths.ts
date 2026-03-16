// src/utils/paths.ts

export const getAssetPath = (path: string) => {
    // Prefix for static assets (images, etc)
    const prefix = process.env.NODE_ENV === 'production' ? '/portfolio' : '';
    return `${prefix}${path}`;
};