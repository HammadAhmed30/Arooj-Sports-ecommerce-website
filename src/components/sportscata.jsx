import React from "react";
import OuterItem from "./OuterItem";

export default function Sportscata() {
  let productListToShowSportsCata = [
    {
      name: "American Football",
      img: "Sports Wear/American Football/AF1.jpg",
    },
    {
      name: "Baseball jerseys",
      img: "Sports Wear/Baseball jerseys/BJ1.jpg",
    },
    {
      name: "Baseball uniform",
      img: "Sports Wear/Baseball uniform/BU1.jpg",
    },
    {
      name: "Basketball",
      img: "Sports Wear/Basketball/BB1.jpg",
    },
    {
      name: "GoalKeeper",
      img: "Sports Wear/GoalKeeper/GK1.jpg",
    },
  ];
  return (
    <>
      <div className="res-1100">
        <h1 className="heading-cata-name">
          SPORTS
          <br />
          WEAR
        </h1>
        <div className="main-sports-cata">
          <div className="main-items-cont">
            {productListToShowSportsCata.map((item, index) => (
              <OuterItem item={item} key={index} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
