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
    if (isDragging) {
      setInputValue(text);
    }
  }, [isDragging, text]);
  return (
    <div className={`${isDragging ? "opacity-30" : "opacity-100"}`} ref={drag}>
      <input
        type='text'
        placeholder='Type here'
        className='input input-bordered w-full max-w-xs '
        disabled={isDragging}
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
    </div>
  );
};

export default Input;
