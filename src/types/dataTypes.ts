import { collections } from "./collection";

export interface dataTypes {
  collections: collections[];
  inputValue: string;
  checkboxValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  setCheckboxValue: React.Dispatch<React.SetStateAction<string>>;
  setCollections: React.Dispatch<React.SetStateAction<collections[]>>;
  rightArea: collections[];
  setRightArea: React.Dispatch<React.SetStateAction<collections[]>>;
  leftArea: collections[];
  setLeftArea: React.Dispatch<React.SetStateAction<collections[]>>;
}
