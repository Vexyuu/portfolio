"use client";
import { getAssetPath } from "@/utils/paths";
import Image from "next/image";
import SpotlightCard from "./SpotlightCard";
import { motion } from "framer-motion";

const skills = [
    { name: "HTML", icon: getAssetPath("/data/images/HTML.png") },
    { name: "CSS", icon: getAssetPath("/data/images/CSS.png") },
    { name: "JavaScript", icon: getAssetPath("/data/images/JavaScript.png") },
    { name: "React", icon: getAssetPath("/data/images/React_native.png") },
    { name: "Next.js", icon: getAssetPath("/data/images/NextJS.png") },
    { name: "PHP", icon: getAssetPath("/data/images/PHP.png") },
    { name: "Python", icon: getAssetPath("/data/images/Python.png") },
];

export default function Skills() {
    return (
        <section id="skills" className="py-32 px-6 bg-background text-foreground relative overflow-hidden w-full flex flex-col items-center">
            <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="max-w-6xl w-full"
            >
                {/* Background Glow - Subtle Aurora */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 blur-[150px] rounded-full pointer-events-none" />
                
                <div className="flex flex-col items-center text-center mb-24 gap-6">
                    <h2 className="text-xs uppercase tracking-[0.4em] font-black text-secondary px-6 py-2 bg-secondary/10 border border-secondary/20 rounded-full inline-block backdrop-blur-md">Expertise</h2>
                    <h3 className="text-4xl md:text-6xl font-black tracking-tighter">
                        <span className="bg-mask-text">MAÎTRISE TECHNIQUE</span>
                    </h3>
                    <p className="text-muted-foreground max-w-2xl font-medium text-lg tracking-tight mt-4">
                        Un ensemble de technologies modernes pour bâtir des expériences web performantes et scalables.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 auto-rows-[160px]">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            className={`${
                                index === 0 ? "md:col-span-2 md:row-span-2" : 
                                index === 3 ? "md:col-span-2" : ""
                            }`}
                        >
                            <SpotlightCard
                                className="card-glass card-shine h-full flex flex-col items-center justify-center p-6 hover:scale-[1.02] transition-all duration-500 gap-4 rounded-[2.5rem]"
                            >
                                <div className="relative w-16 h-16 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500">
                                    <Image
                                        src={skill.icon}
                                        alt={skill.name}
                                        width={64}
                                        height={64}
                                        className="object-contain filter drop-shadow-[0_0_10px_rgba(var(--color-foreground),0.1)]"
                                        priority={index < 4}
                                    />
                                </div>
                                <div className="text-center">
                                    <p className="text-foreground text-lg font-bold tracking-tight">{skill.name}</p>
                                    {index === 0 && <p className="text-xs text-muted-foreground mt-1">Langage coeur</p>}
                                </div>
                            </SpotlightCard>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}