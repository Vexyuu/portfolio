// src/components/NavBar.tsx

"use client";
import { getAssetPath } from "@/utils/paths";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    const links = [
        { href: getAssetPath("/#about"), label: "À propos" },
        { href: getAssetPath("/career"), label: "Parcours" },
        { href: getAssetPath("/#projects"), label: "Projets" },
        { href: getAssetPath("/#certifications"), label: "Certifications" },
        { href: getAssetPath("/#contact"), label: "Contact" },
    ];

    return (
        <nav className="fixed w-full bg-background/80 backdrop-blur-lg shadow z-50">
            <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
                {/* Logo / Nom */}
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="text-2xl font-extrabold tracking-tight text-primary"
                >
                    <Link href={getAssetPath("/")}>Killian Fievet</Link>
                </motion.div>

                {/* Menu burger mobile */}
                <button
                    className="md:hidden text-2xl"
                    onClick={() => setOpen(!open)}
                >
                    ☰
                </button>

                {/* Liens */}
                <ul
                    className={`absolute md:static top-16 right-0 md:flex items-center gap-8 
                    bg-background md:bg-transparent shadow-md md:shadow-none 
                    p-6 md:p-0 rounded-lg md:rounded-none
                    transition-all duration-300 ease-in-out 
                    ${open ? "block" : "hidden"} md:block`}
                >
                    {links.map(({ href, label }) => (
                        <motion.li
                            key={href}
                            whileHover={{ scale: 1.1 }}
                            className="font-medium"
                        >
                            <Link
                                href={href}
                                className="relative text-foreground hover:text-primary"
                            >
                                {label}
                                {/* Soulignement animé */}
                                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                            </Link>
                        </motion.li>
                    ))}
                </ul>

                {/* Bouton thème */}
                <div className="ml-6">
                    <ThemeToggle />
                </div>
            </div>
        </nav>
    );
}