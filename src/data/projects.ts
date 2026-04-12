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
        title: "Générateur de mots de passe",
        description: "Un petit outil pratique pour créer des mots de passe sécurisés.",
        link: "https://passgen.killianfievet.com",
        more: "/projects/password-generator",
        image: getAssetPath("/data/projects/password-generator-modern.png"),
        demo: "https://passgen.killianfievet.com",
        isFinite: true,
        category: "Outils",
        year: 2023,
    },
    {
        title: "Shakello - Recettes de Cocktails",
        description: "Site web de recettes de cocktails artisanaux avec plus de 55 créations.",
        link: "https://www.shakello.com",
        more: "/projects/shakello",
        image: getAssetPath("/data/projects/shakello.png"),
        demo: "https://www.shakello.com",
        isFinite: true,
        category: "Web",
        year: 2026,
    },
    {
        title: "Coming soon...",
        description: "Coming soon...",
        link: "#",
        more: "#",
        image: getAssetPath("/data/projects/coming-soon.png"),
        demo: "#",
        isFinite: false,
        category: "Web",
        year: 2026,
    },
];
