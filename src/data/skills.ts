// src/data/skills.ts
import { getAssetPath } from "@/utils/paths";

export interface Skill {
  id: string;
  name: string;
  icon: string;
  category: "frontend" | "backend" | "ai" | "tools";
  level: "Expert" | "Avancé" | "Intermédiaire";
  description: string;
}

export const skills: Skill[] = [
  {
    id: "nextjs",
    name: "Next.js",
    icon: getAssetPath("/data/images/NextJS.png"),
    category: "frontend",
    level: "Expert",
    description: "Framework React pour le SSR et le App Router."
  },
  {
    id: "react",
    name: "React",
    icon: getAssetPath("/data/images/React_native.png"),
    category: "frontend",
    level: "Expert",
    description: "Bibliothèque pour des interfaces réactives et modulaires."
  },
  {
    id: "typescript",
    name: "TypeScript",
    icon: getAssetPath("/data/images/JavaScript.png"), // Reuse JS icon for TS if not available or replace
    category: "frontend",
    level: "Expert",
    description: "Surcouche typée pour un code JavaScript plus robuste."
  },
  {
    id: "python",
    name: "Python",
    icon: getAssetPath("/data/images/Python.png"),
    category: "ai",
    level: "Avancé",
    description: "Langage polyvalent utilisé pour l'IA et l'automatisation."
  },
  {
    id: "tensorflow",
    name: "TensorFlow",
    icon: getAssetPath("/data/images/Python.png"), // Placeholder icon
    category: "ai",
    level: "Intermédiaire",
    description: "Bibliothèque d'apprentissage automatique pour l'IA locale."
  },
  {
    id: "php",
    name: "PHP",
    icon: getAssetPath("/data/images/PHP.png"),
    category: "backend",
    level: "Avancé",
    description: "Développement côté serveur et gestion de bases de données."
  },
  {
    id: "sql",
    name: "PostgreSQL / SQL",
    icon: getAssetPath("/data/images/PHP.png"), // Placeholder
    category: "backend",
    level: "Avancé",
    description: "Mise en place de structures de données relationnelles."
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    icon: getAssetPath("/data/images/CSS.png"),
    category: "frontend",
    level: "Expert",
    description: "CSS utilitaire pour des designs rapides et modernes."
  },
  {
    id: "framer-motion",
    name: "Framer Motion",
    icon: getAssetPath("/data/images/JavaScript.png"), // Placeholder
    category: "frontend",
    level: "Avancé",
    description: "Animations fluides et interactives pour le web."
  }
];
