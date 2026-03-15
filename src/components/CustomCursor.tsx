"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function CustomCursor() {
    const [isHovering, setIsHovering] = useState(false);
    const [isHidden, setIsHidden] = useState(false);

    // Motion values to track mouse position
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    // Smooth springs to trail the mouse
    const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        // Only show custom cursor on non-touch devices
        if (window.matchMedia("(pointer: coarse)").matches) {
            setIsHidden(true);
            return;
        }

        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
        };

        const handleMouseLeave = () => setIsHidden(true);
        const handleMouseEnter = () => setIsHidden(false);

        // Detect when hovering over clickable elements
        const handleLinkHoverEvents = () => {
            const clickables = document.querySelectorAll(
                'a, button, input[type="submit"], input[type="button"], select'
            );

            clickables.forEach((el) => {
                el.addEventListener("mouseenter", () => setIsHovering(true));
                el.addEventListener("mouseleave", () => setIsHovering(false));
            });

            return () => {
                clickables.forEach((el) => {
                    el.removeEventListener("mouseenter", () => setIsHovering(true));
                    el.removeEventListener("mouseleave", () => setIsHovering(false));
                });
            };
        };

        let cleanupLinks = handleLinkHoverEvents();

        // Rebind link hover listeners when DOM changes (e.g. navigation)
        const observer = new MutationObserver(() => {
            cleanupLinks();
            cleanupLinks = handleLinkHoverEvents();
        });

        observer.observe(document.body, { childList: true, subtree: true });

        window.addEventListener("mousemove", moveCursor);
        document.addEventListener("mouseleave", handleMouseLeave);
        document.addEventListener("mouseenter", handleMouseEnter);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            document.removeEventListener("mouseleave", handleMouseLeave);
            document.removeEventListener("mouseenter", handleMouseEnter);
            observer.disconnect();
            cleanupLinks();
        };
    }, [cursorX, cursorY]);

    if (isHidden) return null;

    return (
        <>
            {/* Central Dot */}
            <motion.div
                className="fixed top-0 left-0 w-2 h-2 bg-primary rounded-full pointer-events-none z-[100] transform -translate-x-1/2 -translate-y-1/2 shadow-lg shadow-primary/50 mix-blend-difference"
                style={{
                    x: cursorX,
                    y: cursorY,
                }}
                animate={{
                    scale: isHovering ? 0 : 1,
                    opacity: isHovering ? 0 : 1,
                }}
                transition={{ duration: 0.15 }}
            />
            {/* Outer Ring */}
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 border-[1.5px] border-primary/50 rounded-full pointer-events-none z-[100] transform -translate-x-1/2 -translate-y-1/2 backdrop-blur-[1px]"
                style={{
                    x: cursorXSpring,
                    y: cursorYSpring,
                }}
                animate={{
                    scale: isHovering ? 1.5 : 1,
                    backgroundColor: isHovering ? "rgba(var(--color-primary-rgb), 0.1)" : "transparent",
                    borderColor: isHovering ? "var(--color-primary)" : "rgba(var(--color-primary-rgb), 0.5)",
                }}
                transition={{ duration: 0.15 }}
            />
        </>
    );
}
