import { FC } from "react";
import { useDrag } from "react-dnd";

export const Image: FC<{ img: string; id: number }> = ({ img, id }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "image",
    item: { id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  return (
    <div
      className={`w-[70px] cursor-grab ${isDragging && "opacity-30"}`}
      ref={drag}
    >
      <img src={img} alt='img' />
    </div>
  );
};
