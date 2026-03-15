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
                <h1 className="text-6xl md:text-9xl font-black tracking-tighter text-center mb-24 py-4">
                    <span className="bg-mask-text">MON PARCOURS.</span>
                </h1>

                <div className="flex flex-col lg:flex-row gap-16">
                    {/* Parcours scolaire */}
                    <div className="flex-1">
                        <div className="flex items-center gap-4 mb-10">
                            <span className="w-12 h-[2px] bg-primary rounded-full" />
                            <h2 className="text-xl font-black uppercase tracking-[0.3em] text-primary">Parcours scolaire</h2>
                        </div>
                        <div className="relative border-l-2 border-primary">
                            {schoolTimeline.map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: i * 0.2 }}
                                    className="mb-10 ml-6 relative"
                                >
                                    {/* Point de la timeline (Bullet) OUTSIDE card-glass to prevent clipping */}
                                    <div className="absolute flex items-center justify-center w-10 h-10 bg-primary/20 text-primary rounded-full -left-[45px] top-4 border-2 border-background shadow-md backdrop-blur-sm z-10">
                                        <span className="text-lg">{item.icon}</span>
                                    </div>
                                    {/* Glassmorphism card */}
                                    <div className="card-glass p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/20">
                                        <div className="flex flex-col">
                                            <p className="font-semibold text-foreground text-lg mb-1">{item.title}</p>
                                            <span className="text-sm text-primary font-medium mb-3">
                                                {item.place} • {item.date}
                                            </span>
                                        </div>
                                        <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Parcours pro */}
                    <div className="flex-1">
                        <div className="flex items-center gap-4 mb-10">
                            <span className="w-12 h-[2px] bg-secondary rounded-full" />
                            <h2 className="text-xl font-black uppercase tracking-[0.4em] text-secondary">Parcours pro</h2>
                        </div>
                        <div className="relative border-l-2 border-secondary/30">
                            {workTimeline.map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: i * 0.2 }}
                                    className="mb-10 ml-6 relative"
                                >
                                    {/* Point de la timeline (Bullet) */}
                                    <div className="absolute flex items-center justify-center w-10 h-10 bg-secondary/20 text-secondary rounded-full -left-[45px] top-4 border-2 border-background shadow-md backdrop-blur-sm z-10">
                                        <span className="text-lg">{item.icon}</span>
                                    </div>
                                    {/* Glassmorphism card */}
                                    <div className="card-glass p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-secondary/20">
                                        <div className="flex flex-col">
                                            <p className="font-semibold text-foreground text-lg mb-1">
                                                {item.title} <span className="text-secondary font-medium block md:inline md:ml-2">— {item.place}</span>
                                            </p>
                                            <span className="text-sm text-secondary font-medium mb-4">{item.date}</span>
                                        </div>
                                        <div className="text-sm text-muted-foreground leading-relaxed space-y-2">
                                            {item.desc.map((d, idx) => <p key={idx}>{d}</p>)}
                                        </div>
                                        {/* Tags améliorés */}
                                        <div className="flex flex-wrap gap-2 mt-5 pt-4 border-t border-muted-foreground/10">
                                            {item.skills.map((skill, idx) => (
                                                <span key={idx}
                                                    className="px-3 py-1 text-xs font-medium text-secondary bg-secondary/10 border border-secondary/20 rounded-full hover:bg-secondary/20 transition-colors"
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