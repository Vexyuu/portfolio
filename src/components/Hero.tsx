"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaDownload, FaEnvelope } from "react-icons/fa";
import TextReveal from "./TextReveal";
import Button from "./ui/Button";

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
        <section className="relative min-h-screen pt-32 pb-12 flex flex-col items-center justify-between text-center px-6 overflow-hidden">
            {/* Top Spacer to balance the layout */}
            <div className="h-0 md:h-20" />

            {/* 2. Contenu Principal */}
            <div className="relative z-200 flex flex-col items-center gap-8 max-w-4xl">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-4"
                >
                    <h2 className="text-xs uppercase tracking-[0.4em] font-black text-secondary mb-4 bg-secondary/10 border border-secondary/20 px-4 py-2 rounded-full inline-block backdrop-blur-md">
                        Disponible pour de nouveaux projets
                    </h2>

                    <div className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] select-none">
                        <TextReveal text="VOTRE VISION," className="justify-center" delay={0} />
                        <motion.div
                            whileHover={{ scale: 1.05, rotate: -0.5 }}
                            className="bg-mask-text py-2 cursor-default"
                        >
                            <TextReveal text="MON CODE." className="justify-center" delay={0.5} />
                        </motion.div>
                    </div>
                </motion.div>

                <div className="text-lg md:text-xl text-muted-foreground font-black tracking-tighter uppercase h-8">
                    <TextReveal key={current} text={phrases[current]} className="justify-center" delay={0} />
                </div>

                {/* Boutons Premium */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="flex flex-wrap justify-center gap-6 mt-8"
                >
                    <Button
                        variant="royal"
                        size="lg"
                        href="/data/CV_Alternance_Sorbonne_2026_FR.pdf"
                        target="_blank"
                        icon={<FaDownload />}
                    >
                        Télécharger CV
                    </Button>

                    <Button
                        variant="glass"
                        size="lg"
                        href="/#contact"
                        icon={<FaEnvelope />}
                    >
                        Contact
                    </Button>
                </motion.div>
            </div>

            {/* Scroll Indicator - Now part of the flex flow for guaranteed spacing */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="flex flex-col items-center gap-4 mt-12"
            >
                <span className="text-[9px] uppercase tracking-[0.4em] font-black text-muted-foreground/40">Scroll</span>
                <div className="w-[1px] h-10 bg-gradient-to-b from-secondary to-transparent animate-bounce opacity-20" />
            </motion.div>
        </section>
    );
}
