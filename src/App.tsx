import React from "react";
import Layout from "./components/Layout";
import Header from "./components/Header";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <main className='min-h-screen'>
        <Header />
        <Layout />
      </main>
    </DndProvider>
  );
}

export default App;
