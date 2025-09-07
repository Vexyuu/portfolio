/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class", '[data-theme="dark"]'],
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                primary: "var(--primary)",
                secondary: "var(--secondary)",
                accent: "var(--accent)",
                muted: "var(--muted)",
            },
            fontFamily: {
                sans: "var(--font-sans)",
                mono: "var(--font-mono)",
            },
        },
    },
    plugins: [],
};
