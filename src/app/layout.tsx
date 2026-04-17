// src/app/layout.tsx
import "./globals.css";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";
import AuraBackground from "@/components/AuraBackground";
import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";
import { BASE_URL } from "@/utils/env";
import { GoogleTagManager } from '@next/third-parties/google';

const baseUrl = BASE_URL;

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
    url: baseUrl,
    siteName: "Portfolio Killian Fievet",
    title: "Portfolio Killian Fievet - Développeur Web",
    description: "Découvrez mes projets et compétences en développement web moderne.",
    images: [
      {
        url: `${baseUrl}/og-image.png`,
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
    images: [`${baseUrl}/og-image.png`],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  metadataBase: new URL(baseUrl),
  alternates: {
    canonical: baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`,
  },
  verification: {
    google: "6BDn5Y_D6qLr8TTu9tryKW3xzzpuomMKES5-sa_8pts",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Killian Fievet",
  "url": baseUrl,
  "jobTitle": "Développeur Web",
  "sameAs": [
    "https://github.com/Vexyuu",
    "https://www.linkedin.com/in/killian-fievet-4a3788287"
  ],
  "image": `${baseUrl}/icon1.png`,
  "description": "Développeur web passionné spécialisé en React et Next.js"
};

const inter = Inter({ subsets: ["latin"], display: "swap" });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" suppressHydrationWarning className={inter.className}>
      <head>
        {/* ✅ la meta de Google Search Console */}
        <meta
          name="google-site-verification"
          content="6BDn5Y_D6qLr8TTu9tryKW3xzzpuomMKES5-sa_8pts"
        />
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased hide-cursor">
        <GoogleTagManager gtmId="GTM-WRBS4SJ3" />
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-WRBS4SJ3"
            height="0" 
            width="0" 
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* Ajout du provider global */}
        <ThemeProvider attribute="class" defaultTheme="dark" forcedTheme="dark">
          {/* <CustomCursor /> */}
          <AuraBackground />
          <Navbar />
          <main className="w-full flex flex-col items-center relative z-10">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}