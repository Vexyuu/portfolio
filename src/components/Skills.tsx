// src/components/Skills.tsx

import { getAssetPath } from "@/utils/paths";
import Image from "next/image";

export const metadata = {
    title: "Compétences - Killian Fievet",
    description: "Découvrez mes compétences en développement web, mobile, algorithmique.",
};

const skills = [
    { name: "HTML", icon: getAssetPath("/data/images/HTML.png") },
    { name: "CSS", icon: getAssetPath("/data/images/CSS.png") },
    { name: "JavaScript", icon: getAssetPath("/data/images/JavaScript.png") },
    { name: "React", icon: getAssetPath("/data/images/React_native.png") },
    { name: "Next.js", icon: getAssetPath("/data/images/NextJS.png") },
    { name: "PHP", icon: getAssetPath("/data/images/PHP.png") },
    { name: "Python", icon: getAssetPath("/data/images/Python.png") },
];

export default function Skills() {
    return (
        <section id="skills" className="py-20 px-6 bg-background text-foreground">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-12">Mes compétences</h2>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-4 md:gap-6 cursor-default">
                    {skills.map((skill) => (
                        <div
                            key={skill.name}
                            className="card-glass card-shine flex flex-col items-center justify-center p-4 hover:scale-105 hover:-translate-y-1 transition-all duration-300 gap-2"
                        >
                            <div className="relative w-10 h-10 md:w-12 md:h-12 flex items-center justify-center">
                                <Image
                                    src={skill.icon}
                                    alt={skill.name}
                                    width={40}
                                    height={40}
                                    className="object-contain"
                                    // Ajout de 'priority' pour les icônes en haut de page
                                    priority={true}
                                />
                            </div>
                            <p className="text-foreground text-xs md:text-sm font-medium text-center">{skill.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}