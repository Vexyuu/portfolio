// src/app/projects/page.tsx
"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Fuse from "fuse.js";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
    const [filter, setFilter] = useState("all");
    const [sort, setSort] = useState("recent");
    const [search, setSearch] = useState("");
    const [activeCategory, setActiveCategory] = useState("all");
    const [visibleCount, setVisibleCount] = useState(9);

    const categories = ["all", "IA", "Web", "Mobile", "Outils"];

    // Fuse.js setup
    const fuse = new Fuse(projects, {
        keys: ["title", "description", "category"],
        threshold: 0.3, // fuzzy strength
    });

    // Recherche avancée avec fuse.js
    const searchResults = search.trim()
        ? fuse.search(search).map((res) => res.item)
        : projects;

    // Filtrage
    const filtered = useMemo(() => {
        let arr = [...searchResults];

        if (filter === "finished") arr = arr.filter((p) => p.isFinite);
        if (filter === "progress") arr = arr.filter((p) => !p.isFinite);

        if (activeCategory !== "all") {
            arr = arr.filter((p) => p.category === activeCategory);
        }

        return arr;
    }, [searchResults, filter, activeCategory]);

    // Tri
    const sorted = useMemo(() => {
        let arr = [...filtered];

        if (sort === "recent") arr.sort((a, b) => b.year - a.year);
        if (sort === "old") arr.sort((a, b) => a.year - b.year);
        if (sort === "az") arr.sort((a, b) => a.title.localeCompare(b.title));
        if (sort === "za") arr.sort((a, b) => b.title.localeCompare(a.title));

        return arr;
    }, [sort, filtered]);

    const displayed = sorted.slice(0, visibleCount);
    const count = sorted.length;

    return (
        <section className="py-20 px-6 bg-background text-foreground">
            <div className="max-w-6xl mx-auto">

                <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">
                    Tous mes projets
                </h1>

                <p className="text-muted-foreground text-center mb-12">
                    {count} projets trouvés
                </p>

                {/* --- CONTROLES --- */}
                <div className="flex flex-wrap justify-center gap-4 mb-10">

                    {/* Search */}
                    <input
                        type="text"
                        placeholder="Recherche avancée..."
                        className="bg-card border border-border px-3 py-2 rounded-md w-64"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />

                    {/* Statut */}
                    <select
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                        className="bg-card border border-border px-3 py-2 rounded-md"
                    >
                        <option value="all">Tous</option>
                        <option value="progress">En cours</option>
                        <option value="finished">Finis</option>
                    </select>

                    {/* Tri */}
                    <select
                        value={sort}
                        onChange={(e) => setSort(e.target.value)}
                        className="bg-card border border-border px-3 py-2 rounded-md"
                    >
                        <option value="recent">Plus récents</option>
                        <option value="old">Plus anciens</option>
                        <option value="az">A → Z</option>
                        <option value="za">Z → A</option>
                    </select>
                </div>

                {/* TAGS */}
                <div className="flex justify-center gap-3 mb-10 flex-wrap">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-4 py-1 rounded-full text-sm border transition ${activeCategory === cat
                                    ? "bg-primary text-background"
                                    : "bg-card border-border hover:bg-muted"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* --- MASONRY LAYOUT --- */}
                <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
                    <AnimatePresence>
                        {displayed.map((project) => (
                            <motion.div
                                key={project.title}
                                layout
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.25 }}
                                className="break-inside-avoid card-glass card-shine rounded-lg overflow-hidden shadow-lg hover:scale-[1.01] transition"
                            >
                                <ParallaxImage
                                    src={project.image}
                                    alt={project.title}
                                />

                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-primary mb-2">
                                        {project.title}
                                    </h3>

                                    <span className="text-xs text-muted-foreground block mb-2">
                                        {project.category} • {project.year}
                                    </span>

                                    <p className="text-muted mb-4">
                                        {project.description}
                                    </p>

                                    <div className="flex justify-between text-sm">
                                        <Link href={project.more} className="text-accent hover:underline">
                                            En savoir plus
                                        </Link>

                                        <Link href={project.link} target="_blank" className="text-accent hover:underline">
                                            GitHub
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* PAGINATION */}
                {visibleCount < count && (
                    <div className="text-center mt-12">
                        <button
                            onClick={() => setVisibleCount(visibleCount + 6)}
                            className="px-6 py-2 bg-primary text-background rounded-md hover:opacity-90 transition"
                        >
                            Voir plus
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}

/* --- IMAGE PARALLAX COMPONENT --- */
function ParallaxImage({ src, alt }: { src: string; alt: string }) {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 300], [0, -30]);

    return (
        <motion.div className="relative w-full h-56 overflow-hidden">
            <motion.div style={{ y }}>
                <Image
                    src={src}
                    alt={alt}
                    width={600}
                    height={400}
                    className="object-cover w-full h-56"
                />
            </motion.div>
        </motion.div>
    );
}
