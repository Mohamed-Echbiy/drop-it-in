import { FC, useState } from "react";

//
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Text from "./fragments/Text";
import Input from "./fragments/Input";
import CheckBox from "./fragments/CheckBox";
import { Image } from "./fragments/Image";
import RightArea from "./RightArea";
import LeftArea from "./LeftArea";
import Table from "./Table";
import { Exclamation } from "./fragments/Icons";
import { collections } from "../types/collection";

const img_url =
  "https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*";

const Layout: FC = () => {
  const [disable, setDisable] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>(""); // store the input value to get back after drop
  const [checkboxValue, setCheckboxValue] = useState<string>("react");
  const [collections, setCollections] = useState<collections[]>([
    { id: 1, component: <Text text='REACT' id={1} /> },
    {
      id: 122,
      component: (
        <Input id={122} setInputValue={setInputValue} value={inputValue} />
      ),
    },
    { id: 2, component: <Text text='NODE.JS' id={2} /> },
    {
      id: 3,
      component: (
        <Input id={3} setInputValue={setInputValue} value={inputValue} />
      ),
    },
    {
      id: 4,
      component: (
        <CheckBox id={4} value={checkboxValue} setValue={setCheckboxValue} />
      ),
    },
    { id: 5, component: <Image img={img_url} id={5} /> },
  ]);
  const [leftArea, setLeftArea] = useState<collections[]>([]);

  const [rightArea, setRightArea] = useState<collections[]>([]);
  //

  return (
    <>
      <section className=' min-h-full flex items-center gap-3 flex-wrap max-w-7xl mx-auto justify-center'>
        <div className='list_of_dragable_items w-full flex items-center justify-center flex-wrap gap-4'>
          {collections.map((e) => {
            return (
              <div className='' key={e.id}>
                {e.component}
              </div>
            );
          })}
        </div>

        <LeftArea
          setCollections={setCollections}
          inputValue={inputValue}
          setCheckboxValue={setCheckboxValue}
          checkboxValue={checkboxValue}
          setInputValue={setInputValue}
          collections={collections}
          leftArea={leftArea}
          setLeftArea={setLeftArea}
          rightArea={rightArea}
          setRightArea={setRightArea}
        />
        <RightArea
          setCollections={setCollections}
          inputValue={inputValue}
          setCheckboxValue={setCheckboxValue}
          checkboxValue={checkboxValue}
          setInputValue={setInputValue}
          collections={collections}
          rightArea={rightArea}
          setRightArea={setRightArea}
          leftArea={leftArea}
          setLeftArea={setLeftArea}
        />
      </section>
      <div className='w-full flex justify-center items-center mt-12 flex-col pb-12'>
        {!collections.length ? (
          <button
            onClick={() => setDisable(true)}
            className='btn btn-success min-w-[120px]'
          >
            Save
          </button>
        ) : (
          <>
            <button disabled={true} className='btn btn-ghost min-w-[120px]'>
              Save
            </button>
            <p className=' capitalize text-lg mt-2 text-red-700 flex items-center gap-2'>
              <span>
                <Exclamation />
              </span>{" "}
              <span> please list all items</span>
            </p>
          </>
        )}
        {disable && (
          <div className='w-screen h-screen top-0 left-0 fixed flex items-center justify-center'>
            <div
              className=' absolute top-0 left-0 bg-black opacity-60 w-full h-full cursor-pointer'
              onClick={() => setDisable(false)}
            ></div>
            <Table rightCollection={rightArea} />
          </div>
        )}
      </div>
      <ToastContainer />
    </>
  );
};

export default Layout;
