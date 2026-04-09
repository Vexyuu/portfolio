// src/app/projects/layout.tsx
export const metadata = {
    title: "Projets - Killian Fievet",
    description: "Découvrez l'ensemble de mes projets en développement web, mobile et intelligence artificielle.",
    keywords: ["projets informatiques", "portfolio", "développement", "React", "Python", "IA"],
    openGraph: {
        title: "Projets de Killian Fievet",
        description: "Showcase de mes créations et réalisations techniques.",
        url: "https://killianfievet.com/projects",
        type: "website",
    },
    alternates: {
        canonical: "https://killianfievet.com/projects",
    },
};

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
