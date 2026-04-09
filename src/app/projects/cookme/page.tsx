// src/app/projects/cookme/page.tsx
import { getAssetPath } from "@/utils/paths";
import ProjectCard from "@/components/ProjectCard";

export const metadata = {
    title: "CookMe - Application de Recettes Interactive",
    description: "Une application type TikTok pour découvrir et partager des recettes de cuisine de manière ludique.",
    keywords: ["Recettes", "TikTok-like", "Mobile App", "React Native", "Killian Fievet", "portfolio projet"],
    openGraph: {
        title: "CookMe - Application de Recettes Interactive",
        description: "Application type TikTok pour découvrir et partager des recettes.",
        url: "https://killianfievet.com/projects/cookme",
        type: "article",
        images: [
            {
                url: "https://killianfievet.com/data/projects/cookme.png",
                width: 1200,
                height: 630,
                alt: "CookMe - Application Recettes",
            },
        ],
    },
    alternates: {
        canonical: "https://killianfievet.com/projects/cookme",
    },
};

export default function CookMe() {
    return (
        <ProjectCard
            title="CookMe - Application Recettes"
            description="Une app interactive type TikTok pour partager des recettes."
            longDescription="CookMe revisite la consultation de recettes en s'inspirant du format vertical de TikTok. L'idée est de proposer une expérience immersive où chaque recette est présentée via une courte vidéo ou une série d'images dynamiques. L'utilisateur peut liker, enregistrer et filtrer les recettes par ingrédients ou temps de préparation. Le projet explore les problématiques de performance mobile et de gestion de flux de données asynchrones."
            objective="Développer une interface mobile fluide et engageante qui simplifie la découverte culinaire pour la génération Z, tout en maîtrisant les technologies hybrides."
            image={getAssetPath("/data/projects/cookme.png")}
            stack={["React Native", "Expo", "Firebase", "Framer Motion"]}
            github="https://github.com/Vexyuu/cookme"
            demo="#"
            category="Mobile"
        />
    );
}
