// src/components/ui/Button.tsx
"use client";

import { ReactNode, useRef, useState } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import Link from 'next/link';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface CommonProps {
    children?: ReactNode;
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'glass' | 'white';
    size?: 'sm' | 'md' | 'lg' | 'xl';
    isLoading?: boolean;
    href?: string;
    target?: string;
    icon?: ReactNode;
    iconPosition?: 'left' | 'right';
    fullWidth?: boolean;
}

// Combine motion props for button and standard props for Link
type ButtonProps = CommonProps & Omit<HTMLMotionProps<"button">, keyof CommonProps>;

export default function Button({
    children,
    className,
    variant = 'primary',
    size = 'md',
    isLoading,
    disabled,
    href,
    target,
    icon,
    iconPosition = 'left',
    fullWidth = false,
    ...props
}: ButtonProps) {
    const elementRef = useRef<HTMLButtonElement | HTMLAnchorElement>(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!elementRef.current) return;
        const rect = elementRef.current.getBoundingClientRect();
        setMousePosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    const baseStyles = "relative inline-flex items-center justify-center gap-3 rounded-2xl font-black transition-all cursor-pointer overflow-hidden active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none group uppercase tracking-[0.15em] select-none";

    const variants = {
        primary: "bg-foreground text-background border border-foreground/10 hover:shadow-[0_20px_40px_rgba(var(--color-foreground),0.1)]",
        secondary: "bg-secondary text-background border border-secondary/20 shadow-[0_10px_30px_rgba(217,119,6,0.2)] hover:shadow-[0_20px_50px_rgba(217,119,6,0.4)]",
        outline: "border border-foreground/10 bg-foreground/5 backdrop-blur-md text-foreground/80 hover:text-foreground hover:border-foreground/30",
        glass: "bg-foreground/5 backdrop-blur-2xl border border-foreground/10 text-foreground/90 hover:bg-foreground/10 hover:border-foreground/20 shadow-2xl",
        ghost: "bg-transparent hover:bg-foreground/5 text-foreground/60 hover:text-foreground",
        white: "bg-foreground text-background border border-foreground/20 hover:opacity-90",
    };

    const sizes = {
        sm: "px-5 py-2.5 text-[10px]",
        md: "px-8 py-4 text-[10px]",
        lg: "px-10 py-5 text-xs",
        xl: "px-12 py-6 text-sm",
    };

    const content = (
        <>
            {/* Spotlight Effect (Always consistent) */}
            <motion.div
                className="absolute inset-0 z-0 pointer-events-none transition-opacity duration-500"
                style={{
                    opacity: isHovered ? 1 : 0,
                    background: `radial-gradient(circle 100px at ${mousePosition.x}px ${mousePosition.y}px, hsl(var(--color-foreground) / 0.08), transparent)`,
                }}
            />

            {/* Shimmer Animation (Subtle) */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <motion.div
                    animate={{
                        x: ['-150%', '300%'],
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "linear",
                        repeatDelay: 3
                    }}
                    className="absolute inset-0 w-1/3 h-full bg-gradient-to-r from-transparent via-foreground/[0.03] to-transparent skew-x-[-30deg]"
                />
            </div>

            <span className="relative z-10 flex items-center justify-center gap-2">
                {isLoading && (
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent mr-2" />
                )}
                {!isLoading && icon && iconPosition === 'left' && <span className="transition-transform group-hover:-translate-x-1">{icon}</span>}
                <span className="truncate">{children}</span>
                {!isLoading && icon && iconPosition === 'right' && <span className="transition-transform group-hover:translate-x-1">{icon}</span>}
            </span>

            {/* Accent Glow for Secondary/Glass */}
            {(variant === 'secondary' || variant === 'glass') && (
                <div className="absolute inset-0 rounded-2xl bg-current opacity-0 blur-2xl group-hover:opacity-10 transition-opacity duration-700 pointer-events-none" />
            )}
        </>
    );

    const combinedClassName = cn(
        baseStyles, 
        variants[variant], 
        sizes[size], 
        fullWidth && "w-full",
        className
    );

    if (href) {
        return (
            <Link 
                href={href} 
                target={target}
                className={combinedClassName}
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                ref={elementRef as any}
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {content}
            </Link>
        );
    }

    return (
        <motion.button
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            ref={elementRef as any}
            className={combinedClassName}
            disabled={disabled || isLoading}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            {...props}
        >
            {content}
        </motion.button>
    );
}