import "@fontsource/fredoka-one";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import { faCloudArrowDown } from "@fortawesome/free-solid-svg-icons";

export const Home = () => {
  return (
    <div>
      <div className="relative ">
        <h1 className="font-fredoka text-center">Hi, I'm Andrés 👋,</h1>
        <h1 className="font-fredoka text-center">Full Stack Developer.</h1>
      </div>

      <div className="flex flex-row justify-center items-center space-x-4  ">
        <div className="flex flex-col space-y-6 justify-center items-center  ">
          <a
            href="https://www.linkedin.com/in/andr%C3%A9s-rom%C3%A1n/"
            target="_blank"
            rel="noopener"
            className="bg-transparent border-2 scale-125 border-white transition ease-in-out delay-100 hover:bg-blue-700 hover:text-white hover:border-blue-700 text-white font-bold py-2 px-4 rounded-full"
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
            className=" bg-transparent border-2 scale-125 border-white transition ease-in-out delay-100 hover:border-gray-900 hover:bg-gray-900 hover:text-white text-white font-bold py-2 px-4 rounded-full"
          >
            <FontAwesomeIcon
              className="pr-3"
              icon={faGithub}
              style={{ color: "#ffffff" }}
            />
            GitHub
          </a>
        </div>
        <div className="flex flex-col flex-wrap relative ">
          <img
            className="drop-shadow-custom "
            width="350"
            height="150"
            src="https://i.ibb.co/Z1FmM0f/police.webp"
            alt="placeholder"
          />
        </div>
        <div className="flex flex-col  flex-wrap text-lg text-left">
          <ul>
            <li>
              💡 I like to explore new technologies and develop software
              solutions and quick hacks.
            </li>
            <li>
              🎓 I'm currently studying System Engineering at the Universidad
              Central del Ecuador.
            </li>
            <li>
              ✍️ In my free time, I draw in digital and make content in youtube
              as hobbies/side hustles.
            </li>
            <li>🤡 Vtuber.</li>
          </ul>
        </div>
      </div>
      <div className="flex justify-center space-x-16 flex-wrap">
        <button className="bg-transparent border-2 scale-125 border-white  transition ease-in-out delay-100 hover:bg-blue-700 hover:border-blue-700 text-white font-bold py-2 px-4 rounded-full">
          <FontAwesomeIcon icon={faEnvelope} className="pr-2" style={{ color: "#ffffff" }} />
          Contact me
        </button>
        <button className="bg-transparent border-2 scale-125 border-white  transition ease-in-out delay-100 hover:bg-blue-700 hover:border-blue-700 text-white font-bold py-2 px-4 rounded-full">
          <FontAwesomeIcon icon={faCloudArrowDown} className="pr-2" style={{ color: "#ffffff" }} />
          Download CV
        </button>
      </div>
    </div>
  );
};
