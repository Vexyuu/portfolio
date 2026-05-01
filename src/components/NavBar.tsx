"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { cn } from "@/utils/cn"; // Assuming a cn utility exists, otherwise I'll use template literals

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("");
    const pathname = usePathname();

    const links = [
        { href: "/#about", label: "À propos" },
        { href: "/career", label: "Parcours" },
        { href: "/projects", label: "Projets" },
        { href: "/#contact", label: "Contact" },
    ];

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    // Handle Active Section on Scroll (for anchors)
    useEffect(() => {
        if (pathname !== "/") {
            setActiveSection("");
            return;
        }

        const observerOptions = {
            root: null,
            rootMargin: '-20% 0px -70% 0px', // Adjust to trigger when section is in view
            threshold: 0,
        };

        const handleIntersect = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersect, observerOptions);

        // Observe sections
        const sectionIds = ["about", "projects", "contact"];
        sectionIds.forEach((id) => {
            const element = document.getElementById(id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, [pathname]);

    return (
        <>
            {/* --- DESKTOP & MOBILE HEADER --- */}
            <header
                className={cn(
                    "fixed top-0 left-0 w-full z-[100] transition-all duration-300",
                    "bg-background/80 backdrop-blur-md",
                    "shadow-[0_4px_20px_rgba(0,0,0,0.03)] antialiased font-['Inter']"
                )}
            >
                <div className="flex justify-between items-center max-w-7xl mx-auto px-8 py-5">
                    {/* Logo */}
                    <Link href="/" className="text-xl font-bold tracking-tighter text-foreground transition-opacity hover:opacity-80">
                        Killian F.
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-10">
                        {links.map(({ href, label }) => {
                            const isHash = href.startsWith("/#");
                            const hash = isHash ? href.split("#")[1] : "";

                            const isActive = isHash
                                ? pathname === "/" && activeSection === hash
                                : pathname === href || (href !== "/" && pathname.startsWith(href));

                            return (
                                <Link
                                    key={href}
                                    href={href}
                                    className={cn(
                                        "text-sm transition-all duration-200",
                                        isActive
                                            ? "text-secondary font-semibold border-b-2 border-secondary pb-1"
                                            : "text-muted-foreground hover:text-secondary border-b-2 border-transparent pb-1"
                                    )}
                                >
                                    {label}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Right Side Actions */}
                    <div className="flex items-center gap-4">
                        <ThemeToggle />

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="md:hidden p-2 text-foreground transition-colors hover:text-secondary"
                            aria-label="Toggle Menu"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </header>

            {/* --- MOBILE FULLSCREEN OVERLAY (Minimalist) --- */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-[90] bg-background pt-24 px-8 md:hidden"
                    >
                        <nav className="flex flex-col gap-6">
                            {links.map(({ href, label }) => {
                                const isHash = href.startsWith("/#");
                                const hash = isHash ? href.split("#")[1] : "";
                                const isActive = isHash
                                    ? pathname === "/" && activeSection === hash
                                    : pathname === href;

                                return (
                                    <Link
                                        key={href}
                                        href={href}
                                        onClick={() => setIsOpen(false)}
                                        className={cn(
                                            "text-2xl font-bold tracking-tight transition-colors",
                                            isActive ? "text-secondary" : "text-muted-foreground hover:text-foreground"
                                        )}
                                    >
                                        {label}
                                    </Link>
                                );
                            })}
                        </nav>

                        <div className="mt-12 pt-8 border-t border-gray-100 dark:border-gray-800">
                            <p className="text-sm text-gray-400 mb-4 uppercase tracking-widest font-semibold">Contact</p>
                            <a href="mailto:contact@killianfievet.com" className="text-lg font-medium text-foreground hover:text-secondary transition-colors">
                                contact@killianfievet.com
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>



        </>
    );
}


