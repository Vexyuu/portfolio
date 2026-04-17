import { getAssetPath } from "@/utils/paths";
import ProjectCard from "@/components/ProjectCard";
import { BASE_URL } from "@/utils/env";

export const metadata = {
    title: "Shakello - Site de Recettes de Cocktails",
    description: "Découvrez Shakello, un site web dédié aux recettes de cocktails artisanaux. Plus de 55 créations pour éveiller vos sens.",
    keywords: ["Cocktails", "Recettes", "Mixologie", "Site Web", "Shakello", "Killian Fievet", "portfolio projet"],
    openGraph: {
        title: "Shakello - Site de Recettes de Cocktails",
        description: "Découvrez plus de 55 recettes de cocktails sur Shakello.",
        url: `${BASE_URL}/projects/shakello/`,
        type: "article",
        images: [
            {
                url: `${BASE_URL}/data/projects/shakello.png`,
                width: 1200,
                height: 630,
                alt: "Shakello - Recettes de Cocktails",
            },
        ],
    },
    alternates: {
        canonical: `${BASE_URL}/projects/shakello/`,
    },
};

export default function Shakello() {
    return (
        <ProjectCard
            title="Shakello - Recettes de Cocktails"
            description="Site web de recettes de cocktails artisanaux avec plus de 55 créations."
            longDescription="Shakello est une plateforme dédiée aux amateurs de cocktails, offrant une collection de plus de 55 recettes allant des classiques intemporels aux créations les plus audacieuses. Le site met l'accent sur l'art de la mixologie à domicile, avec une interface conviviale permettant de découvrir, filtrer et partager des recettes. Fonctionnalités incluent la vérification d'âge, une communauté de passionnés, une newsletter mensuelle et des conseils responsables sur la consommation d'alcool."
            objective="Créer un site web engageant et responsable pour partager la passion des cocktails, tout en promouvant une consommation modérée."
            image={getAssetPath("/data/projects/shakello.png")}
            stack={["NextJS", "Tailwind CSS", "TypeScript", "Node.js", "PostgreSQL"]}
            // github="#"
            demo="https://www.shakello.com"
            category="Web"
        />
    );
}