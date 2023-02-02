import React, { useState } from "react";
import "../index.css";
export default function SubOutterItem(props) {
  console.log(props.item.img);
  return (
    <div className="main-item-card">
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
