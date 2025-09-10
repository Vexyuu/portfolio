// src/app/projects/password-generator/page.tsx
import { getAssetPath } from "@/utils/paths";
import ProjectCard from "@/components/ProjectCard";

export const metadata = {
    title: "Générateur de mots de passe sécurisé",
    description: "Un outil pratique pour créer des mots de passe robustes. Développé avec HTML, CSS et JavaScript.",
    keywords: ["générateur mot de passe", "outil sécurité web", "JavaScript", "Killian Fievet", "portfolio projet"],
    openGraph: {
        title: "Projet Générateur de mots de passe - Killian Fievet",
        description: "Outil de génération de mots de passe robustes avec options d’inclusion de symboles, chiffres et majuscules.",
        url: "https://vexyuu.github.io/portfolio/projects/password-generator",
        type: "article",
        images: [
            {
                url: "https://vexyuu.github.io/portfolio/data/projects/password-generator.png",
                width: 1200,
                height: 630,
                alt: "Générateur de mots de passe",
            },
        ],
    },
};

export default function PasswordGenerator() {
    return (
        <ProjectCard
            title="Générateur de mots de passe"
            description="Un petit outil pratique pour générer des mots de passe robustes."
            longDescription="Ce projet m’a permis de travailler sur la sécurité et la génération pseudo-aléatoire en JavaScript. L’outil propose plusieurs options : longueur personnalisée, inclusion de symboles, chiffres, majuscules, etc. J’ai également intégré une copie rapide du mot de passe généré."
            objective="L’objectif principal de ce projet était de créer un outil simple et efficace pour générer des mots de passe sécurisés, tout en explorant les fonctionnalités de JavaScript liées à la manipulation de chaînes et à la génération aléatoire."
            image={getAssetPath("/data/projects/password-generator.png")}
            stack={["HTML", "CSS", "JavaScript"]}
            github="https://github.com/Vexyuu/password-generator"
            demo="https://vexyuu.github.io/password-generator/"
        />
    );
}
