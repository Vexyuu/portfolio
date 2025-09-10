// src/app/layout.tsx
import "./globals.css";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "next-themes";

export const metadata = {
  title: {
    default: "Portfolio Killian Fievet",
    template: "%s | Killian Fievet"
  },
  description: "Découvrez le portfolio de Killian Fievet, développeur web passionné spécialisé en React, Next.js et développement moderne.",
  keywords: ["Killian Fievet", "portfolio développeur", "React", "Next.js", "Tailwind", "développeur web", "freelance"],
  authors: [{ name: "Killian Fievet" }],
  creator: "Killian Fievet",
  publisher: "Killian Fievet",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://vexyuu.github.io/portfolio",
    siteName: "Portfolio Killian Fievet",
    title: "Portfolio Killian Fievet - Développeur Web",
    description: "Découvrez mes projets et compétences en développement web moderne.",
    images: [
      {
        url: "https://vexyuu.github.io/portfolio/icon1.png",
        width: 1200,
        height: 630,
        alt: "Portfolio Killian Fievet",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio Killian Fievet",
    description: "Développeur web passionné spécialisé en React et Next.js",
    images: ["https://vexyuu.github.io/portfolio/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  metadataBase: new URL("https://vexyuu.github.io/portfolio"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        {/* ✅ la meta de Google Search Console */}
        <meta
          name="google-site-verification"
          content="5pd-z3HzxVHsbikp2ERm4HR-ddUabKTS7YMLk_Z9bMc"
        />
      </head>
      <body>
        {/* Ajout du provider global */}
        <ThemeProvider attribute="data-theme" defaultTheme="system" enableSystem>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}