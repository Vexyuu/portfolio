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
            <div className="relative z-10 p-8 card-glass max-w-xl flex flex-col justify-center items-center md:items-start text-center md:text-left">
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
                <div className="flex justify-center md:justify-start gap-4 mt-4">
                    <Link href={getAssetPath("/data/CV_Alternance_Sorbonne_2025.pdf")} target="_blank"
                        aria-label="Télécharger le CV de Killian Fievet"
                        // className="px-6 py-3 group font-bold rounded-full text-white bg-gradient-to-r from-primary to-accent
                        // hover:scale-[1.03]  shadow-primary/50 transition-transform duration-300 shadow-lg" >
                        className="px-6 py-3 rounded-full border-2 border-secondary text-secondary hover:bg-secondary hover:text-white hover:scale-[1.03] shadow-lg" >
                        <FaDownload className="inline mr-2" />
                        Télécharger mon CV
                    </Link>

                    {/* Bouton Secondaire (Outline + Hover coloré) */}
                    <Link href="#contact" className="px-6 py-3 rounded-full border-2 border-secondary text-secondary
                    hover:bg-secondary hover:text-white hover:scale-[1.03] shadow-lg" >
                        <FaEnvelope className="inline mr-2" />
                        Me contacter
                    </Link>
                </div>
            </div>

            {/* Image de profil (avec un contour et une ombre) */}
            <div className="flex-1 mt-10 md:mt-0 relative z-10 flex justify-center md:justify-end">
                <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto border-4 border-primary rounded-full shadow-2xl shadow-primary/50">
                    <Image
                        src={getAssetPath("/data/photo.jpg")}
                        alt="Photo Killian Fievet"
                        fill
                        priority
                        className="rounded-full object-cover"
                    />
                </div>
            </div>
        </section>
    );
}