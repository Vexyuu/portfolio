// src/components/Projects.tsx
export const metadata = {
    title: "Projets - Killian Fievet",
    description: "Découvrez mes projets réalisés en développement web et mobile.",
};

const projects = [
    {
        title: "Portfolio Web",
        description: "Mon portfolio dynamique en Next.js & Tailwind CSS.",
        link: "https://github.com/Vexyuu/portfolio",
        image: "/data/projects/portfolio.png",
        demo: "#",
    },
    {
        title: "Application Recettes",
        description: "Une app interactive type TikTok pour partager des recettes.",
        link: "https://github.com/Vexyuu/cookme",
        image: "/data/projects/cookme.png",
        demo: "#",
    },
    {
        title: "Générateur de mots de passe",
        description: "Un petit outil pratique pour créer des mots de passe sécurisés.",
        link: "https://github.com/Vexyuu/password-generator",
        image: "/data/projects/password-generator.png",
        demo: "#",
    },
]

export default function Projects() {
    return (
        <section id="projects" className="py-20 px-6 bg-background text-foreground">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-12">Mes projets</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {projects.map(project => (
                        <a
                            key={project.title}
                            href={project.link}
                            className="card-glass overflow-hidden hover:scale-105 transition-transform duration-300"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div className="relative w-full h-48 md:h-56">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="object-cover w-full h-full"
                                />
                            </div>
                            <div className="p-6 text-left">
                                <h3 className="text-xl font-bold text-primary mb-2">{project.title}</h3>
                                <p className="text-muted">{project.description}</p>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}