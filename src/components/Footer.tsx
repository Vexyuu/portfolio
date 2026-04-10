// src/components/Footer.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, ExternalLink } from "lucide-react";
import SupportButton from "./SupportButton";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const navLinks = [
        { href: "/", label: "Accueil" },
        { href: "/career", label: "Parcours" },
        { href: "/projects", label: "Projets" },
        { href: "/#contact", label: "Contact" },
    ];

    const socialLinks = [
        { 
            href: "https://www.linkedin.com/in/killian-fievet-4a3788287", 
            label: "LinkedIn", 
            icon: <Linkedin size={18} />,
            color: "hover:text-blue-400"
        },
        { 
            href: "https://github.com/Vexyuu", 
            label: "GitHub", 
            icon: <Github size={18} />,
            color: "hover:text-white"
        },
        { 
            href: "mailto:killianfievetpro@gmail.com", 
            label: "Email", 
            icon: <Mail size={18} />,
            color: "hover:text-secondary"
        },
    ];

    return (
        <footer className="w-full py-20 bg-background border-t border-white/5 relative z-10 overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none overflow-hidden opacity-20">
                <div className="absolute -top-24 left-1/4 w-96 h-96 bg-primary/10 blur-[120px] rounded-full" />
                <div className="absolute -bottom-24 right-1/4 w-96 h-96 bg-secondary/10 blur-[120px] rounded-full" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
                    
                    {/* Brand & Support */}
                    <div className="md:col-span-5 space-y-6 text-center md:text-left">
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="space-y-4"
                        >
                            <h2 className="text-3xl font-black tracking-tighter text-white">
                                KILLIAN <span className="text-secondary">F.</span>
                            </h2>
                            <p className="text-muted-foreground text-lg max-w-sm mx-auto md:mx-0 font-medium">
                                Concevoir des expériences numériques d{"'"}exception.
                            </p>
                        </motion.div>
                        
                        <div className="pt-4 flex justify-center md:justify-start">
                            <SupportButton />
                        </div>
                    </div>

                    {/* Quick Navigation */}
                    <div className="md:col-span-3 text-center md:text-left">
                        <h3 className="text-xs uppercase tracking-[0.3em] font-black text-white/30 mb-8">Navigation</h3>
                        <ul className="space-y-4">
                            {navLinks.map((link) => (
                                <li key={link.label}>
                                    <Link 
                                        href={link.href}
                                        className="text-sm font-bold text-muted-foreground hover:text-white transition-colors flex items-center justify-center md:justify-start gap-2 group"
                                    >
                                        <span className="w-0 group-hover:w-2 h-[1px] bg-secondary transition-all" />
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Socials Section */}
                    <div className="md:col-span-4 text-center md:text-left">
                        <h3 className="text-xs uppercase tracking-[0.3em] font-black text-white/30 mb-8">Réseaux Sociaux</h3>
                        <div className="flex flex-col gap-4">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`flex items-center justify-center md:justify-start gap-3 text-sm font-bold text-muted-foreground transition-all ${social.color} group`}
                                >
                                    <span className="p-2 bg-white/5 rounded-lg border border-white/10 group-hover:border-current/30 transition-colors">
                                        {social.icon}
                                    </span>
                                    <span>{social.label}</span>
                                    <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-[10px] font-black uppercase tracking-[0.4em] text-muted-foreground/30">
                        © {currentYear} <span className="text-secondary/60">KILLIAN F.</span> - SIGNATURE EXPERIENCE
                    </p>
                    
                    <div className="flex gap-6">
                        <button 
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            className="text-[10px] uppercase tracking-widest font-black text-white/20 hover:text-secondary transition-colors"
                        >
                            Retour en haut ↑
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
}
