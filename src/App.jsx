import React from "react";
import MainApp from "./components/MainApp";
// import { BrowserRouter } from "react-router-dom";
import MainProds from "./components/MainProds";
export default function App() {
  return (
    <>
      <div
        style={{
          width: "100%",
          overflow: "hidden",
          backgroundColor: "black",
        }}
      >
        <MainProds />
      </div>
    </>
  );
}
