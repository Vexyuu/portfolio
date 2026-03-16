"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal } from "lucide-react";

const genericLogs = [
    "System initialized...",
    "Database connection established.",
    "Fetching assets from CDN...",
    "Optimizing image delivery...",
    "User session validated (UUID: {uuid})",
    "Cache hit for query {query_id}",
    "SSL Certificate verified.",
    "Load balanced to node-{num}",
];

const categoryLogs: Record<string, string[]> = {
    "IA": [
        "Loading neural weights...",
        "Running inference on TensorFlow",
        "NLP Parser: tokenizing input string",
        "Prediction confidence: {conf}%",
        "Training delta optimization complete.",
    ],
    "Web": [
        "Hydrating React components...",
        "SSR: generating static params",
        "Middleware: intercepting request",
        "API Route: GET /v1/data",
        "Tailing logs from Edge Runtime...",
    ],
    "Mobile": [
        "Booting React Native bridge...",
        "Native modules linked.",
        "Hardware acceleration enabled.",
        "Assets pre-cached (2.4mb)",
        "Syncing local storage with cloud...",
    ],
    "Outils": [
        "Generating entropy seed...",
        "Crunching local data structures...",
        "Encoding output buffer...",
        "Writing to protected sector...",
        "Unit tests: Passed (34)",
    ]
};

interface ProjectLiveFeedProps {
    category?: string;
}

export default function ProjectLiveFeed({ category = "Web" }: ProjectLiveFeedProps) {
    const [logs, setLogs] = useState<string[]>([]);
    const containerRef = useRef<HTMLDivElement>(null);

    const generateLog = useCallback(() => {
        const pool = [...genericLogs, ...(categoryLogs[category] || categoryLogs["Web"])];
        let log = pool[Math.floor(Math.random() * pool.length)];

        // Random injections
        log = log.replace("{uuid}", Math.random().toString(36).substring(2, 10).toUpperCase());
        log = log.replace("{query_id}", Math.floor(Math.random() * 9999).toString());
        log = log.replace("{num}", Math.floor(Math.random() * 5).toString());
        log = log.replace("{conf}", (95 + Math.random() * 4).toFixed(1));

        return `[${new Date().toLocaleTimeString()}] ${log}`;
    }, [category]);

    useEffect(() => {
        // Initial logs
        setLogs([generateLog(), generateLog(), generateLog()]);

        const interval = setInterval(() => {
            setLogs(prev => {
                const next = [...prev, generateLog()];
                if (next.length > 8) return next.slice(1);
                return next;
            });
        }, 3000 + Math.random() * 2000);

        return () => clearInterval(interval);
    }, [generateLog]);

    useEffect(() => {
        if (containerRef.current) {
            containerRef.current.scrollTop = containerRef.current.scrollHeight;
        }
    }, [logs]);

    return (
        <div className="mt-8 pt-8 border-t border-white/5">
            <div className="flex items-center gap-2 mb-4">
                <Terminal size={14} className="text-secondary" />
                <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground italic">Flux Backend Simulé</span>
                <div className="flex gap-1 ml-auto">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500/50" />
                    <div className="w-1.5 h-1.5 rounded-full bg-yellow-500/50" />
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500/50" />
                </div>
            </div>
            
            <div 
                ref={containerRef}
                className="bg-black/40 rounded-2xl p-4 font-mono text-[10px] leading-relaxed h-[160px] overflow-y-auto scrollbar-hide border border-white/5 backdrop-blur-sm"
            >
                <div className="space-y-2">
                    <AnimatePresence mode="popLayout">
                        {logs.map((log, i) => (
                            <motion.div
                                key={log + i}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                className="text-white/40 break-all"
                            >
                                <span className="text-secondary/60">❯</span> {log}
                            </motion.div>
                        ))}
                    </AnimatePresence>
                    <motion.div 
                        animate={{ opacity: [0, 1] }} 
                        transition={{ duration: 0.8, repeat: Infinity }}
                        className="inline-block w-2 h-3 bg-secondary/50 align-middle ml-1"
                    />
                </div>
            </div>
            
            <p className="mt-3 text-[9px] text-muted-foreground text-center animate-pulse">
                Données simulées pour démontrer l&apos;infrastructure
            </p>
        </div>
    );
}
