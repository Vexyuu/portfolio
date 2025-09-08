// src/app/projects/password-generator/page.tsx

import ProjectCard from "@/components/ProjectCard";

export const metadata = {
    title: "Générateur de mots de passe",
    description: "Outil simple pour créer des mots de passe sécurisés",
};

export default function PasswordGenerator() {
    return (
        <ProjectCard
            title="Générateur de mots de passe"
            description="Un petit outil pratique pour générer des mots de passe robustes."
            longDescription="Ce projet m’a permis de travailler sur la sécurité et la génération pseudo-aléatoire en JavaScript. L’outil propose plusieurs options : longueur personnalisée, inclusion de symboles, chiffres, majuscules, etc. J’ai également intégré une copie rapide du mot de passe généré."
            objective="L’objectif principal de ce projet était de créer un outil simple et efficace pour générer des mots de passe sécurisés, tout en explorant les fonctionnalités de JavaScript liées à la manipulation de chaînes et à la génération aléatoire."
            image="/data/projects/password-generator.png"
            stack={["HTML", "CSS", "JavaScript"]}
            github="https://github.com/Vexyuu/password-generator"
            demo="https://vexyuu.github.io/password-generator/"
        />
    );
}
