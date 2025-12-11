// src/components/CareerContent.tsx
"use client";
import { motion } from "framer-motion";

export default function CareerContent() {
    const schoolTimeline = [
        { icon: "🎓", title: "Université Paris 1 Panthéon-Sorbonne", place: "Paris", date: "2025 - 2026", desc: "► Licence MIAGE (Méthodes Informatiques Appliquées à la Gestion des Entreprises)" },
        { icon: "🎓", title: "Prepa Aurlom BTS+", place: "Paris", date: "2023 - 2025", desc: "► BTS SIO (Services Informatiques aux Organisations)" },
        { icon: "🏫", title: "Lycée La Mare Carrée", place: "Moissy-Cramayel", date: "2020 - 2023", desc: "► Baccalauréat Général - Maths & NSI" },
        { icon: "📘", title: "Collège Les Aulnes", place: "Combs-la-Ville", date: "2016 - 2020", desc: "► Brevet National des collèges" },
    ];

    const workTimeline = [
        { icon: "💻", title: "Audiens", place: "Alternance Chargé de Projet SI", date: "2025 - 2026", desc: ["► Maintenance et optimisation du site web avec Jahia", "► Développement d'outils internes en JavaScript et Java"], skills: ["Java", "Jahia", "JSP", "JavaScript", "MySQL", "Gestion de projet SI"] },
        { icon: "💻", title: "Audiens", place: "Stage Développeur Web", date: "Janv - Fév 2025", desc: ["► Maintenance du site web", "► Hackathon : OCR Tesseract + IA Ollama"], skills: ["HTML/CSS", "JavaScript", "PHP", "MySQL", "Python"] },
        { icon: "🖥️", title: "Cogemust", place: "Stage Support IT", date: "Avril 2023 - Juin 2024", desc: ["► Support et assistance utilisateur", "► Gestion du parc réseau informatique"], skills: ["Support IT", "Réseau", "Assistance"] },
        { icon: "📦", title: "Cogemust", place: "CDD Magasinier", date: "Déc 2023 - Avril 2024", desc: ["► Réorganisation du magasin", "► Saisie des stocks via logiciels (Oxalys, Cegid)"], skills: ["Logistique", "Stocks", "ERP"] },
    ];

    return (
        <main className="max-w-6xl mx-auto px-4 py-20 cursor-default">
            <section id="section-parcours">
                {/* Titre avec l'animation gradient pour la cohérence */}
                <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-16 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent bg-[length:200%_200%]">
                    Mon Parcours
                </h1>

                <div className="flex flex-col md:flex-row gap-12">
                    {/* Parcours scolaire */}
                    <div className="flex-1">
                        <h2 className="text-2xl font-semibold mb-6 text-primary">📚 Parcours scolaire</h2>
                        <div className="relative border-l-2 border-primary">
                            {schoolTimeline.map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -50 }} // Animation d'entrée latérale
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: i * 0.2 }}
                                    className="mb-10 ml-6"
                                >
                                    {/* Glassmorphism card pour l'événement */}
                                    <div className="card-glass card-shine p-4 transition-all duration-300 hover:shadow-primary/50">
                                        {/* Point de la timeline (Bullet) */}
                                        <div className="absolute flex items-center justify-center w-6 h-6 bg-primary text-white rounded-full -left-[37px] top-1/2 -translate-y-1/2 border-2 border-background shadow-md">
                                            {item.icon}
                                        </div>
                                        <div className="flex flex-col">
                                            <p className="font-semibold text-foreground">{item.title}</p>
                                            <span className="text-sm text-muted">
                                                {item.place} • {item.date}
                                            </span>
                                        </div>
                                        <p className="mt-2 text-sm text-foreground/80">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Parcours pro */}
                    <div className="flex-1">
                        <h2 className="text-2xl font-semibold mb-6 text-secondary">💼 Parcours professionnel</h2>
                        <div className="relative border-l-2 border-secondary">
                            {workTimeline.map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: 50 }} // Animation d'entrée latérale opposée
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: i * 0.2 }}
                                    className="mb-10 ml-6"
                                >
                                    {/* Glassmorphism card pour l'événement */}
                                    <div className="card-glass card-shine p-4 transition-all duration-300 hover:shadow-secondary/50">
                                        {/* Point de la timeline (Bullet) */}
                                        <div className="absolute flex items-center justify-center w-6 h-6 bg-secondary text-background rounded-full -left-[37px] top-1/2 -translate-y-1/2 border-2 border-background shadow-md">
                                            {item.icon}
                                        </div>
                                        <div className="flex flex-col">
                                            <p className="font-semibold text-foreground">{item.title} — <span className="text-secondary">{item.place}</span></p>
                                            <span className="text-sm text-muted">{item.date}</span>
                                        </div>
                                        <div className="mt-2 text-sm space-y-1">
                                            {item.desc.map((d, idx) => <p key={idx}>{d}</p>)}
                                        </div>
                                        {/* Tags améliorés (Glassmorphism + couleur secondaire) */}
                                        <div className="flex flex-wrap gap-2 mt-3">
                                            {item.skills.map((skill, idx) => (
                                                <span key={idx}
                                                    className="px-3 py-1 text-xs font-medium text-secondary border border-secondary rounded-full bg-secondary/20 hover:bg-secondary/40 transition"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
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