// src/components/About.tsx
"use client";
import Image from "next/image";
import { FaGraduationCap, FaNetworkWired, FaLightbulb } from "react-icons/fa";
import SpotlightCard from "./SpotlightCard";
import TextReveal from "./TextReveal";

export const metadata = {
    title: "À propos de moi - Killian Fievet",
    description: "En savoir plus sur moi, mes compétences et mon parcours.",
};

export default function About() {
    return (
        <section id="about" className="py-20 px-6 bg-background text-foreground">
            <div className="max-w-5xl mx-auto text-center space-y-12">
                {/* Titre */}
                <TextReveal text="À propos de moi" className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent bg-[length:200%_200%] justify-center" />

                {/* Texte principal */}
                <div className="flex flex-col justify-center text-left">
                    <p className="text-lg text-muted-foreground leading-relaxed mb-6 font-medium">
                        Étudiant en <span className="text-secondary font-semibold">Licence MIAGE à l&apos;Université Paris 1 Panthéon-Sorbonne</span>, je suis passionné par l&apos;informatique depuis toujours. Curieux et autonome, j&apos;aime concevoir des architectures robustes et développer des applications web modernes, fluides et intuitives.
                    </p>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                        Mon objectif : allier technique et expérience utilisateur pour créer des solutions numériques performantes qui répondent aux besoins métiers.
                    </p>

                    <div className="grid sm:grid-cols-3 gap-6">
                        <SpotlightCard className="p-6 card-glass card-shine rounded-2xl border-l-[3px] border-l-primary/70">
                            <FaGraduationCap className="text-3xl text-primary mb-4" />
                            <h3 className="font-bold text-lg mb-2 text-foreground">Développement</h3>
                            <p className="text-sm text-muted-foreground">Frontend (React, Next) & Backend (Express, Symfony).</p>
                        </SpotlightCard>
                        <SpotlightCard className="p-6 card-glass card-shine rounded-2xl border-l-[3px] border-l-secondary/70">
                            <FaNetworkWired className="text-3xl text-secondary mb-4" />
                            <h3 className="font-bold text-lg mb-2 text-foreground">Data & IA</h3>
                            <p className="text-sm text-muted-foreground">Création d&apos;outils d&apos;intelligence artificielle (LLMs, RAG, NLP).</p>
                        </SpotlightCard>
                        <SpotlightCard className="p-6 card-glass card-shine rounded-2xl border-l-[3px] border-l-accent/70">
                            <FaLightbulb className="text-3xl text-accent mb-4" />
                            <h3 className="font-bold text-lg mb-2 text-foreground">Vision</h3>
                            <p className="text-sm text-muted-foreground">Améliorer l&apos;UX/UI en alliant esthétique et performance brute.</p>
                        </SpotlightCard>
                    </div>
                </div>
            </div>
        </section>
    );
}
