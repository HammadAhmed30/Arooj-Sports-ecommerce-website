import React from "react";
import Navbar from "./Navbar";
import OuterItem from "./OuterItem";

export default function SubParentChild(props) {
  return (
    <>
      <Navbar />
      <div className="res-1100">
        <h1 style={{ marginTop: "1.6em" }} className="heading-cata-name">
          MARTIAL
          <br />
          ARTS
        </h1>
        <div className="main-sports-cata">
          <div className="main-items-cont">
            {props.productListToShowSportsCata.map((item, index) => (
              <OuterItem item={item} key={index} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
