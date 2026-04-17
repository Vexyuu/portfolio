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
        <div className="flex items-center bg-muted/50 backdrop-blur-md p-1 rounded-full border border-foreground/10 shadow-inner">
            <div className="relative flex items-center gap-1">
                {modes.map((mode) => (
                    <button
                        key={mode.id}
                        onClick={() => setTheme(mode.id)}
                        className={`relative z-10 p-2 rounded-full transition-colors duration-300 ${
                            theme === mode.id 
                                ? "text-foreground" 
                                : "text-muted-foreground hover:text-foreground/70"
                        }`}
                        title={mode.label}
                    >
                        {mode.icon}
                        
                        {theme === mode.id && (
                            <motion.div
                                layoutId="activeTab"
                                className="absolute inset-0 bg-background rounded-full shadow-sm border border-foreground/5 -z-10"
                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                            />
                        )}
                    </button>
                ))}
            </div>
        </div>
    );
}