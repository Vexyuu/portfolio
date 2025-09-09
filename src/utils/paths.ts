// src/utils/paths.ts

export const getAssetPath = (path: string) => {
    // En dev: basePath vide, en prod: "/portfolio"
    const basePath =
        process.env.NODE_ENV === "production"
            ? process.env.NEXT_PUBLIC_BASE_PATH || "/portfolio"
            : "";

    return `${basePath}${path}`;
};