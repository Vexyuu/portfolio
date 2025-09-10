// src/components/Footer.tsx
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
export default function Footer() {
    return (
        <footer className="py-6 text-center bg-background border-t border-muted">
            <p className="text-sm text-muted">
                © {new Date().getFullYear()} Portfolio Killian Fievet - Tous droits réservés
            </p>
            <div className="flex justify-center gap-4 mt-2">
                <a href="mailto:killianfievetpro@gmail.com" className="text-primary hover:underline">
                    <FaEnvelope className="inline-block mr-2" />
                    Email
                </a>
                <a href="https://www.linkedin.com/in/killian-fievet-4a3788287" target="_blank" className="text-secondary hover:underline">
                    <FaLinkedin className="inline-block mr-2" />
                    LinkedIn
                </a>
                <a href="https://github.com/Vexyuu" target="_blank" className="text-accent hover:underline">
                    <FaGithub className="inline-block mr-2" />
                    GitHub
                </a>
            </div>
        </footer>
    );
}
