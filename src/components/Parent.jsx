import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import OuterItem from "./OuterItem";
import { Link, useParams } from "react-router-dom";
import Loading from "./Loading";
// import image from "../../public";

export default function Parent(props) {
  const { para } = useParams();
  // const [nameCata, setNameCata] = useState("");
  var nameCata = "";
  if (para === "1") {
    nameCata = "Martial Arts";
  } else if (para === "2") {
    nameCata = "Sports Wear";
  } else {
    nameCata = "No Catagory";
  }
  const data_ARR = props.dataItemsMartialArts[para - 1];

  const [iseloading, SetLoading] = useState(true);
  document.title = "Arooj Sport | " + nameCata;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      onLoad={() => {
        SetLoading(false);
      }}
    >
      {iseloading && <Loading />}
      <div className="res-1100">
        {para == 1 && (
          <h1 style={{ marginTop: "1.6em" }} className="heading-cata-name">
            MARTIAL
            <br />
            ARTS
          </h1>
        )}
        {para == 2 && (
          <h1 style={{ marginTop: "1.6em" }} className="heading-cata-name">
            SPORTS
            <br />
            WEAR
          </h1>
        )}
        <div className="main-sports-cata">
          <div className="main-items-cont">
            {data_ARR.map((item, index) => (
              <div key={index} className="main-item-card">
                <Link
                  style={{ display: "block", width: "fit-content" }}
                  key={index}
                  to={`/${para}/${index}`}
                >
                  <div>
                    <OuterItem item={item} />
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
