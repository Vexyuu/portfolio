// src/components/ProjectCard.tsx

import Image from "next/image";
// import { motion } from "framer-motion";
// import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export type ProjectProps = {
    title: string;
    description: string;
    longDescription?: string;
    objective: string;
    image: string;
    stack: string[];
    github: string;
    demo?: string;
};

export default function ProjectCard({ title, description, longDescription, objective, image, stack, github, demo }: ProjectProps) {
    return (
        <main className="max-w-4xl mx-auto py-20 px-6 bg-card rounded-2xl shadow-lg border border-border">
            <h1 className="text-4xl font-bold mb-6">{title}</h1>
            <p className="text-muted mb-6">{description}</p>

            {longDescription && (
                <p className="text-foreground mb-8 leading-relaxed">{longDescription}</p>
            )}

            <div className="relative w-full h-64 mb-8 overflow-hidden rounded-xl shadow-md">
                <Image
                    src={image}
                    alt={`Aperçu du projet ${title}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                />
            </div>

            <h2 className="text-2xl font-semibold mb-4">Technologies utilisées</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mb-8">
                {stack.map((tech) => (
                    <span
                        key={tech}
                        className="px-4 py-2 bg-secondary text-secondary-foreground rounded-md shadow-sm text-sm font-medium text-center"
                    >
                        {tech}
                    </span>
                ))}
            </div>

            <h2 className="text-2xl font-semibold mb-4">Objectif du projet</h2>
            <p className="text-muted mb-8">{objective}</p>

            <div className="flex gap-4">
                <Link
                    href={github}
                    className="inline-flex items-center px-4 py-2 rounded-lg bg-accent text-accent-foreground font-semibold hover:bg-accent/90 transition-colors duration-200 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Voir sur GitHub
                </Link>

                {demo && (
                    <Link
                        href={demo}
                        className="inline-flex items-center px-4 py-2 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors duration-200 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Démo
                    </Link>
                )}
            </div>
        </main>
    );
}