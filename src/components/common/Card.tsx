interface CardProps {
  title: string;
  src: string;
  text: string;
}
export const Card = ({ title, src,text}: CardProps) => {
  return (
    <div className="flex flex-col items-center justify-center lg:w-96 h-48 bg-transparent hover:bg-blue-700 hover:border-blue-700 border-white border-2 rounded-lg shadow-lg hover:scale-105 transition ease-in-out delay-75">
      <h1 className="text-white text-2xl">{title + ":"}</h1>
      <img src={src} alt={title} className="p-3" />
      <p className="text-white text-xl">{text}</p>
    </div>
  ) 
};
