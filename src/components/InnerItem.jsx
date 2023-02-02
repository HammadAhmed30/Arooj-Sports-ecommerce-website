import React from "react";
import { useParams } from "react-router";
import { mainRouting } from "../Routes in JSON/MartialArtsData";
import OuterItem from "./OuterItem";
import SubOutterItem from "./SubOuterItem";
// import Navbar from "./Navbar";

export default function InnerItem(props) {
  const { para, child } = useParams();

  // const img = require
  const dataToGet = mainRouting[para - 1][child];
  //   console.log(dataToGet.furtherObj[1].img);
  return (
    <>
      <div className="res-1100">
        <h1 style={{ marginTop: "1.6em" }} className="heading-cata-name">
          {dataToGet.name}
        </h1>
        <div className="main-sports-cata">
          <div className="main-items-cont">
            {dataToGet.furtherObj.map((item, index) => (
              // <Link key={index} to={`/${props.indexItemOfData}/${index}`}>
              <SubOutterItem
                key={index}
                item={item}
                img={item.img}
                title={index}
              />
              // {/* // </Link> */}
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
