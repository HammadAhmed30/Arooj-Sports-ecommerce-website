import React from "react";
import { Link } from "react-router-dom";
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
      img: "Sports Wear/baseball uniform/Baseball20Uniforms_img_170.jpg",
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
              <Link key={index} className="main-item-card" to={`/2/${index}`}>
                <OuterItem item={item} key={index} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
