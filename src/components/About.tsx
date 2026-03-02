// src/components/About.tsx
"use client";
export const metadata = {
    title: "À propos de moi - Killian Fievet",
    description: "En savoir plus sur moi, mes compétences et mon parcours.",
};

export default function About() {
    return (
        <section id="about" className="py-20 px-6 bg-background text-foreground">
            <div className="max-w-5xl mx-auto text-center space-y-12">
                {/* Titre */}
                <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent bg-[length:200%_200%]">
                    À propos de moi
                </h2>

                {/* Texte principal */}
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed text-center md:text-left">
                    Étudiant en <span className="font-semibold text-foreground">Licence 3 MIAGE</span> à
                    l’Université Paris 1 Panthéon-Sorbonne.
                    Passionné par le <span className="text-primary font-medium">développement informatique</span>,
                    la <span className="text-secondary font-medium">data</span> et l’<span className="font-semibold text-foreground">intelligence artificielle</span>,
                    j’ai pour objectif de devenir ingénieur et d’apporter des solutions innovantes aux entreprises et aux utilisateurs.
                </p>

                {/* Domaines clés */}
                <div className="grid md:grid-cols-3 gap-6 text-left">
                    <div className="card-glass p-6 hover:-translate-y-2 transition-transform duration-300">
                        <h3 className="text-xl font-bold flex items-center gap-2 text-primary mb-3">
                            <span className="text-2xl">💻</span> Développement
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            Web, logiciels métiers, applications modernes et fluides avec une attention aux détails.
                        </p>
                    </div>
                    <div className="card-glass p-6 hover:-translate-y-2 transition-transform duration-300">
                        <h3 className="text-xl font-bold flex items-center gap-2 text-secondary mb-3">
                            <span className="text-2xl">📊</span> Data & IA
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            Analyse, apprentissage automatique et intégration d&apos;intelligence artificielle appliquée.
                        </p>
                    </div>
                    <div className="card-glass p-6 hover:-translate-y-2 transition-transform duration-300">
                        <h3 className="text-xl font-bold flex items-center gap-2 text-accent mb-3">
                            <span className="text-2xl">🚀</span> Vision
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            Créer des solutions innovantes, performantes et esthétiques pour répondre aux besoins de demain.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
