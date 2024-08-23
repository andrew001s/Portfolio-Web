import { useEffect, useState } from "react";
import { ExperienceCard } from "../common/ExperienceCard"
import { getExperience } from "../../services/experienceHandler";
import { Loading } from "../common/Loading";

export const Experience = () => {
  const [experiences, setExperiences] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getExperience().then((res:any) => {
      setExperiences(res.data);
      setIsLoading(false);
    });
  }, []);
  return (
    
    <div className="grid grid-rows-1 grid-flow-row gap-4">
      {isLoading && <div className="flex justify-center items-center p-4"><Loading /></div>}
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
