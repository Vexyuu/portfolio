"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function AuraBackground() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    if (!isMounted) return null;

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-1]" style={{ backgroundColor: 'var(--color-background)' }}>
            <div className="grain-overlay" />
            
            {/* Mouse reactive glow - Dynamic Secondary */}
            <motion.div
                className="absolute w-[800px] h-[800px] rounded-full bg-secondary/20 blur-[130px]"
                animate={{
                    x: mousePosition.x - 400,
                    y: mousePosition.y - 400,
                }}
                transition={{ type: "spring", damping: 50, stiffness: 80 }}
            />

            {/* Floating primary (Violet) - Top Left */}
            <motion.div
                className="absolute w-[70vw] h-[70vw] rounded-spread bg-primary/15 blur-[160px] mix-blend-plus-lighter"
                animate={{
                    x: ["-20%", "10%", "-20%"],
                    y: ["-10%", "20%", "-10%"],
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                style={{ top: "-20%", left: "-20%" }}
            />

            {/* Floating accent (Secondary) - Bottom Right */}
            <motion.div
                className="absolute w-[60vw] h-[60vw] rounded-spread bg-secondary/15 blur-[180px] mix-blend-plus-lighter"
                animate={{
                    x: ["10%", "-10%", "10%"],
                    y: ["10%", "-5%", "10%"],
                    scale: [1.1, 1, 1.1],
                }}
                transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2,
                }}
                style={{ bottom: "-20%", right: "-20%" }}
            />

            {/* Subtle center pulse */}
            <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw] bg-primary/5 blur-[120px] rounded-full"
                animate={{
                    opacity: [0.3, 0.6, 0.3],
                    scale: [0.8, 1.2, 0.8],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear"
                }}
            />
        </div>
    );
}
