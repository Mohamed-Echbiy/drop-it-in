import React, { FC, useEffect, useState } from "react";
import { useDrag } from "react-dnd";

const CheckBox: FC<{
  id: number;
  value?: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}> = ({ id, value = "react", setValue }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "checkbox",
    item: { id: id, type: "checkbox" },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  const [checkValue, setCheckValue] = useState<string>(value);
  useEffect(() => {
    if (isDragging) {
      setValue(checkValue);
    }
  }, [isDragging, checkValue]);
  return (
    <div
      className={`checkbox-container  w-fit p-4 rounded-md bg-white cursor-grab ${
        isDragging && "opacity-30"
      }`}
      ref={drag}
    >
      <select
        className='p-2 border border-solid border-black rounded cursor-pointer focus:outline-none bg-white capitalize'
        name='tech'
        id='Tech'
        value={checkValue}
        onChange={(e) => setCheckValue(e.target.value)}
      >
        <option className='text-lg capitalize cursor-pointer' value='react'>
          react
        </option>
        <option className='text-lg capitalize cursor-pointer' value='vue'>
          vue
        </option>
        <option className='text-lg capitalize cursor-pointer' value='angular'>
          angular
        </option>
      </select>
    </div>
  );
};

export default CheckBox;
