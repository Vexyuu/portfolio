// tailwind.config.js
/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line @typescript-eslint/no-require-imports
const defaultTheme = require('tailwindcss/defaultTheme'); // Ajout de l'import pour la police

module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            fontFamily: { // Définition de la police Inter
                sans: ['Inter', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                // Mappage des variables CSS dans Tailwind, sans la fonction hsl()
                'background': 'hsl(var(--color-background) / <alpha-value>)',
                'foreground': 'hsl(var(--color-foreground) / <alpha-value>)',
                'primary': 'hsl(var(--color-primary) / <alpha-value>)',
                'secondary': 'hsl(var(--color-secondary) / <alpha-value>)',
                'accent': 'hsl(var(--color-accent) / <alpha-value>)',
                'muted': 'hsl(var(--color-muted) / <alpha-value>)',
                'muted-foreground': 'hsl(var(--color-muted-foreground) / <alpha-value>)',
            },
        },
    },
    plugins: [],
}