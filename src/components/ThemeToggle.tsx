// src/components/ThemeToggle.tsx
"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // Nécessaire pour éviter l'hydration mismatch
    useEffect(() => setMounted(true), []);
    if (!mounted) return null;

    return (
        <div className="flex gap-2">
            {/* Toggle Light/Dark */}
            <button
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                className="relative w-16 h-8 flex items-center rounded-full bg-muted p-1 border-2
                transition-all duration-300 border-gray-500 hover:border-primary focus:border-accent shadow-lg hover:shadow-xl"
            >
                <motion.div
                    className="w-6 h-6 rounded-full bg-background flex items-center justify-center shadow-md"
                    animate={{ x: theme === "light" ? 0 : 32 }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                >
                    {theme === "light" ? "🌞" : "🌙"}
                </motion.div>
            </button>

            {/* Bouton System */}
            <button
                onClick={() => setTheme("system")}
                className={`relative w-8 h-8 rounded-full border-2 ${theme === "system" ? "bg-accent text-background" : "bg-secondary text-background"
                    } transition-all duration-300 border-gray-500 hover:border-primary focus:border-accent shadow-lg hover:shadow-xl`}
            >
                💻
            </button>
        </div>
    );
}