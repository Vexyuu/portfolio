// src/components/About.tsx
export const metadata = {
    title: "À propos de moi - Killian Fievet",
    description: "En savoir plus sur moi, mes compétences et mon parcours.",
};

export default function About() {
    return (
        <section id="about" className="py-20 px-6 bg-background text-foreground">
            <div className="max-w-5xl mx-auto text-center space-y-12">
                <h2 className="text-3xl md:text-4xl font-bold">À propos de moi</h2>
                <p className="text-lg text-muted max-w-3xl mx-auto">
                    Étudiant en BTS SIO SLAM et développeur web passionné. J'aime créer des projets modernes, dynamiques et performants.
                </p>
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="card-glass p-6">
                        <h3 className="text-xl font-bold text-primary mb-2">SLAM 💻</h3>
                        <p className="text-muted">Développement web, mobile et logiciels métiers.</p>
                    </div>
                    <div className="card-glass p-6">
                        <h3 className="text-xl font-bold text-secondary mb-2">SISR 🛠️</h3>
                        <p className="text-muted">Gestion des réseaux, serveurs et sécurité informatique.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
