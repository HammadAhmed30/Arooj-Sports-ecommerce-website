import React, { useEffect } from "react";
import AOS from "aos";
import MainProds from "./components/MainProds";
import "aos/dist/aos.css";
export default function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
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
