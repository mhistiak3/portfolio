import { PortfolioType } from "@/types";
import { getData } from "@/utils/fetchData";

import ProjectGallery from "./ProjectGallery";
import Testimonials from "./Testimonials";
const Portfolio = () => {
  const portfolioData = getData("portfolio") as unknown as PortfolioType;
  const { testimonials, projects } = portfolioData;

  return (
    <section className="section">
      <h2 className="section-heading text-lg text-white">Portfolio & Work</h2>

      <div className="md:grid md:grid-cols-2 gap-6 mt-6 flex flex-col-reverse gap-y-12">
        {/* Swiper */}
        <Testimonials testimonials={testimonials} />

        {/* gallery project */}
        <ProjectGallery projects={projects} />
      </div>
    </section>
  );
};

export default Portfolio;
