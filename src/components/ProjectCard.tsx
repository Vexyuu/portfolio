"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, Github, ExternalLink, Cpu, Target, Layout } from "lucide-react";
import { useRouter } from "next/navigation";
import Button from "./ui/Button";

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
            {/* --- HERO SECTION --- (REFINED & ÉPURÉ) */}
            <div className="relative w-full h-[55vh] min-h-[450px] overflow-hidden">
                <motion.div
                    initial={{ scale: 1.05, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="absolute inset-0"
                >
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover"
                        priority
                    />
                    {/* Subtle Gradient Overlays */}
                    <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background z-10" />
                    <div className="absolute inset-0 bg-foreground/10 z-0" />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="absolute top-12 left-6 md:left-12 z-50"
                >
                    <Button
                        variant="glass"
                        size="sm"
                        onClick={() => router.back()}
                        icon={<ArrowLeft size={14} />}
                    >
                        Retour
                    </Button>
                </motion.div>

                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 lg:p-24 z-20">
                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter mb-10 bg-mask-text py-1 drop-shadow-xl">
                                {title.toUpperCase()}
                            </h1>

                            <div className="flex flex-wrap gap-4">
                                {github && (
                                    <Button
                                        href={github}
                                        target="_blank"
                                        variant="primary"
                                        icon={<Github size={16} />}
                                    >
                                        Source
                                    </Button>
                                )}
                                {demo && demo !== "#" && (
                                    <Button
                                        href={demo}
                                        target="_blank"
                                        variant="secondary"
                                        icon={<ExternalLink size={16} />}
                                    >
                                        Démo Live
                                    </Button>
                                )}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* --- CONTENT SECTION (MODERN 2-COLUMN) --- */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="max-w-7xl mx-auto px-6 py-20 relative z-30 grid grid-cols-1 lg:grid-cols-12 gap-16"
            >
                {/* Main Content (Left) */}
                <div className="lg:col-span-8 space-y-16">
                    <motion.div variants={itemVariants} className="space-y-8">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
                                <Layout size={20} />
                            </div>
                            <h2 className="text-lg font-black tracking-[0.1em] uppercase">Vision</h2>
                        </div>
                        <div className="space-y-8 text-foreground/80 text-lg font-light leading-relaxed">
                            <p className="text-xl text-foreground font-medium border-l-4 border-primary pl-8 py-2">
                                {description}
                            </p>
                            {longDescription && (
                                <div className="space-y-6 pt-4">
                                    {longDescription.split('\n').map((para, i) => (
                                        <p key={i} className="opacity-80 hover:opacity-100 transition-opacity">{para}</p>
                                    ))}
                                </div>
                            )}
                        </div>
                    </motion.div>

                    <motion.div variants={itemVariants} className="pt-8 border-t border-foreground/5">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary border border-secondary/20">
                                <Target size={20} />
                            </div>
                            <h2 className="text-lg font-black tracking-[0.1em] uppercase">Objectif</h2>
                        </div>
                        <p className="text-foreground/70 text-lg font-light leading-relaxed max-w-3xl">
                            {objective}
                        </p>
                    </motion.div>
                </div>

                {/* Sidebar (Right) */}
                <div className="lg:col-span-4 space-y-12">
                    <motion.div variants={itemVariants} className="p-8 rounded-[2rem] bg-foreground/[0.02] border border-foreground/5 backdrop-blur-sm sticky top-32">
                        {/* Catégorie */}
                        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-secondary/10 border border-secondary/20 backdrop-blur-md mb-8">
                            <div className="w-1.5 h-1.5 rounded-full bg-secondary shadow-[0_0_10px_rgba(217,119,6,0.5)]" />
                            <h2 className="text-secondary font-black tracking-[0.3em] uppercase text-[10px]">
                                {category || "PROJET SIGNATURE"}
                            </h2>
                        </div>

                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent border border-accent/20">
                                <Cpu size={20} />
                            </div>
                            <h2 className="text-sm font-black tracking-[0.1em] uppercase">Technologies</h2>
                        </div>
                        <div className="flex flex-wrap gap-3 mb-8">
                            {stack.map((tech) => (
                                <span
                                    key={tech}
                                    className="px-4 py-2 bg-foreground/5 border border-foreground/10 rounded-xl text-[9px] font-black uppercase tracking-widest text-foreground/60 transition-all hover:border-primary/50 hover:text-primary"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        {/* Simulated Live Feed */}
                        {/* <ProjectLiveFeed category={category} /> */}
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
}