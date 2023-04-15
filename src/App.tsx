import React from "react";
import Layout from "./components/Layout";
import Header from "./components/Header";
import { DndProvider } from "react-dnd";
import { TouchBackend } from "react-dnd-touch-backend";
import { Preview, PreviewGenerator } from "react-dnd-preview";

interface PreviewProps {
  itemType: string | any;
  item: PreviewGenerator<
    {
      id: number;
    },
    Element
  >;
  style: React.CSSProperties;
}

const generatePreview = ({ itemType, item, style }: PreviewProps) => {
  return (
    <div
      className='item-list__item capitalize bg-white p-3 rounded shadow-lg'
      style={style}
    >
      {itemType}
    </div>
  );
};
function App() {
  return (
    <DndProvider
      backend={TouchBackend}
      options={{
        enableMouseEvents: true,
      }}
    >
      <main className='min-h-screen'>
        <Header />
        <Layout />
        <Preview generator={generatePreview} />
      </main>
    </DndProvider>
  );
}

export default App;
