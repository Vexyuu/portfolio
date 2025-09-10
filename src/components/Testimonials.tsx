// src/components/Testimonials.tsx
"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";
// import Image from "next/image";
import { RxAvatar } from "react-icons/rx";

const testimonials = [
    {
        name: "M. Halimi",
        role: "Professeur d’informatique",
        // avatar: "/avatar-placeholder.png",
        quote: `Je suis professeur en développement logiciel à l’école Aurlom. J’ai la chance d’enseigner le développement procédural, Web, et la Programmation Orientée Objet à Mr Killian Fievet.
        Killian est un étudiant très sérieux, motivé dans ses études, avec un réel talent dans la résolution de problèmes complexes reposants sur des paradigmes variés.`,
    },
    {
        name: "M. Dupont",
        role: "Professeur",
        // avatar: "/avatar-placeholder.png",
        quote: "Killian est un étudiant sérieux, curieux et très impliqué dans ses projets. Sa capacité à apprendre vite et à appliquer ses connaissances est remarquable.",
    },
];

export default function Testimonials() {
    const controls = useAnimation();
    const containerRef = useRef<HTMLDivElement>(null);
    const [dragging, setDragging] = useState(false);

    // Démarrage de l'animation continue
    useEffect(() => {
        if (!dragging) {
            controls.start({
                x: ["0%", "-50%"],
                transition: {
                    repeat: Infinity,
                    duration: testimonials.length * 8,
                    ease: "linear",
                },
            });
        } else {
            controls.stop(); // stoppe uniquement pendant le drag
        }
    }, [controls, dragging]);

    return (
        <section id="testimonials" className="py-20 bg-background text-foreground">
            <div className="max-w-6xl mx-auto text-center space-y-12">
                <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient bg-[length:200%_200%]">
                    Ce qu’ils pensent de moi
                </h2>

                <div className="relative overflow-hidden" ref={containerRef}>
                    <motion.div
                        className="flex gap-6 w-max cursor-grab"
                        animate={controls}
                        drag="x"
                        dragConstraints={{ left: -1000, right: 0 }}
                        dragElastic={0.1}
                        onDragStart={() => setDragging(true)}
                        onDragEnd={() => setDragging(false)}
                    >
                        {testimonials.concat(testimonials).map((t, idx) => (
                            <div
                                key={idx}
                                className="min-w-[300px] max-w-xs p-6 bg-background/50 backdrop-blur-md rounded-2xl shadow-lg flex-shrink-0"
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <RxAvatar
                                        className="w-12 h-12 rounded-full object-cover"
                                    />
                                    <div className="text-left">
                                        <p className="font-semibold">{t.name}</p>
                                        <p className="text-xs text-muted-foreground">{t.role}</p>
                                    </div>
                                </div>
                                <p className="text-sm text-left">{t.quote}</p>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Indicateur de progression simple */}
                <div className="flex justify-center gap-2">
                    {testimonials.map((_, idx) => (
                        <span
                            key={idx}
                            className="w-3 h-3 rounded-full bg-primary/50 animate-pulse"
                        />
                    ))}
                </div>
            </div>

            <style jsx>{`
                .animate-gradient {
                    background-size: 200% 200%;
                    animation: gradient 6s ease infinite;
                }
                @keyframes gradient {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
            `}</style>
        </section>
    );
}
