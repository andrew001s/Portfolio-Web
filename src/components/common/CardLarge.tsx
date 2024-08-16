interface CardProps {
    title: string;
    src: string;
  }
  export const CardLarge = ({ title, src,}: CardProps) => {
    return (
      <div className="flex flex-col pr-3 hover:scale-105 hover:bg-blue-700 hover:border-blue-700 transition ease-in-out delay-75 items-center justify-center space-x-8 w-fit h-48 bg-transparent border-white border-2 rounded-lg shadow-lg">
        <h1 className="text-white text-2xl">{title + ":"}</h1>
        <img src={src} alt={title} className="p-3" />
      </div>
    ) 
  };
  