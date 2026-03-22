import Hero from "@/components/home/Hero";
import About from "@/components/about/About";
import Skills from "@/components/skills/Skills";
import Projects from "@/components/projects/Projects";
import Achievements from "@/components/achievements/Achievements";
import Certifications from "@/components/certifications/Certifications";
import PageWrapper from "@/components/layout/PageWrapper";

export default function Home() {
  return (
    <PageWrapper>
      <Hero />
      <div className="relative">
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Certifications />
      </div>
    </PageWrapper>
  );
}
