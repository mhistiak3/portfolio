import About from "@/components/About";
import EducationSkill from "@/components/EducationSkill";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main>
      <div className="container">
        <Hero />
        <About />
        <EducationSkill />
      </div>
    </main>
  );
}
