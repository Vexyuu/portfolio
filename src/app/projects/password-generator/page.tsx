import { getAssetPath } from "@/utils/paths";
import ProjectCard from "@/components/ProjectCard";
import { BASE_URL } from "@/utils/env";

export const metadata = {
    title: "Générateur de Mots de Passe | Sécurité & Performance",
    description: "Créez des mots de passe robustes et personnalisés avec cet outil de sécurité moderne. Développé avec Next.js et TypeScript pour une fiabilité maximale.",
    keywords: ["générateur mot de passe", "sécurité web", "TypeScript", "Next.js", "Killian Fievet", "outil sécurité", "password generator"],
    openGraph: {
        title: "Générateur de Mots de Passe Sécurisé - Killian Fievet",
        description: "Générez instantanément des mots de passe complexes et sécurisés avec des options de personnalisation avancées.",
        url: `${BASE_URL}/projects/password-generator/`,
        siteName: "Killian Fievet - Portfolio",
        locale: "fr_FR",
        type: "article",
        images: [
            {
                url: `${BASE_URL}/data/projects/password-generator-modern.png`,
                width: 1200,
                height: 630,
                alt: "Interface du Générateur de mots de passe moderne",
            },
        ],
    },
    alternates: {
        canonical: `${BASE_URL}/projects/password-generator/`,
    },
};

export default function PasswordGenerator() {
    return (
        <ProjectCard
            title="Générateur de mots de passe"
            description="Un outil performant pour générer des mots de passe robustes et hautement sécurisés."
            longDescription="Ce projet met l'accent sur la sécurité et la flexibilité. Développé pour offrir une expérience utilisateur fluide, il permet de générer des clés d'accès complexes en manipulant des ensembles de caractères. L'application évalue la robustesse des mots de passe et intègre des fonctionnalités ergonomiques comme la copie en un clic et l'historique local."
            objective="L'objectif était de concevoir un outil utilitaire premium intégrant des concepts de sécurité (entropie, complexité algorithmique) tout en conservant une interface minimaliste et réactive sous Next.js."
            image={getAssetPath("/data/projects/password-generator-modern.png")}
            stack={["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"]}
            //github="https://github.com/Vexyuu/password-generator"
            demo="https://passgen.killianfievet.com"
            category="Outils"
        />
    );
}
