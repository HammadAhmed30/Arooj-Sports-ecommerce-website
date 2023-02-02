import React from "react";
import Navbar from "./Navbar";
import OuterItem from "./OuterItem";
import { Link } from "react-router-dom";
// import image from "../../public";

export default function Parent(props) {
  // const
  return (
    <>
      <div className="res-1100">
        <h1 style={{ marginTop: "1.6em" }} className="heading-cata-name">
          MARTIAL
          <br />
          ARTS
        </h1>
        <div className="main-sports-cata">
          <div className="main-items-cont">
            {props.dataItemsMartialArts.map((item, index) => (
              <Link
                class="main-link-fitter"
                style={{ display: "block", width: "fit-content" }}
                key={index}
                to={`/${props.indexItemOfData}/${index}`}
              >
                <div>
                  <OuterItem item={item} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
