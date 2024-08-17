import { useEffect, useState } from "react";
import { ExperienceCard } from "../common/ExperienceCard"
import { getExperience } from "../../services/experienceHandler";

export const Experience = () => {
  const [experiences, setExperiences] = useState([]);
  useEffect(() => {
    getExperience().then((res:any) => {
      setExperiences(res.data);
    });
  }, []);
  return (
    <div className="grid grid-rows-1 grid-flow-row gap-4">
        {experiences.map((experience:any) => (
          <ExperienceCard
            title={experience.company}
            Job={experience.position}
            Date={experience.date}
            Description={experience.description}
            
          />
        ))}
    </div>
  )
}
