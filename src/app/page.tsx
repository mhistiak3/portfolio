import About from "@/components/About";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import EducationSkill from "@/components/EducationSkill";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";

export default function Home() {
  return (
    <main>
      <div className="container">
        <Hero />
        <About />
        <EducationSkill />
        <Achievements />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
