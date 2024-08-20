interface CardProps {
  title: string;
  Job: string;
  Date: string;
  Description: string;
}
export const ExperienceCard = ({
  title,
  Job,
  Date,
  Description,
}: CardProps) => {
  return (
    <div className="">
      <div className="sm:block hidden p-12 h-fit sm:w-full bg-gray-900 hover:bg-blue-700 hover:border-blue-700 border-white border-2 rounded-lg shadow-lg hover:scale-105 transition ease-in-out delay-75">
        <div className="flex items-center space-x-14">
          <div className="flex-initial">
            <h1 className="text-white text-2xl pl-3 pt-2 text-left  font-bold">
              {title}
            </h1>
            <h3 className="text-white text-2xl pl-3 pt-2 text-left ">{Job}</h3>
            <h3 className="text-white text-2xl pl-3 pt-2 text-left ">{Date}</h3>
          </div>
          <div className="flex-initial ">
            <h1 className="text-white text-2xl pl-3 pt-2 text-left ">
              {Description}
            </h1>
          </div>
        </div>
      </div>
      <div className="sm:hidden block">
        <div className=" bg-gray-900 hover:bg-blue-700 hover:border-blue-700 border-white border-2 rounded-lg">
          <h1 className="text-white text-2xl pl-3 pt-2 text-left  font-bold">
            {title}
          </h1>
          <h3 className="text-white text-2xl pl-3 pt-2 text-left ">{Job}</h3>
          <h3 className="text-white text-2xl pl-3 pt-2 text-left ">{Date}</h3>
          <h1 className="text-white text-2xl pl-3 pt-2 text-left ">
            {Description}
          </h1>
        </div>
      </div>
    </div>
  );
};
