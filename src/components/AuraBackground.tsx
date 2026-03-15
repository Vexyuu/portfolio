"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function AuraBackground() {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null;

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-1]">
            {/* Primary Blob */}
            <motion.div
                className="absolute w-[40vw] h-[40vw] rounded-full bg-primary/10 blur-[120px] mix-blend-screen"
                animate={{
                    x: ["-10%", "20%", "-10%"],
                    y: ["-10%", "30%", "-10%"],
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                style={{ top: "0%", left: "0%" }}
            />

            {/* Secondary Blob */}
            <motion.div
                className="absolute w-[50vw] h-[50vw] rounded-full bg-secondary/10 blur-[150px] mix-blend-screen"
                animate={{
                    x: ["20%", "-20%", "20%"],
                    y: ["20%", "-10%", "20%"],
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 5,
                }}
                style={{ bottom: "-10%", right: "-10%" }}
            />

            {/* Accent Blob */}
            <motion.div
                className="absolute w-[30vw] h-[30vw] rounded-full bg-accent/5 blur-[100px] mix-blend-screen"
                animate={{
                    x: ["0%", "50%", "0%"],
                    y: ["50%", "0%", "50%"],
                    scale: [0.8, 1.3, 0.8],
                }}
                transition={{
                    duration: 40,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2,
                }}
                style={{ top: "40%", left: "20%" }}
            />
        </div>
    );
}
