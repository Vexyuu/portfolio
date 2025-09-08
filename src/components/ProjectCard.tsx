// src/components/ProjectCard.tsx

import Image from "next/image";
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
        <main className="max-w-4xl mx-auto py-20 px-6">
            <h1 className="text-4xl font-bold mb-6">{title}</h1>
            <p className="text-muted mb-6">{description}</p>

            {longDescription && (
                <p className="text-foreground mb-8 leading-relaxed">{longDescription}</p>
            )}

            <div className="relative w-full h-64 mb-8">
                <Image
                    src={image}
                    alt={`Aperçu du projet ${title}`}
                    fill
                    className="object-cover rounded-lg"
                />
            </div>

            <h2 className="text-2xl font-semibold mb-4">Technologies utilisées</h2>
            <ul className="list-disc pl-6 mb-8 text-muted">
                {stack.map((tech) => (
                    <li key={tech}>{tech}</li>
                ))}
            </ul>

            <h2 className="text-2xl font-semibold mb-4">Objectif du projet</h2>
            <p className="text-muted mb-8">{objective}</p>

            <div className="flex gap-6">
                <Link
                    href={github}
                    className="text-accent hover:underline"
                    target="_blank"
                >
                    Voir sur GitHub
                </Link>

                {demo && (
                    <Link href={demo} className="text-accent hover:underline" target="_blank">
                        Démo
                    </Link>
                )}
            </div>
        </main>
    );
}
