// tailwind.config.js
/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme'); // Ajout de l'import pour la police

module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            fontFamily: { // Définition de la police Poppins
                sans: ['Poppins', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                // Mappage des variables CSS dans Tailwind, sans la fonction hsl()
                'background': 'hsl(var(--color-background))',
                'foreground': 'hsl(var(--color-foreground))',
                'primary': 'hsl(var(--color-primary))',
                'secondary': 'hsl(var(--color-secondary))',
                'accent': 'hsl(var(--color-accent))',
                'muted': 'hsl(var(--color-muted))',
                // Ajout des couleurs du mode clair pour les textes mutés dans About.tsx
                'muted-foreground': 'hsl(var(--color-muted-foreground))',
            },
        },
    },
    plugins: [],
}