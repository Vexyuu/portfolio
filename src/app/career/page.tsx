// src/app/career/page.tsx
"use client";
import { motion } from "framer-motion";

export const metadata = {
    title: "Parcours & Carrière - Killian Fievet",
    description: "Découvrez le parcours scolaire et professionnel de Killian Fievet : expériences, stages et alternances en développement web et systèmes d’information.",
    keywords: ["Killian Fievet", "carrière développeur", "expérience professionnelle", "alternance informatique", "développeur web", "portfolio"],
    openGraph: {
        title: "Carrière de Killian Fievet",
        description: "Découvrez mes expériences académiques et professionnelles en informatique.",
        url: "https://vexyuu.github.io/portfolio/career",
        type: "profile",
        images: [
            {
                url: "https://vexyuu.github.io/portfolio/og-career.png",
                width: 1200,
                height: 630,
                alt: "Carrière de Killian Fievet",
            },
        ],
    },
};

export default function Career() {
    const schoolTimeline = [
        {
            icon: "🎓",
            title: "Université Paris 1 Panthéon-Sorbonne",
            place: "Paris",
            date: "2025 - 2026",
            desc: "► Licence MIAGE (Méthodes Informatiques Appliquées à la Gestion des Entreprises)",
        },
        {
            icon: "🎓",
            title: "Prepa Aurlom BTS+",
            place: "Paris",
            date: "2023 - 2025",
            desc: "► BTS SIO (Services Informatiques aux Organisations)",
        },
        {
            icon: "🏫",
            title: "Lycée La Mare Carrée",
            place: "Moissy-Cramayel",
            date: "2020 - 2023",
            desc: "► Baccalauréat Général - Maths & NSI",
        },
        {
            icon: "📘",
            title: "Collège Les Aulnes",
            place: "Combs-la-Ville",
            date: "2016 - 2020",
            desc: "► Brevet National des collèges",
        },
    ];

    const workTimeline = [
        {
            icon: "💻",
            title: "Audiens",
            place: "Alternance Chargé de Projet Systèmes d'Information",
            date: "01 Septembre 2025 - 11 Septembre 2026",
            desc: [
                "► Maintenance et optimisation du site web avec Jahia",
                "► Développement d'outils internes en JavaScript et Java",
            ],
            skills: ["Java", "Jahia", "Maven", "JavaScript", "MySQL", "Gestion de projet SI"],
        },
        {
            icon: "💻",
            title: "Audiens",
            place: "Stage Développeur Web",
            date: "06 Janvier 2025 - 07 Février 2025",
            desc: [
                "► Maintenance et optimisation du site web",
                "► Participation à un hackathon : OCR Tesseract + IA Ollama",
            ],
            skills: ["HTML/CSS", "JavaScript", "PHP", "MySQL", "Python"],
        },
        {
            icon: "🖥️",
            title: "Cogemust",
            place: "Stage Support IT",
            date: "29 Avril 2023 - 06 Juin 2024",
            desc: [
                "► Support et assistance utilisateur",
                "► Gestion du parc réseau informatique",
            ],
            skills: ["Support IT", "Réseau", "Assistance"],
        },
        {
            icon: "📦",
            title: "Cogemust",
            place: "CDD Magasinier",
            date: "13 Décembre 2023 - 29 Avril 2024",
            desc: [
                "► Réorganisation du magasin",
                "► Saisie des stocks via logiciels (Oxalys, Cegid)",
            ],
            skills: ["Logistique", "Stocks", "ERP"],
        },
    ];

    return (
        <main className="max-w-6xl mx-auto px-4 py-16 *:min-h-screen *:flex *:flex-col *:justify-center">
            <section id="section-parcours">
                {/* Titre avec gradient animé */}
                <h1 className="text-5xl font-extrabold text-center mb-16 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent animate-gradient bg-[length:200%_200%]">
                    Mon Parcours
                </h1>

                <div className="flex flex-col md:flex-row gap-12">
                    {/* Parcours scolaire */}
                    <div className="flex-1">
                        <h2 className="text-2xl font-semibold mb-6">📚 Parcours scolaire</h2>
                        <div className="relative border-l-2 border-primary">
                            {schoolTimeline.map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: i * 0.2 }}
                                    className="mb-10 ml-6"
                                >
                                    <div className="absolute flex items-center justify-center w-8 h-8 bg-primary text-white rounded-full -left-4 shadow-md">
                                        {item.icon}
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="font-semibold">{item.title}</p>
                                        <span className="text-sm text-muted-foreground">
                                            {item.place} • {item.date}
                                        </span>
                                    </div>
                                    <p className="mt-2 text-sm">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Parcours professionnel */}
                    <div className="flex-1">
                        <h2 className="text-2xl font-semibold mb-6">💼 Parcours professionnel</h2>
                        <div className="relative border-l-2 border-primary">
                            {workTimeline.map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: i * 0.2 }}
                                    className="mb-10 ml-6"
                                >
                                    <div className="absolute flex items-center justify-center w-8 h-8 bg-primary text-white rounded-full -left-4 shadow-md">
                                        {item.icon}
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="font-semibold">
                                            {item.title} — {item.place}
                                        </p>
                                        <span className="text-sm text-muted-foreground">{item.date}</span>
                                    </div>
                                    <div className="mt-2 text-sm space-y-1">
                                        {item.desc.map((d, idx) => (
                                            <p key={idx}>{d}</p>
                                        ))}
                                    </div>
                                    {/* Badges de compétences */}
                                    <div className="flex flex-wrap gap-2 mt-3">
                                        {item.skills.map((skill, idx) => (
                                            <span
                                                key={idx}
                                                className="px-2 py-1 text-xs font-medium bg-secondary rounded-full shadow-sm"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
