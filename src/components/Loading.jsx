import React from "react";

export default function Sportscata() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        position: "fixed",
        justifyContent: "center",
        background: "black",
        top: "0",
        left: "0",
        zIndex: "1000",
      }}
    >
      <div className="main-loader-loading-bar"></div>
    </div>
  );
}
