// src/components/CareerContent.tsx
"use client";

import { motion } from "framer-motion";
import {
    GraduationCap,
    Briefcase,
    Calendar,
    Download,
    ExternalLink,
} from "lucide-react";
import Link from "next/link";
import { timelineData } from "@/data/career";

export default function CareerContent() {
    return (
        <main className="max-w-6xl mx-auto px-4 py-20 cursor-default">
            <section id="section-parcours">
                {/* Header Section */}
                <div className="text-center mb-24">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-black tracking-tighter py-4"
                    >
                        <span className="bg-mask-text">MON PARCOURS.</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mt-4"
                    >
                        Une progression constante entre excellence académique et expériences concrètes sur le terrain.
                    </motion.p>

                    {/* CV Download Buttons */}
                    <div className="flex flex-wrap justify-center gap-4 mt-10">
                        <Link
                            href="/data/CV_Alternance_Sorbonne_2026_FR.pdf"
                            target="_blank"
                            className="group flex items-center gap-3 px-6 py-3 rounded-xl bg-secondary/10 border border-secondary/20 text-secondary font-bold hover:bg-secondary hover:text-white transition-all duration-300"
                        >
                            <Download size={20} className="group-hover:bounce" />
                            <span>CV ALTERNANCE 2026</span>
                        </Link>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mt-16">
                    {/* Parcours Scolaire */}
                    <div className="flex-1">
                        <div className="flex items-center gap-4 mb-10">
                            <div className="p-2 rounded-lg bg-primary/10">
                                <GraduationCap className="text-primary" size={24} />
                            </div>
                            <h2 className="text-xl font-black uppercase tracking-[0.3em] text-primary">Formation</h2>
                        </div>

                        <div className="relative border-l-2 border-primary/10 ml-5 space-y-12">
                            {timelineData.filter(item => item.type === "education").map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className="relative pl-10"
                                >
                                    {/* Bullet node */}
                                    <div className={`absolute -left-[11px] top-0 w-5 h-5 rounded-full border-4 border-background shadow-lg transition-all duration-500 ${item.isCurrent ? "bg-primary ring-4 ring-primary/20 scale-125" : "bg-muted-foreground/30"
                                        }`} />

                                    <div className={`card-glass p-6 transition-all duration-500 hover:border-primary/30 ${item.isCurrent ? "border-primary/40 bg-primary/[0.03] shadow-[0_0_30px_rgba(var(--color-primary),0.05)]" : ""
                                        }`}>
                                        {item.isCurrent && (
                                            <div className="flex items-center gap-2 mb-3">
                                                <span className="relative flex h-2 w-2">
                                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                                                </span>
                                                <span className="px-2 py-0.5 rounded-md bg-primary/20 border border-primary/30 text-[10px] font-black uppercase tracking-widest text-primary shadow-[0_0_15px_rgba(var(--color-primary),0.1)]">
                                                    En cours
                                                </span>
                                            </div>
                                        )}
                                        <div className="flex items-center gap-2 mb-2">
                                            <Calendar size={12} className="text-primary/60" />
                                            <span className="text-xs font-bold text-muted-foreground uppercase tracking-tight">{item.period}</span>
                                        </div>
                                        <h3 className="text-xl font-black mb-1">{item.title}</h3>
                                        <p className="text-sm font-bold text-foreground/80 mb-4">{item.organization}</p>
                                        <div className="space-y-2">
                                            {item.description.map((desc, idx) => (
                                                <div key={idx} className="flex gap-3">
                                                    <div className="mt-2 w-1 h-1 rounded-full bg-primary/30 shrink-0" />
                                                    <p className="text-sm text-muted-foreground leading-relaxed font-medium">{desc}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Parcours Pro */}
                    <div className="flex-1 mt-16 lg:mt-0">
                        <div className="flex items-center gap-4 mb-10">
                            <div className="p-2 rounded-lg bg-secondary/10">
                                <Briefcase className="text-secondary" size={24} />
                            </div>
                            <h2 className="text-xl font-black uppercase tracking-[0.3em] text-secondary">Expérience</h2>
                        </div>

                        <div className="relative border-l-2 border-secondary/10 ml-5 space-y-12">
                            {timelineData.filter(item => item.type === "work").map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className="relative pl-10"
                                >
                                    {/* Bullet node */}
                                    <div className={`absolute -left-[11px] top-0 w-5 h-5 rounded-full border-4 border-background shadow-lg transition-all duration-500 ${item.isCurrent ? "bg-secondary ring-4 ring-secondary/20 scale-125" : "bg-muted-foreground/30"
                                        }`} />

                                    <div className={`card-glass p-6 transition-all duration-500 hover:border-secondary/30 ${item.isCurrent ? "border-secondary/40 bg-secondary/[0.02] shadow-[0_0_30px_rgba(217,119,6,0.05)]" : ""
                                        }`}>
                                        {item.isCurrent && (
                                            <div className="flex items-center gap-2 mb-3">
                                                <span className="relative flex h-2 w-2">
                                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
                                                </span>
                                                <span className="px-2 py-0.5 rounded-md bg-secondary/20 border border-secondary/30 text-[10px] font-black uppercase tracking-widest text-secondary shadow-[0_0_15px_rgba(217,119,6,0.1)]">
                                                    Poste actuel
                                                </span>
                                            </div>
                                        )}
                                        <div className="flex items-center gap-2 mb-2">
                                            <Calendar size={12} className="text-secondary/60" />
                                            <span className="text-xs font-bold text-muted-foreground uppercase tracking-tight">{item.period}</span>
                                        </div>
                                        <h3 className="text-xl font-black mb-1">{item.title}</h3>
                                        <p className="text-sm font-bold text-foreground/80 mb-4">{item.organization}</p>
                                        <div className="space-y-3 mb-5">
                                            {item.description.map((desc, idx) => (
                                                <div key={idx} className="flex gap-3">
                                                    <div className="mt-2 w-1 h-1 rounded-full bg-secondary/30 shrink-0" />
                                                    <p className="text-sm text-muted-foreground leading-relaxed font-medium">{desc}</p>
                                                </div>
                                            ))}
                                        </div>
                                        {item.skills && (
                                            <div className="flex flex-wrap gap-2 pt-4 border-t border-muted/10">
                                                {item.skills.map((skill, idx) => (
                                                    <span key={idx} className="px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest bg-secondary/10 text-secondary border border-secondary/20 rounded">
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Final Call to action */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-32 text-center p-12 card-glass border-dashed border-2 relative overflow-hidden group/cta"
                >
                    <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 blur-[100px] rounded-full transition-transform group-hover/cta:scale-150 duration-1000" />
                    <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-secondary/10 blur-[100px] rounded-full transition-transform group-hover/cta:scale-150 duration-1000" />

                    <h2 className="text-4xl font-black mb-4 bg-mask-text">ET LA SUITE S&apos;ÉCRIT ICI...</h2>
                    <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-10">
                        Toujours à la recherche de nouveaux défis technologiques et de projets stimulants en ingénierie logicielle.
                    </p>
                    <Link
                        href="/#contact"
                        className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-foreground text-background font-black hover:gap-6 transition-all uppercase tracking-[0.2em] shadow-2xl hover:shadow-primary/20"
                    >
                        <span>Me contacter</span>
                        <ExternalLink size={20} />
                    </Link>
                </motion.div>
            </section>
        </main>
    );
}

