// src/components/Projects.tsx

import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";
import TiltCard from "./TiltCard";
import TextReveal from "./TextReveal";

export default function Projects() {
    return (
        <section id="projects" className="py-20 px-6 bg-background text-foreground">
            <div className="max-w-6xl mx-auto text-center">
                <TextReveal text="Mes projets" className="text-3xl md:text-4xl font-bold mb-12 justify-center" />
                <p className="text-muted-foreground mb-8">
                    Total : {projects.length} projets
                </p>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {projects.slice(0, 3).map((project) => (
                        <TiltCard key={project.title}>
                            <div
                                // Application de la classe Glassmorphism
                                className="card-glass card-shine overflow-hidden h-full flex flex-col transition-transform duration-300 shadow-xl"
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

                                <div className="p-6 text-left flex-grow flex flex-col">
                                    <Link href={project.more} rel="noopener noreferrer">
                                        <h3 className="text-xl font-bold text-primary mb-2 hover:underline">{project.title}</h3>
                                    </Link>

                                    {project.isFinite ? (
                                        <span className="self-start bg-green-500/10 border border-green-500/20 text-green-500 text-xs font-semibold px-2 py-1 rounded-full mb-3">
                                            Projet fini
                                        </span>
                                    ) : (
                                        <span className="self-start bg-amber-500/10 border border-amber-500/20 text-amber-500 text-xs font-semibold px-2 py-1 rounded-full mb-3">
                                            En cours
                                        </span>
                                    )}

                                    <p className="text-muted mb-6 flex-grow">{project.description}</p>

                                    <div className="mt-auto flex flex-wrap justify-between items-center gap-2">
                                        <Link href={project.more} className="px-4 py-2 text-sm font-medium rounded-md bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
                                            En savoir plus
                                        </Link>

                                        <div className="flex gap-2">
                                            <Link
                                                href={project.link}
                                                className="px-3 py-2 text-sm font-medium rounded-md border border-muted-foreground/30 text-foreground hover:bg-muted/10 transition-colors"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                GitHub
                                            </Link>

                                            {project.isFinite && (
                                                <Link
                                                    href={project.demo}
                                                    className="px-3 py-2 text-sm font-medium rounded-md border border-muted-foreground/30 text-foreground hover:bg-muted/10 transition-colors"
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
                        </TiltCard>
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