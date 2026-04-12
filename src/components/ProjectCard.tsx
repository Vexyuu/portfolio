"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, Github, ExternalLink, Cpu, Target, Layout } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import ProjectLiveFeed from "./ProjectLiveFeed";

export type ProjectProps = {
    title: string;
    description: string;
    longDescription?: string;
    objective: string;
    image: string;
    stack: string[];
    github?: string;
    demo?: string;
    category?: string;
};

export default function ProjectCard({ title, description, longDescription, objective, image, stack, github, demo, category }: ProjectProps) {
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
                    <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/40 to-background z-10" />
                    <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-transparent hidden md:block z-10" />
                </motion.div>

                {/* Return Button */}
                <motion.button
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    onClick={() => router.back()}
                    className="absolute top-12 left-6 md:left-12 z-50 flex items-center gap-3 px-8 py-4 rounded-full bg-background/40 backdrop-blur-3xl border border-white/10 text-white font-black text-xs uppercase tracking-widest hover:bg-secondary hover:text-background transition-all duration-500 group shadow-2xl shadow-black/60"
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
                            className="relative"
                        >
                            <div className="absolute -inset-10 bg-background/20 backdrop-blur-sm rounded-[4rem] -z-10 hidden md:block" />
                            <h2 className="text-secondary font-black tracking-[0.4em] uppercase text-[10px] mb-4 flex items-center gap-4">
                                <span className="w-12 h-[2px] bg-secondary rounded-full" />
                                {category || "PROJET SIGNATURE"}
                            </h2>
                            <h1 className="text-4xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-8 bg-mask-text py-2 drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]">
                                {title.toUpperCase()}
                            </h1>
                            <div className="flex flex-wrap gap-6">
                                {github && (
                                    <Link
                                        href={github}
                                        target="_blank"
                                        className="flex items-center gap-3 px-10 py-5 rounded-full bg-white text-black font-black text-xs uppercase tracking-[0.2em] hover:bg-secondary transition-all duration-500 group shadow-2xl shadow-black/80"
                                    >
                                        <Github size={18} />
                                        <span>Explorer Source</span>
                                    </Link>
                                )}
                                {demo && demo !== "#" && (
                                    <Link
                                        href={demo}
                                        target="_blank"
                                        className="flex items-center gap-3 px-10 py-5 rounded-full bg-secondary/10 backdrop-blur-2xl border border-secondary/30 text-secondary font-black text-xs uppercase tracking-[0.2em] hover:bg-secondary hover:text-black transition-all duration-500 shadow-2xl shadow-secondary/10"
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
                className="max-w-7xl mx-auto px-6 -mt-12 md:-mt-16 relative z-30 grid grid-cols-1 lg:grid-cols-3 gap-12"
            >
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-12">
                    <motion.div variants={itemVariants} className="p-8 md:p-14 rounded-[3.5rem] card-glass border-white/5 shadow-2xl transition-transform hover:scale-[1.01]">
                        <div className="flex items-center gap-6 mb-10">
                            <div className="p-4 rounded-2xl bg-primary/10 text-primary border border-primary/20 shadow-lg shadow-primary/5">
                                <Layout size={28} />
                            </div>
                            <h2 className="text-4xl font-black tracking-tight">Vision du Projet</h2>
                        </div>
                        <p className="text-2xl text-foreground font-medium leading-relaxed mb-10 border-l-8 border-primary pl-8 italic">
                            {description}
                        </p>
                        {longDescription && (
                            <div className="space-y-8 text-foreground/80 text-xl leading-relaxed font-light">
                                {longDescription.split('\n').map((para, i) => (
                                    <p key={i}>{para}</p>
                                ))}
                            </div>
                        )}
                    </motion.div>

                    <motion.div variants={itemVariants} className="p-8 md:p-14 rounded-[3.5rem] card-glass border-white/5 shadow-2xl transition-transform hover:scale-[1.01]">
                        <div className="flex items-center gap-6 mb-10">
                            <div className="p-4 rounded-2xl bg-secondary/10 text-secondary border border-secondary/20 shadow-lg shadow-secondary/5">
                                <Target size={28} />
                            </div>
                            <h2 className="text-4xl font-black tracking-tight">Objectif Principal</h2>
                        </div>
                        <p className="text-foreground/90 text-xl leading-relaxed font-light">
                            {objective}
                        </p>
                    </motion.div>
                </div>

                {/* Sidebar */}
                <div className="space-y-8">
                    <motion.div variants={itemVariants} className="p-10 rounded-[3rem] card-glass border-white/5 shadow-2xl sticky top-32">
                        <div className="flex items-center gap-4 mb-10">
                            <div className="p-4 rounded-2xl bg-accent/10 text-accent border border-accent/20">
                                <Cpu size={28} />
                            </div>
                            <h2 className="text-2xl font-black tracking-tight">Tech Stack</h2>
                        </div>
                        <div className="flex flex-wrap gap-4 mb-10">
                            {stack.map((tech) => (
                                <span
                                    key={tech}
                                    className="px-5 py-3 bg-white/5 border border-white/10 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] text-foreground/70 hover:border-primary/50 hover:text-primary transition-all duration-300 cursor-default"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        {/* Simulated Live Feed */}
                        <ProjectLiveFeed category={category} />
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
}