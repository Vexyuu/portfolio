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
            
            {/* Mouse reactive glow - Pure Gold Influence */}
            <motion.div
                className="absolute w-[600px] h-[600px] rounded-full bg-secondary/15 blur-[120px]"
                animate={{
                    x: mousePosition.x - 300,
                    y: mousePosition.y - 300,
                }}
                transition={{ type: "spring", damping: 40, stiffness: 100 }}
            />

            {/* Floating primary (Violet) */}
            <motion.div
                className="absolute w-[60vw] h-[60vw] rounded-full bg-primary/10 blur-[150px] mix-blend-screen"
                animate={{
                    x: ["-10%", "20%", "-10%"],
                    y: ["-5%", "30%", "-5%"],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                style={{ top: "-10%", left: "-10%" }}
            />

            {/* Floating secondary (Gold) */}
            <motion.div
                className="absolute w-[50vw] h-[50vw] rounded-full bg-secondary/10 blur-[180px] mix-blend-screen"
                animate={{
                    x: ["20%", "-20%", "20%"],
                    y: ["20%", "-10%", "20%"],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2,
                }}
                style={{ bottom: "-10%", right: "-10%" }}
            />
        </div>
    );
}
