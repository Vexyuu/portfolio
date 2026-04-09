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
        url: "https://killianfievet.com/career",
        type: "profile",
    },
    alternates: {
        canonical: "https://killianfievet.com/career",
    },
};

export default function CareerPage() {
    return <CareerContent />;
}