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
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 gap-y-12 items-center">
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

        <div className="relative">
          <h3 className="text-lg font-semibold! bg-primary/20 text-white px-10 py-1.5 mb-10 w-max text-center mx-auto relative z-10">
            Skills
          </h3>

          {/* Arrow pointing to Frontend (from left) */}
          <svg
            className="absolute left-[15%] top-[45px] w-[120px] h-20 pointer-events-none"
            style={{ zIndex: 1 }}
          >
            <defs>
              <marker
                id="arrowhead-left"
                markerWidth="10"
                markerHeight="10"
                refX="9"
                refY="3"
                orient="auto"
              >
                <polygon points="0 0, 10 3, 0 6" fill="#4d79f6" />
              </marker>
            </defs>
            <path
              d="M 100 10 Q 60 10, 30 40"
              stroke="#4d79f6"
              strokeWidth="2"
              fill="none"
              markerEnd="url(#arrowhead-left)"
            />
          </svg>

          {/* Arrow pointing to Backend (from right) */}
          <svg
            className="absolute right-[15%] top-[45px] w-[120px] h-20 pointer-events-none"
            style={{ zIndex: 1 }}
          >
            <defs>
              <marker
                id="arrowhead-right"
                markerWidth="10"
                markerHeight="10"
                refX="9"
                refY="3"
                orient="auto"
              >
                <polygon points="0 0, 10 3, 0 6" fill="#4d79f6" />
              </marker>
            </defs>
            <path
              d="M 20 10 Q 60 10, 90 40"
              stroke="#4d79f6"
              strokeWidth="2"
              fill="none"
              markerEnd="url(#arrowhead-right)"
            />
          </svg>

          {/* Arrow pointing to Tools (from bottom) */}
          <svg
            className="absolute left-1/2 top-[45px] w-20 h-[140px] -translate-x-1/2 pointer-events-none"
            style={{ zIndex: 1 }}
          >
            <defs>
              <marker
                id="arrowhead-bottom"
                markerWidth="10"
                markerHeight="10"
                refX="9"
                refY="3"
                orient="auto"
              >
                <polygon points="0 0, 10 3, 0 6" fill="#4d79f6" />
              </marker>
            </defs>
            <path
              d="M 40 10 Q 40 60, 40 110"
              stroke="#4d79f6"
              strokeWidth="2"
              fill="none"
              markerEnd="url(#arrowhead-bottom)"
            />
          </svg>

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
