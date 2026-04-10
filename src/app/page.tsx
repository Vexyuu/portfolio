import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
// import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import { BASE_URL } from "@/utils/env";

export const metadata = {
  title: "Accueil",
  description: "Portfolio de Killian Fievet, développeur web et mobile spécialisé en React, Next.js, et technologies modernes. Découvrez mes projets et compétences.",
  keywords: ["Killian Fievet", "portfolio", "développeur web", "développeur mobile", "React", "Next.js", "Tailwind", "JavaScript", "TypeScript"],
  openGraph: {
    title: "Portfolio - Killian Fievet",
    description: "Développeur web et mobile passionné. Découvrez mes projets et compétences.",
    url: BASE_URL,
    type: "website",
  },
  alternates: {
    canonical: BASE_URL,
  },
};

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
      {/* <Testimonials /> */}
      <Contact />
    </main>
  );
}
