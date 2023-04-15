import React, { useState, FC, useCallback, useEffect } from "react";
import { useDrag } from "react-dnd";

const Input: FC<{
  id: number;
  value?: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
}> = ({ id, value = "", setInputValue }) => {
  const [text, setText] = useState<string>(value);

  const [{ isDragging }, drag] = useDrag(() => ({
    type: "input",
    item: { id: id, type: "input" },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  useEffect(() => {
    setInputValue(text);
  }, [isDragging, text]);

  return (
    <div
      className={`${isDragging ? "opacity-30" : "opacity-100"}`}
      ref={text ? drag : null}
    >
      <input
        type='text'
        placeholder='please type before drag'
        className='input input-bordered w-full max-w-xs '
        disabled={isDragging}
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
    </div>
  );
};

export default Input;
