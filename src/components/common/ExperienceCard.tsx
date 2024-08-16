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
    <div className="p-12 h-fit w-full bg-gray-900 hover:bg-blue-700 hover:border-blue-700 border-white border-2 rounded-lg shadow-lg hover:scale-105 transition ease-in-out delay-75">
      <div className="flex items-center space-x-14">
        <div className="flex-initial">
          <h1 className="text-white text-2xl pl-3 pt-2 text-left  font-bold">
            {title + ":"}
          </h1>
          <h1 className="text-white text-2xl pl-3 pt-2 text-left ">
            {Job + ":"}
          </h1>
          <h1 className="text-white text-2xl pl-3 pt-2 text-left ">
            {Date + ":"}
          </h1>
        </div>
        <div className="flex-initial ">
          <h1 className="text-white text-2xl pl-3 pt-2 text-left ">
            {Description + ":"}
          </h1>
        </div>
      </div>
    </div>
  );
};
