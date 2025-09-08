// src/components/ThemeToggle.tsx
"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type Theme = "light" | "dark" | "system";

export default function ThemeToggle() {
    const [theme, setTheme] = useState<Theme>("system");

    // Détection du thème système
    const getSystemTheme = (): "light" | "dark" =>
        window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

    // Charger la préférence au premier rendu
    useEffect(() => {
        const savedTheme = (localStorage.getItem("theme") as Theme) || "system";
        setTheme(savedTheme);

        if (savedTheme === "system") {
            document.documentElement.setAttribute("data-theme", getSystemTheme());
        } else {
            document.documentElement.setAttribute("data-theme", savedTheme);
        }

        // Écouter les changements système si "system" est actif
        if (savedTheme === "system") {
            const media = window.matchMedia("(prefers-color-scheme: dark)");
            const handler = () => {
                document.documentElement.setAttribute("data-theme", getSystemTheme());
            };
            media.addEventListener("change", handler);
            return () => media.removeEventListener("change", handler);
        }
    }, []);

    // Mettre à jour le DOM et localStorage quand theme change
    useEffect(() => {
        if (theme === "system") {
            document.documentElement.setAttribute("data-theme", getSystemTheme());
        } else {
            document.documentElement.setAttribute("data-theme", theme);
        }
        localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <div className="flex gap-2">
            <button
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                className="relative w-16 h-8 flex items-center rounded-full bg-muted p-1 border-2
                transition-all duration-300 border-gray-500 hover:border-primary focus:border-accent shadow-lg hover:shadow-xl"
            >
                {/* Cercle qui se déplace */}
                <motion.div
                    className="w-6 h-6 rounded-full bg-background flex items-center justify-center shadow-md"
                    animate={{ x: theme === "light" ? 0 : 32 }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                >
                    {theme === "light" ? "🌞" : "🌙"}
                </motion.div>
            </button>
            <button
                onClick={() => setTheme("system")}
                className={`relative w-8 h-8 rounded-full border-2 ${theme === "system" ? "bg-accent text-background" : "bg-secondary text-background"} 
        transition-all duration-300 border-gray-500 hover:border-primary focus:border-accent shadow-lg hover:shadow-xl`}
            >
                💻
            </button>
        </div>
    );
}
