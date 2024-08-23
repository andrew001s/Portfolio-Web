import { faDiscord, faFacebook, faGithub, faInstagram, faLinkedin, faTiktok, faTwitch, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className="absolute p-3 bg-gray-900 w-full left-0">
      <div className="items-center space-x-2 ">
        <a
          href="https://www.twitch.tv/elshandrew"
          target="_blank"
          rel="noopener"
          className=" text-white text-sm text-center "
          title="Visit my Twitch channel"
        >
          <FontAwesomeIcon icon={faTwitch} className="pr-1" />
        </a>
        <a 
            href="https://www.tiktok.com/@elshandrew"
            target="_blank"
            rel="noopener"
            className="text-white text-sm text-center"
            title="Visit my TikTok channel"
        >
            <FontAwesomeIcon icon={faTiktok} className="pr-1" />
        </a>
        <a 
            href="https://twitter.com/ElShandrew"
            target="_blank"
            rel="noopener"
            className="text-white text-sm text-center"
            title="Visit my Twitter"
        >
            <FontAwesomeIcon icon={faTwitter} className="pr-1" />
        </a>
        <a 
            href="https://www.youtube.com/channel/UCjxyFoqzFm45CJmOB6ANqiA"
            target="_blank"
            rel="noopener"
            className="text-white text-sm text-center"
            title="Visit my YouTube channel"
        >
            <FontAwesomeIcon icon={faYoutube} className="pr-1" />
        </a>
        <a 
            href="https://www.instagram.com/elshandrew/"
            target="_blank"
            rel="noopener"
            className="text-white text-sm text-center"
            title="Visit my Instagram"
        >
            <FontAwesomeIcon icon={faInstagram} className="pr-1" />
        </a>
        <a 
            href="https://discord.com/invite/KtCBAfneRy"
            target="_blank"
            rel="noopener"
            className="text-white text-sm text-center"
            title="Join my Discord server"
        >
            <FontAwesomeIcon icon={faDiscord} className="pr-1" />
        </a>
        <a 
            href="https://www.facebook.com/Shandrewvt"
            target="_blank"
            rel="noopener"
            className="text-white text-sm text-center"
            title="Visit my Facebook"
        >
            <FontAwesomeIcon icon={faFacebook} className="pr-1" />
        </a>
        <a 
            href="https://www.linkedin.com/in/andr%C3%A9s-rom%C3%A1n/"
            target="_blank"
            rel="noopener"
            className="text-white text-sm text-center"
            title="Visit my LinkedIn"
        >
            <FontAwesomeIcon icon={faLinkedin} className="pr-1" />
        </a>
        <a 
            href="https://github.com/andrew001s"
            target="_blank"
            rel="noopener"
            className="text-white text-sm text-center"
            title="Visit my GitHub"
        >
            <FontAwesomeIcon icon={faGithub} className="pr-1" />
        </a>
      </div>
      <h3 className="text-white text-sm text-center pt-2">© Shandrew - {year}</h3>
    </div>
  );
};
