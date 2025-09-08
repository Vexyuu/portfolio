// src/components/Projects.tsx

import Image from "next/image";
import Link from "next/link";

export const metadata = {
    title: "Projets - Killian Fievet",
    description: "Découvrez mes projets réalisés en développement web et mobile.",
};

const projects = [
    {
        title: "Billy.IA - Assistant IA",
        description: "Un assistant personnel propulsé par l'IA pour répondre à vos questions.",
        link: "https://github.com/Vexyuu/portfolio",
        more: "/projects/billy-ia",
        image: "/data/projects/BillyIA_1.webp",
        demo: "#",
        isFinite: false,
    },
    {
        title: "Application Recettes",
        description: "Une app interactive type TikTok pour partager des recettes.",
        link: "https://github.com/Vexyuu/cookme",
        more: "/projects/cookme",
        image: "/data/projects/cookme.png",
        demo: "#",
        isFinite: false,
    },
    {
        title: "Générateur de mots de passe",
        description: "Un petit outil pratique pour créer des mots de passe sécurisés.",
        link: "https://github.com/Vexyuu/password-generator",
        more: "/projects/password-generator",
        image: "/data/projects/password-generator.png",
        demo: "#",
        isFinite: true,
    },
]

export default function Projects() {
    return (
        <section id="projects" className="py-20 px-6 bg-background text-foreground">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-12">Mes projets</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {projects.map(project => (
                        <Link
                            key={project.title}
                            href={project.more}
                            className="card-glass overflow-hidden hover:scale-105 transition-transform duration-300"
                            rel="noopener noreferrer"
                        >
                            <div className="relative w-full h-48 md:h-56">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    layout="fill" // You can customize this based on your design
                                    objectFit="cover" // To maintain aspect ratio
                                />
                            </div>
                            <div className="p-6 text-left">
                                <h3 className="text-xl font-bold text-primary mb-2">{project.title}</h3>
                                {project.isFinite ? (
                                    <span className="inline-block bg-accent text-background text-xs font-semibold px-2 py-1 rounded-full mb-2">
                                        Projet fini
                                    </span>
                                ) : (
                                    <span className="inline-block bg-secondary text-background text-xs font-semibold px-2 py-1 rounded-full mb-2">
                                        En cours
                                    </span>
                                )}

                                <p className="text-muted">{project.description}</p>
                                <div className="mt-4 flex justify-between items-center">
                                    <Link href={project.more} className="text-accent hover:underline">En savoir plus</Link>

                                    {project.isFinite && (
                                        <Link
                                            href={project.demo}
                                            className="text-accent hover:underline"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Voir la démo
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
                <div className="mt-8">
                    <Link href="/projects" rel="noopener noreferrer" className="text-accent hover:underline">Voir plus ici</Link>
                </div>
            </div>
        </section>
    );
}