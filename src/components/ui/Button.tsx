// src/components/ui/button.tsx
import { ReactNode, useRef, useState } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface ButtonProps extends HTMLMotionProps<"button"> {
    children: ReactNode;
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
    size?: 'sm' | 'md' | 'lg';
    isLoading?: boolean;
}

export default function Button({ children, className, variant = 'primary', size = 'md', isLoading, disabled, ...props }: ButtonProps) {
    const buttonRef = useRef<HTMLButtonElement>(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (!buttonRef.current) return;
        const rect = buttonRef.current.getBoundingClientRect();
        setMousePosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    const baseStyles = "relative inline-flex items-center justify-center gap-2 rounded-full font-bold transition-all cursor-pointer overflow-hidden active:scale-95 disabled:opacity-50 disabled:pointer-events-none group";

    const variants = {
        primary: "bg-primary text-white border border-primary/20",
        secondary: "bg-secondary text-background border border-secondary/20 shadow-[0_0_20px_rgba(217,119,6,0.15)]",
        outline: "border border-white/10 bg-white/5 backdrop-blur-md text-white hover:bg-white/10",
        ghost: "bg-transparent hover:bg-white/5 text-white/70 hover:text-white",
        danger: "bg-red-500/20 text-red-500 border border-red-500/30 hover:bg-red-500/30",
    };

    const sizes = {
        sm: "px-4 py-2 text-xs uppercase tracking-widest",
        md: "px-6 py-3 text-sm uppercase tracking-widest",
        lg: "px-8 py-4 text-base uppercase tracking-widest",
    };

    return (
        <motion.button
            ref={buttonRef}
            className={cn(baseStyles, variants[variant], sizes[size], className)}
            disabled={disabled || isLoading}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            whileHover={{ y: -2 }}
            {...props}
        >
            {/* Spotlight Effect */}
            <motion.div
                className="absolute inset-0 z-0 pointer-events-none transition-opacity duration-300"
                style={{
                    opacity: isHovered ? 1 : 0,
                    background: `radial-gradient(circle 80px at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.15), transparent)`,
                }}
            />

            {/* Shimmer Animation */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-full">
                <motion.div
                    animate={{
                        x: ['-100%', '200%'],
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear",
                        repeatDelay: 2
                    }}
                    className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-[-20deg]"
                />
            </div>

            <span className="relative z-10 flex items-center gap-2">
                {isLoading && (
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                )}
                {children}
            </span>

            {/* Subtle glow for secondary */}
            {variant === 'secondary' && (
                <div className="absolute inset-0 rounded-full bg-secondary/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            )}
        </motion.button>
    );
}