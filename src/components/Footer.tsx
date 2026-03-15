// src/components/Footer.tsx
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
export default function Footer() {
    return (
        <footer className="py-20 text-center bg-background border-t border-white/5 relative z-10">
            <div className="flex justify-center gap-8 mb-10">
                <a href="mailto:killianfievetpro@gmail.com" className="p-4 bg-white/5 text-white/50 border border-white/10 rounded-full hover:bg-secondary hover:text-background hover:border-secondary transition-all duration-500 shadow-xl shadow-black/20">
                    <FaEnvelope size={22} />
                </a>
                <a href="https://www.linkedin.com/in/killian-fievet-4a3788287" target="_blank" className="p-4 bg-white/5 text-white/50 border border-white/10 rounded-full hover:bg-secondary hover:text-background hover:border-secondary transition-all duration-500 shadow-xl shadow-black/20">
                    <FaLinkedin size={22} />
                </a>
                <a href="https://github.com/Vexyuu" target="_blank" className="p-4 bg-white/5 text-white/50 border border-white/10 rounded-full hover:bg-secondary hover:text-background hover:border-secondary transition-all duration-500 shadow-xl shadow-black/20">
                    <FaGithub size={22} />
                </a>
            </div>
            <p className="text-xs font-black uppercase tracking-[0.4em] text-muted-foreground/40">
                © {new Date().getFullYear()} <span className="text-secondary/60">KILLIAN F.</span> - SIGNATURE EXPERIENCE
            </p>
        </footer>
    );
}
