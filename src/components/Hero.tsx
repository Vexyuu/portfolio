"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";
import { FaDownload, FaEnvelope } from "react-icons/fa";
import { getAssetPath } from "@/utils/paths";
import HeroCanvas from "./HeroCanvas"; // Composant 3D
import TextReveal from "./TextReveal";

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
        <section className="relative min-h-screen pt-32 flex flex-col items-center justify-center text-center px-6 overflow-hidden">
            {/* 1. Le Canavas Three.js en arrière-plan */}
            <HeroCanvas />

            {/* 2. Contenu Principal */}
            <div className="relative z-10 flex flex-col items-center gap-8 max-w-4xl">
                
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-4"
                >
                    <h2 className="text-xs uppercase tracking-[0.4em] font-black text-secondary mb-4 bg-secondary/10 border border-secondary/20 px-4 py-2 rounded-full inline-block backdrop-blur-md">
                        Disponible pour de nouveaux projets
                    </h2>
                    
                    <div className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] select-none">
                        <TextReveal text="VOTRE VISION," className="justify-center" delay={0} />
                        <motion.div 
                            whileHover={{ scale: 1.05, rotate: -0.5 }}
                            className="bg-mask-text py-2 cursor-default"
                        >
                             <TextReveal text="MON CODE." className="justify-center" delay={0.5} />
                        </motion.div>
                    </div>
                </motion.div>

                <div className="text-xl md:text-2xl text-muted-foreground font-black tracking-tighter uppercase h-8">
                     <TextReveal key={current} text={phrases[current]} className="justify-center" delay={0} />
                </div>

                {/* Boutons Premium */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="flex flex-wrap justify-center gap-6 mt-12"
                >
                    <Link href={getAssetPath("/data/CV_Alternance_Sorbonne_2025.pdf")} target="_blank"
                        className="group relative px-10 py-5 rounded-full bg-secondary text-background font-black text-xs uppercase tracking-widest overflow-hidden transition-all duration-500 hover:shadow-[0_0_50px_rgba(217,119,6,0.3)] shadow-xl shadow-black/20" >
                        <span className="relative z-10 flex items-center gap-2">
                            <FaDownload /> Télécharger CV
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-secondary via-amber-300 to-secondary translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                    </Link>

                    <Link href="#contact" 
                        className="px-10 py-5 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl text-foreground font-black text-xs uppercase tracking-widest hover:bg-white/10 transition-all duration-500 flex items-center gap-2 shadow-xl shadow-black/10" >
                        <FaEnvelope /> Contact
                    </Link>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">Scroll</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent animate-bounce" />
            </motion.div>
        </section>
    );
}