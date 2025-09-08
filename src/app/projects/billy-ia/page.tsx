// src/app/projects/billy-ia/page.tsx

import ProjectCard from "@/components/ProjectCard";

export const metadata = {
    title: "Billy.IA - Assistant IA",
    description: "Détails du projet Billy.IA - Assistant IA par Killian Fievet",
};

export default function BillyIA() {
    return (
        <ProjectCard
            title="Billy.IA - Assistant IA"
            description="Un assistant personnel propulsé par l’IA."
            longDescription="Billy.IA est un assistant personnel que j’ai conçu pour répondre à des questions via une base de données locale entraînée avec TensorFlow. Le but était de créer une IA simple sans API GPT, capable de fonctionner en local."
            objective="L’objectif de ce projet était de comprendre les bases de l’apprentissage automatique et de l’intégrer dans une application web moderne. J’ai utilisé Python et TensorFlow pour entraîner le modèle, puis Next.js et TypeScript pour développer l’interface utilisateur."
            image="/data/projects/BillyIA_1.webp"
            stack={["Python", "TensorFlow", "Next.js", "TypeScript", "Tailwind CSS"]}
            github="https://github.com/Vexyuu/portfolio"
            demo="#"
        />
    );
}
