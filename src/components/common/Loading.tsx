import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

export const Loading = () => {
  return (
    <div className="items-center scale-150">
      <FontAwesomeIcon icon={faSpinner} className="text-white text-4xl animate-spin" />
      <h1 className="text-white text-2xl">Loading...</h1>
    </div>
  );
};
