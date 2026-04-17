import CareerContent from "@/components/CareerContent";
import { BASE_URL } from "@/utils/env";

export const metadata = {
    title: "Parcours & Carrière - Killian Fievet",
    description: "Découvrez le parcours scolaire et professionnel de Killian Fievet : expériences, stages et alternances en développement web et systèmes d’information.",
    keywords: [
        "Killian Fievet",
        "carrière développeur",
        "expérience professionnelle",
        "alternance informatique",
        "développeur web",
        "portfolio"
    ],
    openGraph: {
        title: "Carrière de Killian Fievet",
        description: "Découvrez mes expériences académiques et professionnelles en informatique.",
        url: `${BASE_URL}/career/`,
        type: "profile",
        images: [
            {
                url: `${BASE_URL}/og-image.png`,
                width: 1200,
                height: 630,
                alt: "Carrière - Killian Fievet",
            },
        ],
    },
    alternates: {
        canonical: `${BASE_URL}/career/`,
    },
};

export default function CareerPage() {
    return <CareerContent />;
}