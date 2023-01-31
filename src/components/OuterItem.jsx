import React from "react";

export default function OuterItem(props) {
  return (
    <div className="main-item-card">
      <div className="img-cmt">
        <img className="item-card-img" src={props.item.img} alt="" />
      </div>
      {/* <div
        style={{
          backgroundImage: `url("${props.item.img}")`,
          width: "100%",
          height: "90%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          position: "relative",
        }}
      ></div> */}
      <p className="item-card-name">{props.item.name}</p>
    </div>
  );
}
