interface CardProps {
    title: string;
    src: string;
    text: string;
  }
  export const CardLarge = ({ title, src,text}: CardProps) => {
    return (
      <div className="flex flex-col hover:scale-105 hover:bg-blue-700 hover:border-blue-700 pt-3 transition ease-in-out delay-75 items-center justify-center space-x-8 lg:w-fit lg:h-48 bg-transparent border-white border-2 rounded-lg shadow-lg">
        <h1 className="text-white text-2xl">{title + ":"}</h1>
        <img src={src} alt={title} className="sm:p-3 sm:pr-32 sm:pl-32 pr-6 max-lg:pb-4"  />
        <p className= "max-lg:hidden block text-white text-xl pb-4">{text}</p>
      </div>
    ) 
  };
  