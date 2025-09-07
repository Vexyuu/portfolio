export default function Contact() {
    return (
        <section id="contact" className="py-20 bg-background text-foreground">
            <div className="max-w-4xl mx-auto text-center px-6">
                <h2 className="text-3xl font-bold mb-6">Contact</h2>
                <p className="mb-6 text-muted">Tu veux collaborer ou poser une question ?</p>
                <div className="flex justify-center gap-6 flex-wrap">
                    <a href="mailto:tonemail@example.com" className="px-6 py-3 bg-primary text-primary rounded-lg shadow hover:bg-secondary transition">Email</a>
                    <a href="https://linkedin.com/in/tonprofil" target="_blank" className="px-6 py-3 bg-secondary text-primary rounded-lg shadow hover:bg-primary transition">LinkedIn</a>
                    <a href="https://github.com/Vexyuu" target="_blank" className="px-6 py-3 bg-accent text-primary rounded-lg shadow hover:bg-primary transition">GitHub</a>
                </div>
            </div>
        </section>
    );
}
