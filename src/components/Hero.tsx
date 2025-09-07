// src/components/Hero.tsx
"use client";
import { useEffect, useState } from "react";
import Image from "next/image";


export const metadata = {
    title: "Accueil - Killian Fievet",
    description: "Bienvenue sur mon portfolio. Découvrez mes projets, compétences et contactez-moi.",
};

const phrases = [
    "Développeur web & mobile",
    "Passionné par l'innovation",
    "Toujours prêt à relever des challenges"
];

export default function Hero() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent(prev => (prev + 1) % phrases.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="hero-bg h-screen flex flex-col md:flex-row justify-center items-center text-center md:text-left px-6">
            <div className="flex-1 space-y-6">
                <h1 className="text-5xl md:text-6xl font-bold text-foreground">
                    Bonjour, je suis <span className="text-primary">Killian Fievet</span>
                </h1>
                <p className="text-xl md:text-2xl text-muted h-8 transition-all">
                    {phrases[current]}
                </p>
                <div className="flex justify-center md:justify-start gap-4 mt-4">
                    <a href="@/data/CV_Alternance_Sorbonne_2025.pdf" target="_blank"
                        className="px-6 py-3 font-bold rounded-lg text-white bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 hover:scale-105 hover:shadow-xl transition-transform duration-300">
                        Télécharger mon CV
                    </a>
                    <a href="#contact" className="px-6 py-3 rounded-lg border-2 border-primary text-primary hover:bg-primary hover:text-white transition">
                        Me contacter
                    </a>
                </div>
            </div>
            <div className="flex-1 mt-10 md:mt-0">
                <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
                    <Image
                        src="/image/photo.jpg"
                        alt="Photo Killian Fievet"
                        fill
                        className="rounded-full object-cover shadow-2xl"
                    />
                </div>
            </div>
        </section>
    );
}
