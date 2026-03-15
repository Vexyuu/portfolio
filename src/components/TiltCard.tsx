"use client";

import { useRef, useState } from "react";
import { motion, useSpring, useTransform, useMotionValue } from "framer-motion";

export default function TiltCard({ children, className = "" }: { children: React.ReactNode, className?: string }) {
    const ref = useRef<HTMLDivElement>(null);
    const [isHovering, setIsHovering] = useState(false);

    // Position relative to center
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Smooth springs for tilt
    const springConfig = { damping: 20, stiffness: 150, mass: 0.5 };
    const mouseX = useSpring(x, springConfig);
    const mouseY = useSpring(y, springConfig);

    // Max rotation in degrees
    const rotateX = useTransform(mouseY, [-0.5, 0.5], [10, -10]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], [-10, 10]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();

        // Normalized position from -0.5 to 0.5
        const width = rect.width;
        const height = rect.height;

        const mouseXPos = e.clientX - rect.left;
        const mouseYPos = e.clientY - rect.top;

        const xPct = mouseXPos / width - 0.5;
        const yPct = mouseYPos / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseEnter = () => setIsHovering(true);

    const handleMouseLeave = () => {
        setIsHovering(false);
        // Reset to idle position gracefully
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX: isHovering ? rotateX : 0,
                rotateY: isHovering ? rotateY : 0,
                transformStyle: "preserve-3d",
            }}
            className={`perspective-1000 ${className}`}
        >
            <motion.div
                style={{ transform: "translateZ(30px)" }}
                className="w-full h-full"
            >
                {children}
            </motion.div>
        </motion.div>
    );
}
