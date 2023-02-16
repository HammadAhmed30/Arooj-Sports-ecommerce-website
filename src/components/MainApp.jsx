import React from "react";
import Catagories from "./Catagories";
import Home from "./Home";
import MartialArtcata from "./MartialArtcata";
import Sportscata from "./sportscata";
import { useState, useEffect } from "react";
import Loading from "./Loading";
import AOS from "aos";
import { motion } from "framer-motion";

export default function MainApp() {
  const [loading, setLoading] = useState(true);

  document.title = "Arooj Sports | Manufacturer and Exporter";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onLoad={() => {
        setLoading(false);
      }}
      style={{
        width: "100%",
        // height: "5000px",
        overflow: "hidden",
        backgroundColor: "black",
        position: "relative",
      }}
    >
      <style jsx="true">
        {`
          .blur-ball-1 {
            position: absolute;
            width: 30vw;
            height: 30vw;
            // background: #bd0000;
            background: #bd0000bb;

            top: calc(50% - 15vw);
            // top: calc(50% - 145px);
            left: -10px;
            border-radius: 50%;
            // z-index: -12;
            filter: blur(230px);
          }
          @media only screen and (max-width: 800px) {
            .blur-ball-1 {
              width: 200px;
              height: 200px;
              top: calc(50% - 125px);
              filter: blur(170px);
            }
          }
          // @media only screen and (max-width: 700px) {
          //   .blur-ball-1 {
          //     width: ;
          //     height: 40vw;
          //     top: calc(50% - 15vw);
          //   }
          // }
        `}
      </style>
      {loading && <Loading />}
      {/* <div className="blur-ball-1"></div> */}

      {/* <Navbar /> */}
      <Home />
      <Catagories />
      <Sportscata />
      <MartialArtcata />
    </motion.div>
  );
}
