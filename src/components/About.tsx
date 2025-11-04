import { AboutType } from "@/types";
import { getData } from "@/utils/fetchData";

const About = () => {
  const aboutData: AboutType = getData("about") as AboutType;
  return (
    <section className="section">
      <h2 className="section-heading text-lg text-white">About Me</h2>
      <div className="grid md:grid-cols-12 items-center gap-y-12">
        <div className="md:col-span-7 lg:col-span-8">
          <h3 className="text-2xl text-primary mb-4">{aboutData.title}</h3>
          <p className="text-sm mb-6 w-11/12 md:w-7/10 leading-relaxed">
            {aboutData.description}
          </p>
          <a href={aboutData.cv} className="btn btn-primary">
            Download CV
          </a>
        </div>

        <div className="md:col-span-5 lg:col-span-4">
          <ul className="personal_info">
            <li>
              <b>Full Name</b>
              <span>:</span>
              {aboutData.personal_info.full_name}
            </li>
            <li>
              <b>Date of Birth</b>
              <span>:</span>
              <span>{aboutData.personal_info.date_of_birth}</span>
            </li>
            <li>
              <b>Nationality</b>
              <span>:</span>
              <span>{aboutData.personal_info.nationality}</span>
            </li>
            <li>
              <b>Spoken Languages</b>
              <span>:</span>
              <span>{aboutData.personal_info.spoken_languages}</span>
            </li>
            <li>
              <b>Interests</b>
              <span>:</span>
              <span>{aboutData.personal_info.interests}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
