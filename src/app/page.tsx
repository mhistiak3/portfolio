import About from "@/components/About";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import EducationSkill from "@/components/EducationSkill";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main>
      <div className="container">
        <Hero />
        <About />
        <EducationSkill />
        <Achievements />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
