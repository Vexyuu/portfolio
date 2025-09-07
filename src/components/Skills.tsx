// src/components/Skills.tsx
import Image from "next/image";

export const metadata = {
    title: "Compétences - Killian Fievet",
    description: "Découvrez mes compétences en développement web, mobile, algorithmique.",
};

const skills = [
    { name: "HTML", icon: "/data/images/HTML.png" },
    { name: "CSS", icon: "/data/images/CSS.png" },
    { name: "JavaScript", icon: "/data/images/JavaScript.png" },
    { name: "React", icon: "/data/images/React.png" },
    { name: "PHP", icon: "/data/images/PHP.png" },
    { name: "Python", icon: "/data/images/Python.png" },
];

export default function Skills() {
    return (
        <section id="skills" className="py-20 px-6 bg-background text-foreground">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-12">Mes compétences</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                    {skills.map((skill) => (
                        <div key={skill.name} className="card-glass flex flex-col items-center p-6 hover:scale-105 transition">
                            <Image
                                src={skill.icon}
                                alt={skill.name}
                                width={64}
                                height={64}
                                className="mb-2"
                            />
                            <p className="text-muted">{skill.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}