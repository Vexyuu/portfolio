"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Search } from "lucide-react";
import Fuse from "fuse.js";
import { projects } from "@/data/projects";
import TiltCard from "@/components/TiltCard";
import Button from "@/components/ui/Button";

export default function ProjectsPage() {
    const [filter, setFilter] = useState("all");
    const [sort, setSort] = useState("recent");
    const [search, setSearch] = useState("");
    const [activeCategory, setActiveCategory] = useState("all");
    const [visibleCount, setVisibleCount] = useState(9);

    const categories = ["all", "IA", "Web", "Mobile", "Outils"];

    // Fuse.js recherche avancée
    const fuse = new Fuse(projects, {
        keys: ["title", "description", "category"],
        threshold: 0.3,
    });

    const searchResults = search.trim()
        ? fuse.search(search).map((res) => res.item)
        : projects;

    // --- FILTRAGE ---
    const filtered = useMemo(() => {
        return searchResults
            .filter((p) => {
                if (filter === "finished") return p.isFinite;
                if (filter === "progress") return !p.isFinite;
                return true;
            })
            .filter((p) => activeCategory === "all" || p.category === activeCategory);
    }, [searchResults, filter, activeCategory]);

    // --- TRI ---
    const sorted = useMemo(() => {
        return [...filtered].sort((a, b) => {
            if (sort === "recent") return b.year - a.year;
            if (sort === "old") return a.year - b.year;
            if (sort === "az") return a.title.localeCompare(b.title);
            if (sort === "za") return b.title.localeCompare(a.title);
            return 0;
        });
    }, [sort, filtered]);

    const displayed = sorted.slice(0, visibleCount);
    const count = sorted.length;

    return (
        <section className="py-32 px-6 bg-background text-foreground relative overflow-hidden min-h-screen">
            <div className="max-w-7xl mx-auto relative z-10">

                {/* --- HEADER --- */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-secondary font-black tracking-[0.4em] uppercase text-xs mb-4">Showcase complet</h2>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 bg-mask-text py-2">
                        TOUS MES PROJETS.
                    </h1>
                    <div className="w-24 h-[2px] bg-secondary mx-auto rounded-full mb-8 shadow-[0_0_15px_rgba(217,119,6,0.5)]" />
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg font-medium tracking-tight">
                        Explorez l&apos;univers de mes créations, du développement Web à l&apos;Intelligence Artificielle.
                    </p>
                </motion.div>

                {/* --- CONTROLES (PEPS STYLE) --- */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-6 mb-12 p-10 card-glass rounded-[3.5rem]"
                >
                    {/* Search Field */}
                    <div className="relative w-full md:w-96 group">
                        <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-secondary transition-colors" size={20} />
                        <input
                            type="text"
                            placeholder="RECHERCHER UN PROJET..."
                            className="w-full bg-background/50 border border-white/5 text-foreground pl-14 pr-8 py-5 rounded-full focus:outline-none focus:ring-2 focus:ring-secondary/40 focus:border-secondary/40 transition-all placeholder:text-muted-foreground/30 text-xs font-black uppercase tracking-widest"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>

                    <div className="flex gap-4 w-full md:w-auto">
                        <select
                            value={filter}
                            onChange={(e) => setFilter(e.target.value)}
                            className="flex-1 md:w-48 bg-background/50 border border-white/5 text-foreground px-8 py-5 rounded-full focus:outline-none focus:ring-2 focus:ring-secondary/40 transition-all cursor-pointer text-xs font-black uppercase tracking-widest appearance-none text-center"
                        >
                            <option value="all">Statuts</option>
                            <option value="progress">En cours</option>
                            <option value="finished">Finis</option>
                        </select>

                        <select
                            value={sort}
                            onChange={(e) => setSort(e.target.value)}
                            className="flex-1 md:w-48 bg-background/50 border border-white/5 text-foreground px-8 py-5 rounded-full focus:outline-none focus:ring-2 focus:ring-secondary/40 transition-all cursor-pointer text-xs font-black uppercase tracking-widest appearance-none text-center"
                        >
                            <option value="recent">Plus récents</option>
                            <option value="old">Plus anciens</option>
                            <option value="az">A → Z</option>
                            <option value="za">Z → A</option>
                        </select>
                    </div>
                </motion.div>

                {/* CATEGORY TAGS (NEON PILLS) */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="flex justify-center gap-4 mb-20 flex-wrap"
                >
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-10 py-4 rounded-full text-xs font-black uppercase tracking-widest transition-all duration-500 border-2 ${activeCategory === cat
                                ? "bg-secondary border-secondary text-background shadow-[0_0_30px_rgba(217,119,6,0.3)] scale-110"
                                : "bg-white/5 border-white/5 text-muted-foreground hover:border-secondary/50 hover:text-foreground hover:bg-white/10"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </motion.div>

                <p className="text-muted-foreground text-center mb-12 text-sm font-medium tracking-wide italic">
                    {count} pépites dénichées dans mes archives
                </p>

                {/* --- PROJECTS GRID --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence mode="popLayout">
                        {displayed.map((project, index) => (
                            <motion.div
                                key={project.title}
                                layout
                                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.05,
                                    type: "spring",
                                    stiffness: 100,
                                    damping: 20
                                }}
                            >
                                <TiltCard className="h-full">
                                    <div className="card-glass card-shine rounded-[2.5rem] overflow-hidden h-full flex flex-col group relative border-muted-foreground/5 scale-[0.98] hover:scale-100 transition-transform duration-500">
                                        <div className="relative w-full h-64 overflow-hidden">
                                            <Image
                                                src={project.image}
                                                alt={project.title}
                                                fill
                                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />

                                            {/* Badge Statut */}
                                            <div className="absolute top-6 right-6">
                                                {project.isFinite ? (
                                                    <span className="bg-green-500/20 text-green-400 text-[10px] uppercase font-black px-4 py-1.5 rounded-full backdrop-blur-xl border border-green-500/30">Terminé</span>
                                                ) : (
                                                    <span className="bg-amber-500/20 text-amber-400 text-[10px] uppercase font-black px-4 py-1.5 rounded-full backdrop-blur-xl border border-amber-500/30">En cours</span>
                                                )}
                                            </div>
                                        </div>

                                        <div className="p-10 flex-grow flex flex-col relative z-10">
                                            <div className="flex items-center gap-2 mb-4">
                                                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary">
                                                    {project.category}
                                                </span>
                                                <span className="w-1 h-1 rounded-full bg-muted-foreground/30" />
                                                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">
                                                    {project.year}
                                                </span>
                                            </div>

                                            <h3 className="text-2xl font-black text-foreground mb-4 leading-none tracking-tighter group-hover:text-primary transition-colors duration-300">
                                                {project.title}
                                            </h3>

                                            <p className="text-muted-foreground text-sm leading-relaxed mb-8 flex-grow">
                                                {project.description}
                                            </p>

                                            <div className="flex items-center gap-4 mt-auto">
                                                <Button
                                                    href={project.more}
                                                    variant="primary"
                                                    size="sm"
                                                    className="px-8"
                                                >
                                                    Détails
                                                </Button>
                                                <Button
                                                    href={project.link}
                                                    target="_blank"
                                                    variant="outline"
                                                    size="sm"
                                                    className="px-4"
                                                    icon={<Search size={16} />}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </TiltCard>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* --- PAGINATION (SIGNATURE STYLE) --- */}
                {visibleCount < count && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center mt-32"
                    >
                        <Button
                            variant="secondary"
                            size="lg"
                            onClick={() => setVisibleCount(visibleCount + 6)}
                            className="px-16"
                        >
                            Charger plus de projets
                        </Button>
                    </motion.div>
                )}
            </div>
        </section>
    );
}
