import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faTiktok } from "@fortawesome/free-brands-svg-icons";
import { faTwitch } from "@fortawesome/free-brands-svg-icons";

import Swal from "sweetalert2";
export const Contact = () => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText("andresroman45678@gmail.com");
    Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    }).fire({
      icon: "success",
      title: "Email copied to clipboard",
    });
  };
  return (
    <div className="">
      <div className="pb-4">
        <h1 className="text-center pb-6">📧 Email</h1>
        <p className="pb-6">
          andresroman45678@gmail.com{" "}
          <button
            onClick={copyToClipboard}
            className="border border-white rounded-full hover:text-black hover:bg-white"
          >
            <FontAwesomeIcon icon={faCopy} /> Copy
          </button>{" "}
        </p>
        <a
          href="mailto:andresroman45678@gmail.com"
          className="bg-transparent border-2  scale-125 border-white transition ease-in-out delay-100 hover:text-black hover:bg-white hover:border-white text-white font-bold py-2 px-4 rounded-full"
        >
          <FontAwesomeIcon className="pr-1" icon={faEnvelope} />
          Email
        </a>
      </div>
      <div className="sm:flex sm:flex-wrap sm:space-y-0 space-y-6 justify-center sm:space-x-6  sm:pt-8 pt-20 scale-150 pb-14 ">
        <div className="col-span-2">
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
        </div>
        <div className="col-span-2">
          <a
            href="https://github.com/andrew001s"
            target="_blank"
            rel="noopener"
            className="bg-transparent border-2 scale-125 border-white transition ease-in-out delay-100 hover:bg-gray-950 hover:text-white hover:border-gray-950 text-white font-bold py-2 px-4 rounded-full"
          >
            <FontAwesomeIcon
              className="pr-1"
              icon={faGithub}
              style={{ color: "#ffffff" }}
            />
            GitHub
          </a>
        </div>
        <div className="col-span-2">
          <a
            href="https://www.facebook.com/Shandrewvt"
            target="_blank"
            rel="noopener"
            className="bg-transparent border-2 scale-125 border-white transition ease-in-out delay-100 hover:bg-blue-700 hover:text-white hover:border-blue-700 text-white font-bold py-2 px-4 rounded-full"
          >
            <FontAwesomeIcon
              className="pr-1"
              icon={faFacebook}
              style={{ color: "#ffffff" }}
            />
            Facebook
          </a>
        </div>
        <div className="col-span-3">
          <a
            href="https://discord.com/invite/KtCBAfneRy"
            target="_blank"
            rel="noopener"
            className="bg-transparent border-2 scale-125 border-white transition ease-in-out delay-100 hover:bg-slate-600 hover:text-white hover:border-slate-600 text-white font-bold py-2 px-4 rounded-full"
          >
            <FontAwesomeIcon
              className="pr-1"
              icon={faDiscord}
              style={{ color: "#ffffff" }}
            />
            Discord
          </a>
        </div>
        <div className="col-span-3">
          <a
            href="https://www.instagram.com/elshandrew/"
            target="_blank"
            rel="noopener"
            className="bg-transparent border-2 scale-125 border-white transition ease-in-out delay-100 hover:bg-orange-500 hover:text-white hover:border-orange-500 text-white font-bold py-2 px-4 rounded-full"
          >
            <FontAwesomeIcon
              className="pr-1"
              icon={faInstagram}
              style={{ color: "#ffffff" }}
            />
            Instagram
          </a>
        </div>
      </div>
      <div className="flex flex-wrap  justify-center space-x-6  scale-150 sm:block hidden">
        <div className="col-span-3">
          <a
            href="https://www.youtube.com/channel/UCjxyFoqzFm45CJmOB6ANqiA"
            target="_blank"
            rel="noopener"
            className="bg-transparent border-2 scale-125 border-white transition ease-in-out delay-100 hover:bg-red-600 hover:text-white hover:border-red-600 text-white font-bold py-2 px-4 rounded-full"
          >
            <FontAwesomeIcon
              className="pr-1"
              icon={faYoutube}
              style={{ color: "#ffffff" }}
            />
            Youtube
          </a>
        </div>
        <div className="col-span-3">
          <a
            href="https://twitter.com/ElShandrew"
            target="_blank"
            rel="noopener"
            className="bg-transparent border-2 scale-125 border-white transition ease-in-out delay-100 hover:bg-blue-400 hover:text-white hover:border-blue-400 text-white font-bold py-2 px-4 rounded-full"
          >
            <FontAwesomeIcon
              className="pr-1"
              icon={faTwitter}
              style={{ color: "#ffffff" }}
            />
            Twitter
          </a>
        </div>
        <div className="col-span-3">
          <a
            href="https://www.tiktok.com/@elshandrew"
            target="_blank"
            rel="noopener"
            className="bg-transparent border-2 scale-125 border-white transition ease-in-out delay-100 hover:bg-black hover:text-white hover:border-black text-white font-bold py-2 px-4 rounded-full"
          >
            <FontAwesomeIcon
              className="pr-1"
              icon={faTiktok}
              style={{ color: "#ffffff" }}
            />
            TikTok
          </a>
        </div>
        <div className="col-span-3">
          <a
            href="https://twitch.tv/elshandrew"
            target="_blank"
            rel="noopener"
            className="bg-transparent border-2 scale-125 border-white transition ease-in-out delay-100 hover:bg-purple-800 hover:text-white hover:border-purple-800 text-white font-bold py-2 px-4 rounded-full"
          >
            <FontAwesomeIcon
              className="pr-1"
              icon={faTwitch}
              style={{ color: "#ffffff" }}
            />
            Twitch
          </a>
        </div>
      </div>
      

    </div>
  );
};
