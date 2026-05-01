"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import Button from "./ui/Button";
import Link from "next/link";

export default function Projects() {
    return (
        <section id="projects" className="py-32 px-6 bg-background text-foreground relative w-full flex flex-col items-center pb-40">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="max-w-7xl w-full"
            >
                <div className="flex flex-col items-center text-center mb-24 gap-6">
                    <h2 className="text-xs uppercase tracking-[0.4em] font-black text-secondary px-6 py-2 bg-secondary/10 border border-secondary/20 rounded-full inline-block backdrop-blur-md">Showcase</h2>
                    <h3 className="text-4xl md:text-6xl font-black tracking-tighter">
                        <span className="bg-mask-text">PROJETS SÉLECTIONNÉS</span>
                    </h3>
                    <Link href="/projects" className="group flex items-center gap-3 text-secondary font-black text-xs uppercase tracking-[0.4em] hover:scale-105 transition-all duration-500 mt-4">
                        Explorer tous les projets <span className="text-xl">→</span>
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 h-full md:h-[1000px]">
                    {projects.slice(0, 4).map((project, index) => {
                        const bentoSpans = [
                            "md:col-span-2 md:row-span-1", // 1st
                            "md:col-span-1 md:row-span-2", // 2nd
                            "md:col-span-1 md:row-span-1", // 3rd
                            "md:col-span-1 md:row-span-1", // 4th
                        ];

                        return (
                            <motion.div
                                key={project.title}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className={`group relative h-full min-h-[300px] overflow-hidden rounded-3xl border border-foreground/10 bg-foreground/5 backdrop-blur-md ${bentoSpans[index] || ""}`}
                            >
                                <div className="absolute inset-0 z-0">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />
                                </div>

                                <div className="absolute inset-0 p-8 flex flex-col justify-end z-10">
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className={`text-[10px] uppercase tracking-widest font-black px-3 py-1 rounded-full backdrop-blur-md border ${project.isFinite
                                            ? "bg-green-500/20 text-green-600 dark:text-green-400 border-green-500/30"
                                            : "bg-amber-500/20 text-amber-600 dark:text-amber-400 border-amber-500/30"
                                            }`}>
                                            {project.isFinite ? "Fini" : "En cours"}
                                        </span>
                                        <span className="text-[10px] uppercase tracking-widest font-black px-3 py-1 rounded-full bg-foreground/10 text-foreground/70 border border-foreground/20">
                                            {project.year}
                                        </span>
                                    </div>

                                    <h3 className="text-2xl md:text-3xl font-black text-foreground mb-2 leading-tight">{project.title}</h3>
                                    <p className="text-foreground/60 text-sm mb-6 line-clamp-2 max-w-sm">
                                        {project.description}
                                    </p>

                                    <div className="flex gap-4 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 translate-y-0 md:translate-y-4 md:group-hover:translate-y-0 mt-2 md:mt-0">
                                        <Button href={project.more} variant="primary" size="sm">
                                            Détails
                                        </Button>
                                        <Button href={project.link} target="_blank" variant="glass" size="sm">
                                            {project.link.includes("github.com") ? "GitHub" : "Visiter"}
                                        </Button>
                                    </div>
                                </div>

                                <div className="absolute top-6 right-6 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="w-10 h-10 rounded-full bg-foreground/10 backdrop-blur-md flex items-center justify-center border border-foreground/20">
                                        <span className="text-foreground text-xl">→</span>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </motion.div>
        </section>
    );
}