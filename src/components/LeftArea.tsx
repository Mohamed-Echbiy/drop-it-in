import React, { FC, useState } from "react";
import { useDrop } from "react-dnd";
import Text from "./fragments/Text";
import CheckBox from "./fragments/CheckBox";
import Input from "./fragments/Input";

import { toast } from "react-toastify";
import { Angry, Smile } from "./fragments/Icons";
import { dataTypes } from "../types/dataTypes";

const LeftArea: FC<dataTypes> = ({
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
      setLeftArea((pre) => [
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
      setLeftArea((pre) => [
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
    [collections, inputValue, checkboxValue, leftArea, rightArea]
  );
  console.log(leftArea, "I am left", rightArea, "I am right area");
  const DropFc = (id: number, type?: string) => {
    const component = collections.filter((collection) => collection.id === id);
    // here we get the item from the array that we dragging
    const componentLeft = leftArea.find((collection) => collection.id === id);
    const componentRight = rightArea.filter(
      (collection) => collection.id !== id
    );
    const theTargetRightComponent = rightArea.find(
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
        setLeftArea((pre) => [...pre, ...component]);
      }
    } else if (!!componentLeft) {
      // this to prevent duplicating item
      if (type === "input" || type === "checkbox") {
        controleInput_Check(type, id);
      }
      toast.info("item is already here", {
        autoClose: 1500,
        theme: "dark",
        className: "capitalize",
      });
      return undefined;
    } else if (!!theTargetRightComponent) {
      // this is responsable for moving item between two areas
      setRightArea(componentRight);
      if (type === "input" || type === "checkbox") {
        controleInput_Check(type, id);
      } else {
        setLeftArea((pre) => [...pre, theTargetRightComponent]);
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
      className='right-area rounded-md relative min-w-[48%] max-w-[380px] flex items-center justify-center flex-col flex-grow border-2 border-black border-solid aspect-square mt-8 drop-shadow-lg shadow-lg'
      ref={drop}
    >
      {leftArea.length ? (
        leftArea.map((e) => (
          <div
            className='w-full flex items-center justify-center my-2 mb-4'
            key={e.id + "left"}
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
      {leftArea.length ? (
        <div className='absolute bottom-4 right-5 flex items-center gap-2'>
          <span className='text-lg inline-block p-2 font-bold'>
            {leftArea.length}
          </span>
          {rightArea.length < leftArea.length ? <Smile /> : <Angry />}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default LeftArea;
