import "@fontsource/fredoka-one";

interface SeparatorProps {
  text: string;
}

export const Separator = ({text}:SeparatorProps) => {
  return (
    <div className="flex w-full pt-11 items-center rounded-full">
        <div className="flex-1 border-b border-white "  ></div>
        <span className="text-white text-2xl font-fredoka leading-8 px-8 py-3">{text}</span>
        <div className="flex-1 border-b  border-white" > </div>
    </div>
  )
}
