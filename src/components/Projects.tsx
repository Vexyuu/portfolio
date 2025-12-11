// src/components/Projects.tsx

import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";

export default function Projects() {
    return (
        <section id="projects" className="py-20 px-6 bg-background text-foreground">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-12">Mes projets</h2>
                <p className="text-muted-foreground mb-8">
                    Total : {projects.length} projets
                </p>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {projects.slice(0, 3).map((project) => (
                        <div
                            key={project.title}
                            // Application de la classe Glassmorphism
                            className="card-glass card-shine overflow-hidden hover:scale-105 transition-transform duration-300"
                        >
                            <Link href={project.more} rel="noopener noreferrer">
                                <div className="relative w-full h-48 md:h-56">
                                    <Image
                                        src={project.image}
                                        alt={`Aperçu du projet ${project.title}`}
                                        fill
                                        className="object-cover"
                                        priority={true}
                                    />
                                </div>
                            </Link>

                            <div className="p-6 text-left">
                                <Link href={project.more} rel="noopener noreferrer">
                                    <h3 className="text-xl font-bold text-primary mb-2 hover:underline">{project.title}</h3>
                                </Link>

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

                                <div className="mt-4 flex justify-between items-center text-sm">
                                    <Link href={project.more} className="text-accent hover:underline">
                                        En savoir plus
                                    </Link>

                                    <div className="flex gap-3">
                                        <Link
                                            href={project.link}
                                            className="text-accent hover:underline"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            GitHub
                                        </Link>

                                        {project.isFinite && (
                                            <Link
                                                href={project.demo}
                                                className="text-accent hover:underline"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                Démo
                                            </Link>
                                        )}
                                    </div>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-8">
                    <Link href="/projects" rel="noopener noreferrer" className="text-accent hover:underline">
                        Voir plus ici
                    </Link>
                </div>
            </div>
        </section>
    );
}