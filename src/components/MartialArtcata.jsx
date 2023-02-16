import React from "react";
import { Link } from "react-router-dom";
import OuterItem from "./OuterItem";

export default function MartialArtcata() {
  let productListToShowSportsCata = [
    {
      name: "Belts",
      img: "Martial Arts/Belts/Belts_img_233.jpg",
    },
    {
      name: "Hapkido",
      img: "Martial Arts/hapkido/Hapkido20Gi_img_425.jpg",
    },
    {
      name: "Jiu jitsu gi kimono",
      img: "Martial Arts/jiu jitsu gi kimono/jiu20jitsu20gi20kimono_img_201.jpg",
    },
    {
      name: "Judo",
      img: "Martial Arts/judo/Judo20uniform_img_399.jpg",
    },
    {
      name: "Kendo uniform",
      img: "Martial Arts/kendo uniform/Kendo20Uniforms_img_217.jpg",
    },
  ];
  return (
    <div className="parent-cata-image">
      <div className="res-1100">
        <h1
          key="mainmartial"
          data-aos="fade-right"
          className="heading-cata-name"
        >
          MARTIAL
          <br />
          ARTS
        </h1>
        <img
          key="mainmartil"
          data-aos="fade-left"
          src="/red element.png"
          alt=""
          className="image-back-heading-cata"
        />
        <div className="main-sports-cata">
          <div className="main-items-cont">
            {productListToShowSportsCata.map((item, index) => (
              <Link key={index} className="main-item-card" to={`/1/${index}`}>
                <OuterItem item={item} indexVal={index} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
