"use client";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    return (
        <nav className="fixed w-full bg-background/90 backdrop-blur-md shadow z-50">
            <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
                <div className="text-xl font-bold text-foreground">Killian Fievet</div>
                <button className="md:hidden" onClick={() => setOpen(!open)}>
                    ☰
                </button>
                <ul className={`md:flex gap-6 ${open ? "block" : "hidden"} md:block`}>
                    <li><a href="#about" className="hover:text-primary">À propos</a></li>
                    <li><a href="#parcours" className="hover:text-primary">Parcours</a></li>
                    <li className="relative group">
                        <span className="hover:text-primary cursor-pointer">Projets ▼</span>
                        <ul className="absolute hidden group-hover:block bg-background border border-muted rounded p-2">
                            <li><a href="#projetsPersonnels" className="block py-1 px-3 hover:text-primary">Personnels</a></li>
                            <li><a href="#projetsAcademiques" className="block py-1 px-3 hover:text-primary">Académiques</a></li>
                        </ul>
                    </li>
                    <li><a href="#veille" className="hover:text-primary">Veille tech</a></li>
                    <li><a href="#E5" className="hover:text-primary">Synthèse</a></li>
                    <li><a href="#certifications" className="hover:text-primary">Certifications</a></li>
                    <li><a href="#contact" className="hover:text-primary">Contact</a></li>
                </ul>
                <div className="ml-4">
                    <ThemeToggle />
                </div>
            </div>
        </nav>
    );
}