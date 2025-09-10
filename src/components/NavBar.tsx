// src/components/NavBar.tsx

"use client";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    const links = [
        { href: "/#about", label: "À propos" },
        { href: "/career", label: "Parcours" },
        { href: "/#projects", label: "Projets" },
        { href: "/#certifications", label: "Certifications" },
        { href: "/#contact", label: "Contact" },
    ];

    return (
        <nav className="fixed w-full bg-background/80 backdrop-blur-lg shadow z-50">
            <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
                {/* Logo */}
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="text-2xl font-extrabold tracking-tight text-primary"
                >
                    <Link href={"/"}>Killian Fievet</Link>
                </motion.div>

                {/* Bouton Burger */}
                <button
                    className="md:hidden text-2xl"
                    onClick={() => setOpen(!open)}
                >
                    {open ? "✖" : "☰"}
                </button>

                {/* Menu Desktop */}
                <ul className="hidden md:flex items-center gap-8">
                    {links.map(({ href, label }) => (
                        <motion.li key={href} whileHover={{ scale: 1.1 }} className="font-medium">
                            <Link href={href} className="relative text-foreground hover:text-primary">
                                {label}
                            </Link>
                        </motion.li>
                    ))}
                    <ThemeToggle />
                </ul>
            </div>

            {/* Menu Mobile = extension */}
            {open && (
                <motion.ul
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="flex flex-col gap-6 px-6 pb-6 md:hidden bg-background/80 backdrop-blur-lg shadow"
                >
                    {links.map(({ href, label }) => (
                        <li key={href}>
                            <Link
                                href={href}
                                className="text-lg font-medium hover:text-primary"
                                onClick={() => setOpen(false)}
                            >
                                {label}
                            </Link>
                        </li>
                    ))}
                    <ThemeToggle />
                </motion.ul>
            )}
        </nav>
    );
}