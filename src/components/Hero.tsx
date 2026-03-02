// src/components/Hero.tsx
"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaDownload, FaEnvelope } from "react-icons/fa";
import { getAssetPath } from "@/utils/paths";
import HeroCanvas from "./HeroCanvas"; // Composant 3D

export const metadata = {
    title: "Accueil - Killian Fievet",
    description: "Bienvenue sur mon portfolio. Découvrez mes projets, compétences et contactez-moi.",
};

const phrases = [
    "Développeur full-stack",
    "Passionné par l'innovation",
    "Toujours prêt à relever des défis",
    "Votre futur développeur",
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
        // <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <section className="relative min-h-screen pt-20 flex flex-col md:flex-row justify-center items-center text-center md:text-left px-6">
            {/* 1. Le Canavas Three.js en arrière-plan (z-0) */}
            <HeroCanvas />

            {/* 2. Le Contenu Textuel et Boutons (z-10 pour passer devant la 3D) */}
            <div className="relative z-10 p-8 card-glass card-shine max-w-xl flex flex-col justify-center items-center md:items-start text-center md:text-left">
                <h1 className="text-5xl md:text-6xl font-bold text-foreground">
                    Bonjour, je suis <span className="text-primary">Killian Fievet</span>
                </h1>
                <p
                    key={current}
                    // className="text-xl md:text-2xl text-muted h-8 transition-opacity duration-600 ease-in-out opacity-100 mt-4 mb-8" >
                    className="text-xl md:text-2xl text-muted h-8 ease-in-out opacity-100 mt-4 mb-8" >
                    {phrases[current]}
                </p>

                {/* Boutons Améliorés */}
                <div className="flex justify-center md:justify-start gap-4 mt-6">
                    <Link href={getAssetPath("/data/CV_Alternance_Sorbonne_2025.pdf")} target="_blank"
                        aria-label="Télécharger le CV de Killian Fievet"
                        className="px-6 py-3 rounded-full bg-primary text-white font-medium hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center" >
                        <FaDownload className="mr-2" />
                        Télécharger mon CV
                    </Link>

                    {/* Bouton Secondaire */}
                    <Link href="#contact" className="px-6 py-3 rounded-full border border-muted-foreground/30 text-foreground font-medium hover:bg-muted/10 hover:border-muted-foreground/50 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center" >
                        <FaEnvelope className="mr-2" />
                        Me contacter
                    </Link>
                </div>
            </div>

            {/* Image de profil (avec un contour et une ombre premium) */}
            <div className="flex-1 mt-10 md:mt-0 relative z-10 flex justify-center md:justify-end">
                <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto rounded-full p-2 bg-gradient-to-tr from-primary/20 via-primary/5 to-transparent backdrop-blur-sm border border-primary/20 shadow-2xl shadow-primary/20 transition-transform duration-500 hover:scale-105">
                    <div className="relative w-full h-full rounded-full overflow-hidden border border-foreground/10">
                        <Image
                            src={getAssetPath("/data/photo.jpg")}
                            alt="Photo Killian Fievet"
                            fill
                            priority
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}