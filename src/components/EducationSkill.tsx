"use client";

import { EducationExperienceType } from "@/types";
import { getData } from "@/utils/fetchData";
import Badge from "./Badge";
import Timeline from "./Timeline";

const EducationSkill = () => {
  const educationSkillData: EducationExperienceType = getData(
    "educations_skills"
  ) as EducationExperienceType;

  const { education_experience, skills } = educationSkillData;

  // make multiple array by category from skills
  const skillsByCategory = skills.reduce((acc, skill) => {
    const { category } = skill;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(skill);
    return acc;
  }, {} as Record<string, { name: string; category: string }[]>);

  return (
    <section className="section" id="skills">
      <h2 className="section-heading text-lg text-white">Education & Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <div className="grid grid-cols-2 gap-4">
            <Timeline
              data={education_experience.education}
              title="Education"
              icon={"FaGraduationCap"}
            />
            <Timeline
              data={education_experience.experience}
              title="Experience"
              icon={"FaBriefcase"}
            />
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold! bg-primary/20 text-white px-10 py-1.5 mb-10 w-max text-center mx-auto">
            Skills
          </h3>
          <div className="grid grid-cols-2 gap-x-8 gap-y-12 items-start ">
            {/* Frontend Skills */}
            <div className="flex flex-wrap gap-4 col-span-1 justify-center">
              {skillsByCategory["Frontend"]?.map((skill, index) => (
                <Badge key={`skill-frontend-${index}`} name={skill.name} />
              ))}
            </div>

            {/* Backend Skills */}
            <div className="flex flex-wrap  gap-4 col-span-1 justify-center">
              {skillsByCategory["Backend"]?.map((skill, index) => (
                <Badge key={`skill-backend-${index}`} name={skill.name} />
              ))}
            </div>
            {/* Tools Skills */}
            <div className="col-span-2">
              <div className="w-2/4 mx-auto flex flex-wrap gap-4  justify-center">
                {skillsByCategory["Tools"]?.map((skill, index) => (
                  <Badge key={`skill-tools-${index}`} name={skill.name} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSkill;
