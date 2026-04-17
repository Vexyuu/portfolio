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
    id: "html",
    name: "HTML5",
    icon: getAssetPath("/data/images/HTML.png"),
    category: "frontend",
    level: "Expert",
    description: "Structure sémantique et accessibilité web."
  },
  {
    id: "css",
    name: "CSS3",
    icon: getAssetPath("/data/images/CSS.png"),
    category: "frontend",
    level: "Expert",
    description: "Layouts modernes, animations et design responsif."
  },
  {
    id: "javascript",
    name: "JavaScript",
    icon: getAssetPath("/data/images/JavaScript.png"),
    category: "frontend",
    level: "Expert",
    description: "Logique applicative et interactivité dynamique."
  },
  {
    id: "nextjs",
    name: "Next.js",
    icon: getAssetPath("/data/images/NextJS.png"),
    category: "frontend",
    level: "Expert",
    description: "Développement full-stack avec SSR et App Router."
  },
  {
    id: "react",
    name: "React",
    icon: getAssetPath("/data/images/React_native.png"),
    category: "frontend",
    level: "Expert",
    description: "Interfaces modulaires basées sur les composants."
  },
  {
    id: "python",
    name: "Python",
    icon: getAssetPath("/data/images/Python.png"),
    category: "ai",
    level: "Avancé",
    description: "Scripting, automatisation et bases de l'IA."
  },
  {
    id: "php",
    name: "PHP",
    icon: getAssetPath("/data/images/PHP.png"),
    category: "backend",
    level: "Avancé",
    description: "Développement serveur et intégration SQL."
  },
  {
    id: "sql",
    name: "SQL",
    icon: getAssetPath("/data/images/PHP.png"),
    category: "backend",
    level: "Avancé",
    description: "Gestion et optimisation de bases de données."
  }
];
