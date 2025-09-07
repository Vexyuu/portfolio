// src/app/page.tsx

import Head from "next/head";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio - Killian Fievet</title>
        <meta
          name="description"
          content="Portfolio de Killian Fievet, développeur web et mobile."
        />
        <meta
          name="keywords"
          content="Killian Fievet, portfolio, développeur web, React, Next.js, Tailwind"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://vexyuu.github.io/portfolio" />
      </Head>
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
