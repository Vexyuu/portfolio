import {
    GraduationCap,
    Briefcase,
    Award,
    BookOpen,
    LucideIcon
} from "lucide-react";

export interface TimelineItem {
    type: "education" | "work";
    icon: LucideIcon;
    title: string;
    organization: string;
    location: string;
    period: string;
    description: string[];
    skills?: string[];
    isCurrent?: boolean;
}

export const timelineData: TimelineItem[] = [
    {
        type: "work",
        icon: Briefcase,
        title: "Alternant Chargé de projets SI",
        organization: "Audiens",
        location: "Paris",
        period: "2025 - 2026",
        isCurrent: true,
        description: [
            "Développement et amélioration d'applications critiques en Java (JSP) et Jahia",
            "Analyse technique et correction d'anomalies en environnement de production",
            "Participation active aux rituels Agile Scrum (Daily, Sprint Review, Retro)",
            "Déploiement de nouvelles fonctionnalités en réponse aux besoins métiers",
            "Rédaction de documentations techniques et fonctionnelles"
        ],
        skills: ["Java", "Maven", "Jahia", "JavaScript", "MySQL", "GitLab", "Jira", "Agile"]
    },
    {
        type: "education",
        icon: GraduationCap,
        title: "Licence MIAGE",
        organization: "Université Paris 1 Panthéon-Sorbonne",
        location: "Paris",
        period: "2025 - 2026",
        isCurrent: true,
        description: [
            "Méthodes Informatiques Appliquées à la Gestion des Entreprises",
            "Spécialisation en systèmes d'information et génie logiciel"
        ]
    },
    {
        type: "work",
        icon: Briefcase,
        title: "Stage Développeur Web",
        organization: "Audiens",
        location: "Paris",
        period: "Janv — Fév 2025",
        description: [
            "Maintenance évolutive du portail web institutionnel",
            "Hackathon interne : OCR Tesseract + IA Ollama pour l'analyse de documents"
        ],
        skills: ["HTML/CSS", "JavaScript", "PHP", "OCR", "AI Integration"]
    },
    {
        type: "education",
        icon: GraduationCap,
        title: "BTS SIO (Option SLAM)",
        organization: "Prepa Aurlom BTS+",
        location: "Paris",
        period: "2023 - 2025",
        description: [
            "Services Informatiques aux Organisations - Solutions Logicielles et Applications Métiers",
            "Major de promotion sur les projets de développement"
        ]
    },
    {
        type: "work",
        icon: Briefcase,
        title: "Stage Support IT",
        organization: "Cogemust",
        location: "Combs-la-Ville",
        period: "Avril — Juin 2024",
        description: [
            "Support utilisateur de niveau 1 et 2",
            "Supervision et maintenance du parc réseau informatique"
        ],
        skills: ["Windows Server", "Réseaux", "Troubleshooting"]
    },
    {
        type: "work",
        icon: Award,
        title: "CDD Magasinier / Logistique",
        organization: "Cogemust",
        location: "Combs-la-Ville",
        period: "Déc 2023 — Avril 2024",
        description: [
            "Optimisation de la gestion des flux logistiques",
            "Saisie et suivi des stocks via ERP (Oxalys, Cegid)"
        ],
        skills: ["ERP", "Logistique", "Gestion de flux"]
    },
    {
        type: "education",
        icon: BookOpen,
        title: "Baccalauréat Général",
        organization: "Lycée La Mare Carrée",
        location: "Moissy-Cramayel",
        period: "2020 - 2023",
        description: [
            "Spécialités Mathématiques & NSI (Numérique et Sciences Informatiques)",
            "Mention Bien"
        ]
    }
];
