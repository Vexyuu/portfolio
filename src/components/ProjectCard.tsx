"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, Github, ExternalLink, Cpu, Target, Layout } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export type ProjectProps = {
    title: string;
    description: string;
    longDescription?: string;
    objective: string;
    image: string;
    stack: string[];
    github: string;
    demo?: string;
};

export default function ProjectCard({ title, description, longDescription, objective, image, stack, github, demo }: ProjectProps) {
    const router = useRouter();

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.6 }
        }
    };

    return (
        <div className="min-h-screen bg-background text-foreground relative overflow-hidden pb-32">
            {/* --- HERO SECTION --- */}
            <div className="relative w-full h-[60vh] md:h-[75vh] min-h-[500px] overflow-hidden">
                <motion.div 
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.5 }}
                    className="absolute inset-0"
                >
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/60 to-background" />
                    <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-transparent hidden md:block" />
                </motion.div>

                {/* Return Button */}
                <motion.button
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    onClick={() => router.back()}
                    className="absolute top-12 left-6 md:left-12 z-50 flex items-center gap-3 px-8 py-4 rounded-full bg-background/30 backdrop-blur-2xl border border-white/5 text-white font-black text-xs uppercase tracking-widest hover:bg-secondary hover:text-background transition-all duration-500 group shadow-2xl shadow-black/40"
                >
                    <ArrowLeft size={16} className="group-hover:-translate-x-2 transition-transform duration-300" />
                    <span>Retour</span>
                </motion.button>

                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-24 z-20">
                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                        >
                            <h2 className="text-secondary font-black tracking-[0.4em] uppercase text-[10px] mb-6 flex items-center gap-4">
                                <span className="w-12 h-[2px] bg-secondary rounded-full" />
                                PROJET SIGNATURE
                            </h2>
                            <h1 className="text-5xl md:text-9xl font-black tracking-tighter mb-10 bg-mask-text py-2 italic">
                                {title.toUpperCase()}
                            </h1>
                            <div className="flex flex-wrap gap-8">
                                <Link 
                                    href={github} 
                                    target="_blank"
                                    className="flex items-center gap-3 px-10 py-5 rounded-full bg-foreground text-background font-black text-xs uppercase tracking-[0.2em] hover:bg-secondary transition-all duration-500 group shadow-2xl shadow-black/50"
                                >
                                    <Github size={18} />
                                    <span>Explorer Source</span>
                                </Link>
                                {demo && demo !== "#" && (
                                    <Link 
                                        href={demo} 
                                        target="_blank"
                                        className="flex items-center gap-3 px-10 py-5 rounded-full bg-secondary/10 backdrop-blur-2xl border border-secondary/20 text-secondary font-black text-xs uppercase tracking-[0.2em] hover:bg-secondary hover:text-background transition-all duration-500 shadow-2xl shadow-secondary/5"
                                    >
                                        <ExternalLink size={18} />
                                        <span>Démo Live</span>
                                    </Link>
                                )}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* --- CONTENT SECTION --- */}
            <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="max-w-7xl mx-auto px-6 -mt-10 md:-mt-20 relative z-30 grid grid-cols-1 lg:grid-cols-3 gap-12"
            >
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-12">
                    <motion.div variants={itemVariants} className="p-8 md:p-12 rounded-[3rem] card-glass border-white/5 shadow-2xl">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="p-3 rounded-2xl bg-primary/10 text-primary">
                                <Layout size={24} />
                            </div>
                            <h2 className="text-3xl font-black tracking-tight">Vision du Projet</h2>
                        </div>
                        <p className="text-xl text-foreground font-medium leading-relaxed mb-8 border-l-4 border-primary pl-6 italic">
                            {description}
                        </p>
                        {longDescription && (
                            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                                {longDescription.split('\n').map((para, i) => (
                                    <p key={i}>{para}</p>
                                ))}
                            </div>
                        )}
                    </motion.div>

                    <motion.div variants={itemVariants} className="p-8 md:p-12 rounded-[3rem] card-glass border-white/5 shadow-2xl">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="p-3 rounded-2xl bg-secondary/10 text-secondary">
                                <Target size={24} />
                            </div>
                            <h2 className="text-3xl font-black tracking-tight">Objectif Principal</h2>
                        </div>
                        <p className="text-muted-foreground text-lg leading-relaxed">
                            {objective}
                        </p>
                    </motion.div>
                </div>

                {/* Sidebar */}
                <div className="space-y-8">
                    <motion.div variants={itemVariants} className="p-8 rounded-[2.5rem] card-glass border-white/5 shadow-2xl sticky top-32">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="p-3 rounded-2xl bg-accent/10 text-accent">
                                <Cpu size={24} />
                            </div>
                            <h2 className="text-2xl font-black tracking-tight">Tech Stack</h2>
                        </div>
                        <div className="flex flex-wrap gap-3">
                            {stack.map((tech) => (
                                <span
                                    key={tech}
                                    className="px-4 py-2 bg-background/50 border border-white/10 rounded-full text-xs font-black uppercase tracking-widest text-foreground hover:border-primary/50 hover:text-primary transition-all duration-300 cursor-default"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                        
                        <div className="mt-12 pt-8 border-t border-white/5">
                            <p className="text-xs font-black uppercase tracking-widest text-muted-foreground mb-4">Statut</p>
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)] animate-pulse" />
                                <span className="text-sm font-bold text-foreground">Projet Audité & Vérifié</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
}