import Hero from "@/components/Hero";
import About from "@/components/About";
import Archiving from "@/components/Archiving";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <Hero />
      <About />
      <Archiving />
      <Skills />
      <Projects />
      <Experience />
    </div>
  );
}
