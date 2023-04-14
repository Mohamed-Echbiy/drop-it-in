import React, { FC, useState } from "react";
import { useDrop } from "react-dnd";
import Text from "./fragments/Text";
import CheckBox from "./fragments/CheckBox";
import Input from "./fragments/Input";

import { toast } from "react-toastify";
import { Angry, Smile } from "./fragments/Icons";
import { dataTypes } from "../types/dataTypes";

const RightArea: FC<dataTypes> = ({
  collections,
  inputValue,
  checkboxValue,
  setInputValue,
  setCheckboxValue,
  setCollections,
  rightArea,
  setRightArea,
  leftArea,
  setLeftArea,
}) => {
  // this fc control if the type is input or checkbox just to minimize the amout of code
  const controleInput_Check = (type: string, id: number) => {
    if (type === "input") {
      setRightArea((pre) => [
        ...pre,
        {
          id: id,
          component: (
            <Input value={inputValue} id={id} setInputValue={setInputValue} />
          ),
        },
      ]);
    }
    if (type === "checkbox") {
      setRightArea((pre) => [
        ...pre,
        {
          id: id,
          component: (
            <CheckBox
              id={id}
              setValue={setCheckboxValue}
              value={checkboxValue}
            />
          ),
        },
      ]);
    }
  };

  const [{ isOver }, drop] = useDrop(
    () => ({
      accept: ["text", "image", "input", "checkbox"],

      drop: (item: { id: number; type?: string }) => DropFc(item.id, item.type),
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
      }),
    }),
    [collections, rightArea, inputValue, checkboxValue, leftArea]
  );
  const DropFc = (id: number, type?: string) => {
    const component = collections.filter((collection) => collection.id === id);
    const componentRight = rightArea.filter(
      (collection) => collection.id === id
    );
    const componentLeft = leftArea.filter((collection) => collection.id !== id);
    const theTargetLeftComponent = leftArea.find(
      (collection) => collection.id === id
    );

    const restOfTheCollection = collections.filter(
      (collection) => collection.id !== id
    );

    setCollections(restOfTheCollection);
    if (!!component.length) {
      if (type === "input" || type === "checkbox") {
        controleInput_Check(type, id);
      } else {
        setRightArea((pre) => [...pre, ...component]);
      }
    } else if (!!componentRight.length) {
      // this else to prevent item from being duplicated
      if (type === "input" || type === "checkbox") {
        controleInput_Check(type, id);
      }
      toast.info("item has already been added", {
        autoClose: 1500,
        theme: "dark",
      });
      return undefined;
    } else if (!!theTargetLeftComponent) {
      // here we transfer item from left side to right
      setLeftArea(componentLeft);
      if (type === "input" || type === "checkbox") {
        controleInput_Check(type, id);
      } else {
        setRightArea((pre) => [...pre, theTargetLeftComponent]);
      }
      toast.info("item has been moved", {
        autoClose: 1500,
        theme: "dark",
      });
      return undefined;
    } else {
      toast.error("something went wrong");
      return undefined;
    }
    toast.success("item added", {
      autoClose: 1500,
      theme: "dark",
    });
    return undefined;
  };
  return (
    <div
      className='right-area relative rounded-md min-w-[48%] max-w-[380px] flex items-center justify-center flex-col flex-grow border-2 border-black border-solid aspect-square mt-8 drop-shadow-lg shadow-lg'
      ref={drop}
    >
      {rightArea.length ? (
        rightArea.map((e) => (
          <div
            className='w-full flex items-center justify-center my-2 mb-4'
            key={e.id + "right"}
          >
            {e.component}
          </div>
        ))
      ) : (
        <div className='w-full h-full flex justify-center items-center'>
          {isOver ? <Smile /> : <Angry />}
        </div>
      )}
      {/* emoji & items counter*/}
      {rightArea.length ? (
        <div className='absolute bottom-4 right-5 flex items-center gap-2'>
          <span className='text-lg inline-block p-2 font-bold'>
            {rightArea.length}
          </span>
          {rightArea.length > leftArea.length ? <Smile /> : <Angry />}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default RightArea;
