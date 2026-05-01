// src/components/About.tsx
"use client";
import { motion } from "framer-motion";
import { FaGraduationCap, FaNetworkWired, FaLightbulb } from "react-icons/fa";
import SpotlightCard from "./SpotlightCard";


export default function About() {
    return (
        <section id="about" className="py-32 px-6 bg-background text-foreground overflow-hidden w-full flex flex-col items-center">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="max-w-6xl w-full text-center space-y-16"
            >
                {/* Titre */}
                <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-16 py-4">
                    <span className="bg-mask-text inline-block">À PROPOS DE MOI</span>
                </h2>

                {/* Texte principal */}
                <div className="flex flex-col justify-center text-center max-w-3xl mx-auto">
                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 font-medium tracking-tight">
                        Étudiant en <span className="text-secondary font-semibold">Licence MIAGE à l&apos;Université Paris 1 Panthéon-Sorbonne</span>, je suis passionné par l&apos;informatique depuis toujours. Curieux et autonome, j&apos;aime concevoir des architectures robustes et développer des applications web modernes, fluides et intuitives.
                    </p>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                        Mon objectif : allier technique et expérience utilisateur pour créer des solutions numériques performantes qui répondent aux besoins métiers.
                    </p>

                    <div className="grid sm:grid-cols-3 gap-6">
                        <SpotlightCard className="p-6 card-glass card-shine rounded-2xl border-l-[3px] border-l-primary/70">
                            <FaGraduationCap className="text-3xl text-primary mb-4" />
                            <h3 className="font-bold text-lg mb-2 text-foreground">Développement</h3>
                            <p className="text-sm text-muted-foreground">Frontend (React, Next) & Backend (Node.js, Python).</p>
                        </SpotlightCard>
                        <SpotlightCard className="p-6 card-glass card-shine rounded-2xl border-l-[3px] border-l-primary/70">
                            <FaNetworkWired className="text-3xl text-primary mb-4" />
                            <h3 className="font-bold text-lg mb-2 text-foreground">Data & IA</h3>
                            <p className="text-sm text-muted-foreground">Création d&apos;outils d&apos;intelligence artificielle.</p>
                        </SpotlightCard>
                        <SpotlightCard className="p-6 card-glass card-shine rounded-2xl border-l-[3px] border-l-primary/70">
                            <FaLightbulb className="text-3xl text-primary mb-4" />
                            <h3 className="font-bold text-lg mb-2 text-foreground">Vision</h3>
                            <p className="text-sm text-muted-foreground">Améliorer l&apos;UX/UI en alliant esthétique et performance.</p>
                        </SpotlightCard>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
