import "@fontsource/fredoka-one";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faCloudArrowDown } from "@fortawesome/free-solid-svg-icons";
import download from "../../services/downloadCVHandler";

export const Home = () => {
  return (
    <div id="home">
      <div className="relative ">
        <h1 className="font-fredoka text-center">Hi, I'm Andrés 👋,</h1>
        <h1 className="font-fredoka text-center">Full Stack Developer.</h1>
      </div>

      <div className="flex flex-row justify-center items-center space-x-4  ">

        <div className="flex flex-col flex-wrap lg:relative lg:z-0 -z-10 lg:opacity-100 opacity-30 absolute ">
          <img
            className="drop-shadow-custom "
            width="350"
            height="150"
            src="https://i.ibb.co/Z1FmM0f/police.webp"
            alt="placeholder"
          />
        </div>
        <div className="flex flex-col text-lg text-left w-full">
          
          <ul>
            <li>
              • Information Systems Engineer, about to complete my degree.
            </li>
            <li>
              • Experienced in equipment maintenance, backend programming, and 3D design.
            </li>
            <li>
              • Proficient in multiple programming languages and comfortable working in .NET environments.
            </li>
            <li>
              • Strong knowledge in cybersecurity and databases.
            </li>
            <li>
              • Passionate about continuous learning and problem-solving.
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-center space-x-16 flex-wrap lg:pt-0 lg:space-y-0  space-y-6 pt-12">
        <button className="bg-transparent border-2 scale-125 border-white max-sm:w-80 max-lg:w-96  transition ease-in-out delay-100 hover:bg-blue-700 hover:border-blue-700  text-white font-bold py-2 px-4 rounded-full">
          <FontAwesomeIcon
            icon={faEnvelope}
            className="pr-2"
            style={{ color: "#ffffff" }}
          />
          Contact me
        </button>
        <button
          onClick={download}
          className="bg-transparent border-2 scale-125 border-white lg:-translate-x-0 -translate-x-9  max-sm:w-80 max-lg:w-96 transition ease-in-out delay-100 hover:bg-blue-700 hover:border-blue-700 text-white font-bold py-2 px-4 rounded-full"
        >
          <FontAwesomeIcon
            icon={faCloudArrowDown}
            className="pr-2"
            style={{ color: "#ffffff" }}
          />
          Download CV
        </button>
        <a
          href="https://www.linkedin.com/in/andr%C3%A9s-rom%C3%A1n/"
          target="_blank"
          rel="noopener"
          className="bg-transparent border-2 scale-125 border-white lg:-translate-x-0  -translate-x-9  max-sm:w-80 max-lg:w-96 transition ease-in-out delay-100 hover:bg-blue-700 hover:border-blue-700 hover:text-white text-white font-bold py-2 px-4 rounded-full"
        >
           <FontAwesomeIcon
              className="pr-1"
              icon={faLinkedin}
              style={{ color: "#ffffff" }}
            />
            LinkedIn
        </a>
        <a
          href="https://github.com/andrew001s"
          target="_blank"
          rel="noopener"
          className="bg-transparent border-2 scale-125 border-white lg:-translate-x-0  -translate-x-9 max-sm:w-80 max-lg:w-96 transition ease-in-out delay-100 hover:bg-blue-700 hover:border-blue-700 hover:text-white text-white font-bold py-2 px-4 rounded-full"
        >
           <FontAwesomeIcon
              className="pr-3"
              icon={faGithub}
              style={{ color: "#ffffff" }}
            />
            GitHub
        </a>
      </div>
    </div>
  );
};
