import "@fontsource/fredoka-one";

interface SeparatorProps {
  text: string;
  id: string;
}

export const Separator = ({text,id}:SeparatorProps) => {
  return (
    <div id={id} className="flex w-full lg:pt-11 items-center rounded-full">
        <div className="flex-1 border-b border-white "  ></div>
        <span className="text-white text-2xl font-fredoka leading-8 px-8 py-3">{text}</span>
        <div className="flex-1 border-b  border-white" > </div>
    </div>
  )
}
