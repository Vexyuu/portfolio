// src/utils/paths.ts
import { BASE_PATH } from "./env";

export const getAssetPath = (path: string) => {
    return `${BASE_PATH}${path}`;
};