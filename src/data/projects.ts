// src/data/projects.ts
import { getAssetPath } from "@/utils/paths";

export const projects = [
    {
        title: "Billy.IA - Assistant IA",
        description: "Un assistant personnel propulsé par l'IA pour répondre à vos questions.",
        link: "https://github.com/Vexyuu/portfolio",
        more: "/projects/billy-ia",
        image: getAssetPath("/data/projects/BillyIA_1.webp"),
        demo: "#",
        isFinite: false,
        category: "IA",
        year: 2025,
    },
    {
        title: "Application Recettes",
        description: "Une app interactive type TikTok pour partager des recettes.",
        link: "https://github.com/Vexyuu/cookme",
        more: "/projects/cookme",
        image: getAssetPath("/data/projects/cookme.png"),
        demo: "#",
        isFinite: false,
        category: "Mobile",
        year: 2024,
    },
    {
        title: "Générateur de mots de passe",
        description: "Un petit outil pratique pour créer des mots de passe sécurisés.",
        link: "https://github.com/Vexyuu/password-generator",
        more: "/projects/password-generator",
        image: getAssetPath("/data/projects/password-generator.png"),
        demo: "#",
        isFinite: true,
        category: "Outils",
        year: 2023,
    },
    {
        title: "Nuit de l'info 2025 - Projet NDI",
        description: "Projet développé pour la Nuit de l'info 2025.",
        link: "https://404-not-found-krir-nuitdelinfo.great-site.net",
        more: "/projects/ndi-2025",
        image: getAssetPath("/data/projects/NDI_2025.png"),
        demo: "https://404-not-found-krir-nuitdelinfo.great-site.net",
        isFinite: false,
        category: "Web",
        year: 2025,
    },
];
