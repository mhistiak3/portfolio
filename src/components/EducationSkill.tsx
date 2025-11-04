"use client";
import { EducationSkillType } from "@/types";
import { getData } from "@/utils/fetchData";
import { useEffect, useState } from "react";
import DynamicIcon from "./DynamicIcon";

const EducationSkill = () => {
  const educationSkillData: EducationSkillType = getData(
    "educations_skills"
  ) as EducationSkillType;

  const { education_experience, skills } = educationSkillData;
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);
  return (
    <section className="section" id="skills">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="section-heading text-lg text-white">
            Education & Skills
          </h2>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <DynamicIcon
                icon="FaGraduationCap"
                className="text-5xl text-secondary mb-1.5"
              />

              <h3 className="text-base mb-6">Education</h3>
              <div className="timeline_wrapper">
                {education_experience.education.map((edu, index) => (
                  <div key={`education-${index}`} className="timeline_item">
                    <p>{edu.year}</p>
                    <p className=" text-primary/80">{edu.degree}</p>
                    <p>{edu.institution}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <DynamicIcon
                icon="FaBriefcase"
                className="text-5xl text-secondary mb-1.5"
              />
              <h3 className="text-base mb-6">Experience</h3>
              <div className="timeline_wrapper">
                {education_experience.experience.map((edu, index) => (
                  <div key={`education-${index}`} className="timeline_item">
                    <p>{edu.year}</p>
                    <p className=" text-primary/80">{edu.position}</p>
                    <p>{edu.company}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-y-10">
          {skills.map((skill, index) => (
            <div key={`skill-${index}`}>
              <h3 className="font-medium! text-sm uppercase mb-2">
                {skill.name}
              </h3>
              <div className="border border-primary/40 h-1 rounded-full overflow-hidden p-[3px]">
                <span
                  className="h-px bg-primary block transition-all duration-1000 ease-out"
                  style={{ width: animate ? `${skill.level}%` : "0%" }}
                ></span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSkill;
