import CareerContent from "@/components/CareerContent";

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
        url: "https://vexyuu.github.io/portfolio/career",
        type: "profile",
    },
};

export default function CareerPage() {
    return <CareerContent />;
}