"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import TiltCard from "./TiltCard";

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
                    <h3 className="text-5xl md:text-8xl font-black tracking-tighter">
                        <span className="bg-mask-text">PROJETS SÉLECTIONNÉS</span>
                    </h3>
                    <Link href="/projects" className="group flex items-center gap-3 text-secondary font-black text-xs uppercase tracking-[0.4em] hover:scale-105 transition-all duration-500 mt-4">
                        Explorer tout l&apos;univers <span className="text-xl">→</span>
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.slice(0, 3).map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className={index === 0 ? "lg:col-span-2" : ""}
                        >
                            <TiltCard>
                                <div className="card-glass card-shine overflow-hidden h-full flex flex-col group relative rounded-[2.5rem]">
                                    <div className="relative w-full h-[300px] md:h-[400px] overflow-hidden">
                                         <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60" />
                                    </div>

                                    <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                                        <div className="flex items-center gap-3 mb-4">
                                            {project.isFinite ? (
                                                <span className="bg-green-500/20 text-green-400 text-[10px] uppercase tracking-widest font-black px-3 py-1 rounded-full backdrop-blur-md border border-green-500/30">Fini</span>
                                            ) : (
                                                <span className="bg-amber-500/20 text-amber-400 text-[10px] uppercase tracking-widest font-black px-3 py-1 rounded-full backdrop-blur-md border border-amber-500/30">En cours</span>
                                            )}
                                        </div>

                                        <h3 className="text-3xl font-black text-foreground mb-2 leading-tight">{project.title}</h3>
                                        <p className="text-muted-foreground text-sm mb-6 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">{project.description}</p>

                                        <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                                             <Link href={project.more} className="px-6 py-2 rounded-full bg-foreground text-background font-bold text-sm hover:opacity-90 transition-opacity">
                                                Détails
                                            </Link>
                                            <Link href={project.link} target="_blank" className="px-6 py-2 rounded-full bg-foreground/10 backdrop-blur-md text-foreground border border-foreground/20 font-bold text-sm hover:bg-foreground/20 transition-colors">
                                                GitHub
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </TiltCard>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}