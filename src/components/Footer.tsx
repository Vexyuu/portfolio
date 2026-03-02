// src/components/Footer.tsx
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
export default function Footer() {
    return (
        <footer className="py-10 text-center bg-background/80 backdrop-blur-md border-t border-muted-foreground/10">
            <div className="flex justify-center gap-6 mt-2 mb-6">
                <a href="mailto:killianfievetpro@gmail.com" className="p-3 bg-muted/10 text-foreground border border-muted-foreground/20 rounded-full hover:bg-muted/20 hover:text-primary transition-colors">
                    <FaEnvelope size={20} />
                </a>
                <a href="https://www.linkedin.com/in/killian-fievet-4a3788287" target="_blank" className="p-3 bg-muted/10 text-foreground border border-muted-foreground/20 rounded-full hover:bg-muted/20 hover:text-secondary transition-colors">
                    <FaLinkedin size={20} />
                </a>
                <a href="https://github.com/Vexyuu" target="_blank" className="p-3 bg-muted/10 text-foreground border border-muted-foreground/20 rounded-full hover:bg-muted/20 hover:text-accent transition-colors">
                    <FaGithub size={20} />
                </a>
            </div>
            <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} Portfolio Killian Fievet - Tous droits réservés
            </p>
        </footer>
    );
}
