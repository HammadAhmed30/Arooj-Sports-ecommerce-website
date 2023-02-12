import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { mainRouting } from "../Routes in JSON/MartialArtsData";
import OuterItem from "./OuterItem";
import SubOutterItem from "./SubOuterItem";
import Loading from "./Loading";
// import Navbar from "./Navbar";

export default function InnerItem(props) {
  const { para, child } = useParams();
  const [isItLoading, setItLoading] = useState(true);

  // const img = require
  const dataToGet = mainRouting[para - 1][child];
  document.title = "Arooj Sports | " + dataToGet.name;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div
      className="parent-cata-image"
      onLoad={() => {
        setItLoading(false);
      }}
    >
      {isItLoading && <Loading />}
      <div className="res-1100">
        <h1 style={{ marginTop: "1.6em" }} className="heading-cata-name">
          {dataToGet.name}
        </h1>
        <img
          src="/red element.png"
          alt=""
          className="image-back-heading-cata"
        />
        <div className="main-sports-cata">
          <div className="main-items-cont">
            {dataToGet.furtherObj.map((item, index) => (
              // <Link key={index} to={`/${props.indexItemOfData}/${index}`}>
              <Link
                key={index}
                className="main-item-card"
                to={`/${para}/${child}/${index}`}
              >
                <SubOutterItem
                  indexVal={index}
                  key={index}
                  item={item}
                  img={item.img}
                  title={index}
                />
              </Link>
              // {/* // </Link> */}
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
