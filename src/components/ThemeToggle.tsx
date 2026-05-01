// src/components/ThemeToggle.tsx
"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Monitor } from "lucide-react";

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);
    if (!mounted) return null;

    const modes = [
        { id: "light", icon: <Sun size={14} />, label: "Clair" },
        { id: "dark", icon: <Moon size={14} />, label: "Sombre" },
        { id: "system", icon: <Monitor size={14} />, label: "Système" },
    ];

    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-500 dark:text-gray-400"
            aria-label="Toggle Theme"
        >
            <AnimatePresence mode="wait">
                <motion.div
                    key={theme}
                    initial={{ y: -10, opacity: 0, rotate: -45 }}
                    animate={{ y: 0, opacity: 1, rotate: 0 }}
                    exit={{ y: 10, opacity: 0, rotate: 45 }}
                    transition={{ duration: 0.2 }}
                >
                    {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
                </motion.div>
            </AnimatePresence>
        </button>
    );
}