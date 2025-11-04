import { AchievementsType } from "@/types";
import { getData } from "@/utils/fetchData";
import { FaRegSmile, FaThermometerEmpty } from "react-icons/fa";
import { FaTrophy } from "react-icons/fa6";

const Achievements = () => {
  const achievementsData: AchievementsType = getData(
    "achievements"
  ) as AchievementsType;

  return (
    <section className="section bg-body/50">
      <div className="grid sm:grid-cols-3 gap-y-10">
        <div className="flex items-center gap-x-2">
          <FaThermometerEmpty className="text-5xl text-yellow-400" />

          <div>
            <h3 className="text-2xl font-medium! mb-1 text-white">
              {achievementsData.completed_projects}+
            </h3>
            <p className="text-sm">Completed Projects</p>
          </div>
        </div>

        <div className="flex items-center gap-x-2">
          <FaRegSmile className="text-5xl text-primary" />

          <div>
            <h3 className="text-2xl font-medium! mb-1 text-white">
              {achievementsData.happy_clients}+
            </h3>
            <p className="text-sm">Happy Clients</p>
          </div>
        </div>

        <div className="flex items-center gap-x-2">
          <FaTrophy className="text-5xl text-secondary" />

          <div>
            <h3 className="text-2xl font-medium! mb-1 text-white">
              {achievementsData.years_of_experience}+
            </h3>
            <p className="text-sm">Years of Experience</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
