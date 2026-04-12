// src/components/NavBar.tsx

"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaUser, FaBriefcase, FaLayerGroup, FaEnvelope, FaHome } from "react-icons/fa";

export default function Navbar() {

    const links = [
        { href: "/", label: "Accueil", icon: <FaHome /> },
        { href: "/#about", label: "À propos", icon: <FaUser /> },
        { href: "/career", label: "Parcours", icon: <FaBriefcase /> },
        { href: "/projects", label: "Projets", icon: <FaLayerGroup /> },
        { href: "/#contact", label: "Contact", icon: <FaEnvelope /> },
    ];

    return (
        <>
            {/* --- DEKSTOP NAVBAR (TOP) --- */}
            <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-fit px-4 hidden lg:block">
                <nav className="bg-background/90 backdrop-blur-3xl border border-white/20 px-4 md:px-6 py-3 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-500 hover:border-white/40">
                    <div className="flex justify-between items-center gap-4 md:gap-8">
                        {/* Logo */}
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="text-xl font-black tracking-tighter text-secondary flex-shrink-0 whitespace-nowrap"
                        >
                            <Link href={"/"}>KILLIAN F.</Link>
                        </motion.div>

                        {/* Liens Desktop */}
                        <ul className="flex items-center gap-4 md:gap-8">
                            {links.map(({ href, label }) => (
                                <motion.li key={href} whileHover={{ y: -2 }} className="font-black">
                                    <Link href={href} className="text-[10px] uppercase tracking-[0.3em] font-black text-white/50 hover:text-white transition-all duration-500 whitespace-nowrap">
                                        {label}
                                    </Link>
                                </motion.li>
                            ))}
                        </ul>
                    </div>
                </nav>
            </div>

            {/* --- MOBILE NAVBAR (BOTTOM DOCK) --- */}
            <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-full px-4 lg:hidden">
                <nav className="bg-background/80 backdrop-blur-3xl border border-white/10 px-2 py-2 rounded-[2.5rem] shadow-2xl shadow-black/50">
                    <ul className="flex justify-around items-center">
                        {links.map(({ href, label, icon }) => (
                            <li key={href} className="flex-1">
                                <Link href={href} className="flex flex-col items-center justify-center py-2 gap-1 group">
                                    <motion.div 
                                        whileTap={{ scale: 0.9 }}
                                        className="text-xl text-white/50 group-hover:text-secondary transition-colors"
                                    >
                                        {icon}
                                    </motion.div>
                                    <span className="text-[8px] uppercase tracking-widest font-black text-white/30 group-hover:text-white transition-colors">
                                        {label}
                                    </span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </>
    );
}