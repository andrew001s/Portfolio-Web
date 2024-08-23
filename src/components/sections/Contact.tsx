import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

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
    </div>
  );
};
