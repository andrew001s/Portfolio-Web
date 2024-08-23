import { faServer } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

interface CardProps {
  title: string;
  src: string;
  tech: string[];
  code: string;
  project: string;
  description: string;
}
export const ProjectCard = ({
  title,
  src,
  tech,
  code,
  project,
  description,
}: CardProps) => {
  return (
    <div className=" bg-gray-900 w-full lg:h-full  h-fit hover:bg-blue-700 hover:border-blue-700 border-white border-2 rounded-lg shadow-lg hover:scale-105 transition ease-in-out delay-75">
      <div className="flex flex-row flex-wrap space-x-2 pl-4 pt-4">
        {tech.map((tech) => (
          <div className="border border-white rounded-full  ">
            <p className="text-white text-base lg:min-w-20 pr-4 pl-4">{tech}</p>
          </div>
        ))}
      </div>
      <p className="pt-4 text-left pl-4">{description}</p>
      <div className="flex flex-col">
        <h1 className="text-white text-2xl pl-3 pt-2 text-left  font-fredoka">
          {title + ":"}
        </h1>
        <div className="flex justify-center h-80">
          <img
            src={src}
            alt={title}
            className="p-3 rounded-2xl shadow-md drop-shadow-custom-md "
          />
        </div>
      </div>
      <div className=" flex justify-center space-x-4 pt-4 lg:pb-0 pb-4">
        {project && (
          <a href={project} target="_blank" rel="noreferrer">
            <button className="bg-gray-900 border border-white  text-white w-full  rounded-b-lg  hover:bg-gray-950 ">
              <FontAwesomeIcon icon={faServer} color="fffff" /> Project
            </button>
          </a>
        )}
        {code && (
          <a href={code} target="_blank" rel="noreferrer">
            <button className="bg-gray-900 text-white w-fullrounded-b-lg hover:bg-gray-950 border border-white">
              <FontAwesomeIcon icon={faGithub} color="fffff" /> Code
            </button>
          </a>
        )}
      </div>
    </div>
  );
};
