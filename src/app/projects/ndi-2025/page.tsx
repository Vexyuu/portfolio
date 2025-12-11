// src/app/projects/password-generator/page.tsx
import { getAssetPath } from "@/utils/paths";
import ProjectCard from "@/components/ProjectCard";

export const metadata = {
    title: "Nuit de l'info 2025 - Projet NDI",
    description: "Projet développé pour la Nuit de l'info 2025. Découvrez notre solution innovante.",
    keywords: ["Nuit de l'info", "projet NDI 2025", "innovation", "Killian Fievet", "portfolio projet"],
    openGraph: {
        title: "Projet Nuit de l'info 2025 - Killian Fievet",
        description: "Projet développé pour la Nuit de l'info 2025. Découvrez notre solution innovante.",
        url: "https://404-not-found-krir-nuitdelinfo.great-site.net",
        type: "article",
        images: [
            {
                url: "https://404-not-found-krir-nuitdelinfo.great-site.net",
                width: 1200,
                height: 630,
                alt: "Projet Nuit de l'info 2025 - Killian Fievet",
            },
        ],
    },
};

export default function NDI2025() {
    return (
        <ProjectCard
            title="Nuit de l'info 2025 - Projet NDI"
            description="Projet développé pour la Nuit de l'info 2025. Découvrez notre solution innovante."
            longDescription="Ce projet a été réalisé dans le cadre de la Nuit de l'info 2025, un événement annuel qui rassemble des étudiants en informatique pour relever des défis technologiques en équipe. Notre équipe, composée de quatre membres, a travaillé ensemble pour développer une application web ludique et éducative visant à sensibiliser les utilisateurs aux enjeux du numérique inclusif, responsable et durable (NIRD). L'application propose plusieurs défis interactifs, tels qu'un jeu Snake caché, un chatbot humoristique, un QCM santé posturale, une carte des talents collaborative, et des scénarios NIRD. Chaque défi a été conçu pour être à la fois divertissant et informatif, tout en mettant en avant les bonnes pratiques numériques. Le projet a permis à notre équipe de renforcer ses compétences en développement web, en gestion de projet et en travail collaboratif, tout en contribuant à une cause importante."
            objective="L' objectif principal de ce projet est d'illustrer comment un établissement scolaire peut tenir tête aux Big Tech en adoptant la démarche NIRD : Numérique Inclusif, Responsable et Durable. Nous visons à sensibiliser les utilisateurs aux enjeux du numérique à travers une expérience interactive complète."
            image={getAssetPath("/data/projects/NDI_2025.png")}
            stack={["PHP", "CSS", "JavaScript", 'SQL']}
            github="https://404-not-found-krir-nuitdelinfo.great-site.net"
            demo="https://404-not-found-krir-nuitdelinfo.great-site.net"
        />
    );
}
