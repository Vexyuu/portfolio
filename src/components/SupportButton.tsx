// src/components/SupportButton.tsx

"use client";

import React from "react";
import { Coffee, Heart } from "lucide-react";
import { motion } from "framer-motion";

interface SupportButtonProps {
  className?: string;
  variant?: "primary" | "minimal";
}

export default function SupportButton({ className = "", variant = "primary" }: SupportButtonProps) {
  // Lien Buy Me A Coffee (Générique ou spécifique par projet)
  const DONATION_LINK = "https://buymeacoffee.com/killianfievet";

  if (variant === "minimal") {
    return (
      <a
        href={DONATION_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center gap-2 text-sm font-bold text-muted-foreground hover:text-secondary transition-colors group ${className}`}
      >
        <Coffee size={16} className="group-hover:scale-110 transition-transform" />
        Soutenir le site
      </a>
    );
  }

  return (
    <motion.a
      href={DONATION_LINK}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`relative overflow-hidden inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-amber-400 to-orange-500 text-white px-6 py-3 rounded-2xl md:rounded-full font-black text-base shadow-lg shadow-orange-500/10 group no-print ${className}`}
    >
      <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
      <Coffee size={20} className="group-hover:rotate-12 transition-transform duration-300" />
      <span className="relative z-10">Offrir un verre (Soutenir le site)</span>
      <Heart size={14} className="absolute top-1.5 right-3 opacity-40 group-hover:opacity-100 group-hover:animate-ping" fill="currentColor" />
    </motion.a>
  );
}
