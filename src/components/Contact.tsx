// src/components/Contact.tsx
export const metadata = {
    title: "Contact - Killian Fievet",
    description: "Contactez-moi via le formulaire ou retrouvez-moi sur les réseaux sociaux.",
};

export default function Contact() {
    return (
        <section id="contact" className="py-20 px-6 bg-background text-foreground">
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">Contactez-moi</h2>
                <p className="text-muted mb-8">Vous pouvez m'envoyer un message directement via ce formulaire.</p>
                <form className="grid gap-6">
                    <input
                        type="text"
                        placeholder="Votre nom"
                        className="p-4 rounded-lg border border-gray-600 bg-background text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary transition"
                    />
                    <input
                        type="email"
                        placeholder="Votre email"
                        className="p-4 rounded-lg border border-gray-600 bg-background text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary transition"
                    />
                    <textarea
                        placeholder="Votre message"
                        rows={5}
                        className="p-4 rounded-lg border border-gray-600 bg-background text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary transition"
                    />
                    <button
                        type="submit"
                        className="px-6 py-3 font-bold rounded-lg text-white bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 hover:scale-105 hover:shadow-xl transition-transform duration-300"
                    >
                        Envoyer
                    </button>
                </form>
                <div className="mt-12 flex justify-center gap-6">
                    <a href="mailto:killianfievetpro@gmail.com" className="text-primary hover:underline">Email</a>
                    <a href="https://github.com/Vexyuu?tab=repositories" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">GitHub</a>
                    <a href="https://www.linkedin.com/in/killian-fievet-4a3788287" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">LinkedIn</a>
                </div>
            </div>
        </section>
    );
}
