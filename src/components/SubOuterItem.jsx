import React, { useState } from "react";
import "../index.css";
import Loading from "./Loading";

export default function SubOutterItem(props) {
  const [hazaLoading, setHazaLoading] = useState(true);

  return (
    <div
      className="main-item-card-1"
      onLoad={() => {
        setHazaLoading(false);
      }}
    >
      <div className="tag-to-number">
        <p className="tag-number-p">#{props.indexVal + 1}</p>
      </div>
      {hazaLoading && <Loading />}

      <img
        className="item-card-img"
        src={`/${props.item.img}`}
        // src="log
        alt={props.item.name}
      />
      <p className="item-card-name">
        {props.item.name} #P{props.title + 1}
      </p>
    </div>
  );
}
