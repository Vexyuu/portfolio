// src/app/projects/page.tsx
"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
    const [filter, setFilter] = useState("all");
    const [sort, setSort] = useState("recent");
    const [search, setSearch] = useState("");
    const [visibleCount, setVisibleCount] = useState(6);
    const [activeCategory, setActiveCategory] = useState("all");

    // Listes des catégories existantes
    const categories = ["all", "IA", "Web", "Mobile", "Outils"];

    // --- FILTRES ---
    const filtered = useMemo(() => {
        let arr = [...projects];

        // Filtre par statut (fini / pas fini)
        if (filter === "finished") {
            arr = arr.filter((p) => p.isFinite);
        } else if (filter === "progress") {
            arr = arr.filter((p) => !p.isFinite);
        }

        // Filtre par catégorie
        if (activeCategory !== "all") {
            arr = arr.filter((p) => p.category === activeCategory);
        }

        // Recherche
        if (search.trim() !== "") {
            arr = arr.filter((p) =>
                p.title.toLowerCase().includes(search.toLowerCase())
            );
        }

        return arr;
    }, [filter, activeCategory, search]);

    // --- TRI ---
    const sorted = useMemo(() => {
        let arr = [...filtered];

        if (sort === "az") arr.sort((a, b) => a.title.localeCompare(b.title));
        if (sort === "za") arr.sort((a, b) => b.title.localeCompare(a.title));
        if (sort === "recent") arr.sort((a, b) => b.year - a.year);
        if (sort === "old") arr.sort((a, b) => a.year - b.year);

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

                {/* --- CONTROLES : Recherche + Filtres + Tri --- */}
                <div className="flex flex-wrap justify-center gap-4 mb-10">

                    {/* Recherche */}
                    <input
                        type="text"
                        placeholder="Rechercher un projet..."
                        className="bg-card border border-border px-3 py-2 rounded-md w-64"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />

                    {/* Filtre statut */}
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
                        <option value="az">Titre A → Z</option>
                        <option value="za">Titre Z → A</option>
                    </select>
                </div>

                {/* --- TAGS / CHIPS --- */}
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

                {/* --- GRILLE DES PROJETS AVEC ANIMATION --- */}
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    <AnimatePresence>
                        {displayed.map((project) => (
                            <motion.div
                                key={project.title}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.25 }}
                                className="card-glass card-shine overflow-hidden hover:scale-105 transition-transform duration-300"
                            >
                                <Link href={project.more}>
                                    <div className="relative w-full h-48 md:h-56">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </Link>

                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-primary mb-2">
                                        {project.title}
                                    </h3>

                                    <span
                                        className={`inline-block text-xs font-semibold px-2 py-1 rounded-full mb-2 ${project.isFinite
                                                ? "bg-accent text-background"
                                                : "bg-secondary text-background"
                                            }`}
                                    >
                                        {project.isFinite ? "Fini" : "En cours"}
                                    </span>

                                    <p className="text-muted mb-2">
                                        {project.description}
                                    </p>

                                    <span className="text-xs text-muted-foreground">
                                        Année : {project.year}
                                    </span>

                                    <div className="mt-4 flex justify-between items-center text-sm">
                                        <Link href={project.more} className="text-accent hover:underline">
                                            En savoir plus
                                        </Link>

                                        <div className="flex gap-3">
                                            <Link href={project.link} target="_blank" className="text-accent hover:underline">
                                                GitHub
                                            </Link>

                                            {project.demo && project.isFinite && (
                                                <Link href={project.demo} target="_blank" className="text-accent hover:underline">
                                                    Démo
                                                </Link>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* --- PAGINATION / LOAD MORE --- */}
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

                <div className="text-center mt-12">
                    <Link href="/" className="text-accent hover:underline text-sm">
                        ← Retour à l’accueil
                    </Link>
                </div>
            </div>
        </section>
    );
}
