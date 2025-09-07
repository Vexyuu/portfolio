"use client"
import { useEffect, useState } from "react"

export default function ThemeToggle() {
    const [theme, setTheme] = useState("light")

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme)
    }, [theme])

    return (
        <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="px-4 py-2 bg-secondary text-background rounded"
        >
            {theme === "light" ? "🌙" : "☀️"}
        </button>
    )
}
