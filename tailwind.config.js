// tailwind.config.js
/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line @typescript-eslint/no-require-imports
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: [
        './src/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                'background': 'var(--color-background)',
                'foreground': 'var(--color-foreground)',
                'primary': 'var(--color-primary)',
                'secondary': 'var(--color-secondary)',
                'royal': 'var(--color-royal)',
                'muted': 'var(--color-muted)',
                'muted-foreground': 'var(--color-muted-foreground)',
            },
        },
    },
    plugins: [],
}