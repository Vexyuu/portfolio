const projects = [
    {
        title: "Portfolio Web",
        description: "Un site moderne en HTML, CSS, JS transformé en Next.js + Tailwind.",
        link: "https://github.com/ton-username/portfolio",
        demo: "#",
    },
    {
        title: "Application Recettes",
        description: "Une app interactive type TikTok pour partager des recettes.",
        link: "https://github.com/ton-username/cookme",
        demo: "#",
    },
    {
        title: "Générateur de mots de passe",
        description: "Un petit outil pratique pour créer des mots de passe sécurisés.",
        link: "https://github.com/ton-username/password-generator",
        demo: "#",
    },
]

export default function Projects() {
    return (
        <section id="projects" className="py-20 bg-background text-foreground">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-12">Projets</h2>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project) => (
                        <div key={project.title} className="bg-background border border-muted p-6 rounded-xl shadow hover:scale-105 transition">
                            <h3 className="text-xl font-bold mb-2 text-foreground">{project.title}</h3>
                            <p className="text-muted mb-4">{project.description}</p>
                            <div className="flex gap-4">
                                <a href={project.link} className="text-primary hover:underline">Code</a>
                                <a href={project.demo} className="text-secondary hover:underline">Demo</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}