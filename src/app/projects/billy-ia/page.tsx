// src/app/projects/billy-ia/page.tsx
import { getAssetPath } from "@/utils/paths";
import ProjectCard from "@/components/ProjectCard";

export const metadata = {
    title: "Billy.IA - Assistant IA local",
    description: "Billy.IA, un assistant personnel basé sur TensorFlow et Python, conçu pour fonctionner en local sans dépendance externe.",
    keywords: ["IA locale", "assistant IA", "TensorFlow", "Python", "Killian Fievet", "portfolio projet"],
    openGraph: {
        title: "Projet Billy.IA - Assistant IA local",
        description: "Assistant personnel propulsé par l’IA, développé avec Python, TensorFlow et Pandas.",
        url: "https://vexyuu.github.io/portfolio/projects/billy-ia",
        type: "article",
        images: [
            {
                url: "https://vexyuu.github.io/portfolio/data/projects/BillyIA_1.webp",
                width: 1200,
                height: 630,
                alt: "Billy.IA - Assistant IA",
            },
        ],
    },
};

export default function BillyIA() {
    return (
        <ProjectCard
            title="Billy.IA - Assistant IA"
            description="Un assistant personnel propulsé par l’IA."
            longDescription="Billy.IA est un assistant personnel conçu pour répondre à des questions en utilisant une base de données locale, entraînée avec TensorFlow. Le but de ce projet était de créer une IA fonctionnant totalement en local, sans dépendance à une API externe comme GPT. L’assistant répond aux requêtes en s’appuyant sur une base de données simple (actuellement un fichier CSV), mais il pourrait facilement évoluer pour utiliser une base de données plus complexe à l’avenir."
            objective="Ce projet avait pour but de comprendre les bases de l’apprentissage automatique, en développant une IA simple qui utilise une base de données locale. Actuellement, la base de données est sous forme de fichier CSV, mais cela pourrait être étendu pour utiliser une solution plus robuste à l’avenir."
            image={getAssetPath("/data/projects/BillyIA_1.webp")}
            stack={["Python", "TensorFlow", "Pandas", "Tkinter"]}
            github="https://github.com/Vexyuu/portfolio"
            demo="#"
        />
    );
}
