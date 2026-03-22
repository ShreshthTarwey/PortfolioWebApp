import Hero from "@/components/home/Hero";
import About from "@/components/about/About";
import Education from "@/components/education/Education";
import Skills from "@/components/skills/Skills";
import Projects from "@/components/projects/Projects";
import Achievements from "@/components/achievements/Achievements";
import Certifications from "@/components/certifications/Certifications";
import CodePulse from "@/components/codepulse/CodePulse";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";
import PageWrapper from "@/components/layout/PageWrapper";

export default function Home() {
  return (
    <PageWrapper>
      <Hero />
      <div className="relative">
        <About />
        {/* <Education /> */}
        <Skills />
        <Projects />
        <Achievements />
        <Certifications />
        <CodePulse />
        <Contact />
      </div>
      <Footer />
    </PageWrapper>
  );
}
