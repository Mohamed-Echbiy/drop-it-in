import { FC } from "react";
import { useDrag } from "react-dnd";

const Text: FC<{ text: string; id: number }> = ({ text, id }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "text",
    item: { id: id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  return (
    <div
      className={`text-container px-3 py-2 rounded-md cursor-grab w-fit text-lg text-blue-800 bg-white  ${
        isDragging ? "opacity-30" : ""
      }`}
      ref={drag}
      touch-action='none'
    >
      {text}
    </div>
  );
};

export default Text;
