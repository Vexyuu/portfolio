"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import SpotlightCard from "./SpotlightCard";
import { skills } from "@/data/skills";
import { projects } from "@/data/projects";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

export default function Skills() {
    const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

    return (
        <section id="skills" className="py-32 px-6 bg-background text-foreground relative overflow-hidden w-full flex flex-col items-center">
            {/* Background Glows */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="max-w-7xl w-full relative z-10"
            >
                {/* Header Section */}
                <div className="flex flex-col items-center text-center mb-24 gap-6">
                    <motion.h2 
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="text-xs uppercase tracking-[0.4em] font-black text-secondary px-6 py-2 bg-secondary/10 border border-secondary/20 rounded-full inline-block backdrop-blur-md"
                    >
                        Skills Hub
                    </motion.h2>
                    <h3 className="text-4xl md:text-7xl font-black tracking-tighter">
                        <span className="bg-mask-text">ARSENAL TECHNIQUE</span>
                    </h3>
                    <p className="text-muted-foreground max-w-2xl font-medium text-lg tracking-tight mt-4">
                        Une sélection rigoureuse de technologies pour transformer des idées complexes en solutions digitales élégantes.
                    </p>
                </div>

                {/* Categories Filter (Visual only for now) */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {["Frontend", "Backend", "AI", "Tools"].map((cat) => (
                        <span key={cat} className="text-[10px] uppercase font-black tracking-widest text-muted-foreground/40 border border-foreground/5 px-4 py-1.5 rounded-full">
                            {cat}
                        </span>
                    ))}
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 md:auto-rows-[minmax(140px,auto)]">
                    {skills.map((skill, index) => {
                        const linkedProjects = projects.filter(p =>
                            p.stack.some(s => s.toLowerCase().includes(skill.id.toLowerCase()) || skill.name.toLowerCase().includes(s.toLowerCase()))
                        );

                        // Bento size logic - very selective
                        const isMain = skill.id === "nextjs";
                        const isWide = skill.id === "javascript" || skill.id === "html";

                        return (
                            <motion.div
                                key={skill.id}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.03 }}
                                className={`group relative h-full ${isMain ? "md:col-span-2 md:row-span-2" : isWide ? "md:col-span-2" : "md:col-span-1"
                                    }`}
                            >
                                <SpotlightCard
                                    className="card-glass border border-foreground/5 h-full flex flex-col p-5 md:p-6 hover:border-secondary/30 transition-all duration-500 rounded-[2rem] relative overflow-hidden"
                                >
                                    {/* Skill Header */}
                                    <div className="flex items-center justify-between gap-3">
                                        <div className="relative w-9 h-9 flex items-center justify-center bg-foreground/5 rounded-lg p-2 shadow-inner group-hover:bg-secondary/5 transition-colors duration-500">
                                            <Image
                                                src={skill.icon}
                                                alt={skill.name}
                                                width={32}
                                                height={32}
                                                className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500"
                                            />
                                        </div>
                                        {isMain && (
                                            <div className="px-2 py-0.5 bg-secondary/10 border border-secondary/20 rounded-full">
                                                <span className="text-[6px] font-black uppercase tracking-widest text-secondary">Mastery</span>
                                            </div>
                                        )}
                                    </div>

                                    {/* Skill Info */}
                                    <div className="mt-4">
                                        <h4 className="text-sm md:text-base font-black tracking-tight text-foreground leading-none">{skill.name}</h4>
                                        <p className="text-[10px] text-muted-foreground font-medium mt-1.5 leading-snug line-clamp-2">
                                            {skill.description}
                                        </p>
                                    </div>

                                    {/* Linked Projects (Minimalist Static) */}
                                    {linkedProjects.length > 0 && (
                                        <div className="mt-auto pt-3 flex flex-wrap gap-1.5">
                                            {linkedProjects.slice(0, 3).map(p => (
                                                <Link
                                                    key={p.id}
                                                    href={p.more}
                                                    className="flex items-center gap-1 text-muted-foreground/40 hover:text-secondary transition-colors"
                                                    title={`Projet : ${p.title}`}
                                                >
                                                    <ExternalLink size={8} />
                                                    <span className="text-[8px] font-bold truncate max-w-[60px]">{p.title}</span>
                                                </Link>
                                            ))}
                                        </div>
                                    )}

                                    {/* Background Decor */}
                                    <span className="absolute -bottom-1 -right-1 text-4xl font-black text-foreground/[0.015] pointer-events-none select-none italic group-hover:text-secondary/[0.03] transition-colors duration-700">
                                        {index + 1}
                                    </span>
                                </SpotlightCard>
                            </motion.div>
                        );
                    })}
                </div>
            </motion.div>
        </section>
    );
}