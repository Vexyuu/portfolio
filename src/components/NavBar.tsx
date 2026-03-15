// src/components/NavBar.tsx

"use client";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    const links = [
        { href: "/#about", label: "À propos" },
        { href: "/career", label: "Parcours" },
        { href: "/projects", label: "Projets" },
        { href: "/#certifications", label: "Certifications" },
        { href: "/#contact", label: "Contact" },
    ];

    return (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-fit px-4">
            <nav className="bg-background/60 backdrop-blur-2xl border border-foreground/10 px-6 py-3 rounded-full shadow-2xl shadow-primary/5 transition-all duration-500 hover:shadow-primary/10">
                <div className="flex justify-between items-center gap-8">
                    {/* Logo/Home */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="text-xl font-black tracking-tighter text-secondary hidden md:block"
                    >
                        <Link href={"/"}>KILLIAN F.</Link>
                    </motion.div>

                    {/* Menu Desktop */}
                    <ul className="hidden md:flex items-center gap-8">
                        {links.map(({ href, label }) => (
                            <motion.li key={href} whileHover={{ y: -2 }} className="font-black">
                                <Link href={href} className="text-[10px] uppercase tracking-[0.3em] font-black text-white/50 hover:text-secondary transition-all duration-500">
                                    {label}
                                </Link>
                            </motion.li>
                        ))}
                    </ul>

                    <div className="flex items-center gap-4">
                        {/* Burger Mobile */}
                        <button
                            className="md:hidden text-xl p-3 bg-secondary/10 rounded-full text-secondary border border-secondary/20"
                            onClick={() => setOpen(!open)}
                        >
                            {open ? <span className="block w-4 h-4 flex items-center justify-center">✕</span> : <span className="block w-4 h-4 flex items-center justify-center">☰</span>}
                        </button>
                    </div>
                </div>

                {/* Mobile Slide-down */}
                {open && (
                    <motion.ul
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        className="absolute top-full mt-4 left-0 right-0 bg-background/80 backdrop-blur-3xl border border-foreground/10 p-6 rounded-3xl shadow-2xl flex flex-col gap-4 md:hidden"
                    >
                        {links.map(({ href, label }) => (
                            <li key={href}>
                                <Link
                                    href={href}
                                    className="text-lg font-bold text-foreground hover:text-primary transition-colors block py-2"
                                    onClick={() => setOpen(false)}
                                >
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </motion.ul>
                )}
            </nav>
        </div>
    );
}