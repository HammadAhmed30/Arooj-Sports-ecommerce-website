import React from "react";

export default function Catagories() {
  return (
    <div className="main">
      <h1 className="heading-top-deal-in">
        We <span className="border-bottom">deal</span> in
      </h1>
      <div className=" res-1100">
        <div className="main-cata-page">
          <img className="back-img-1" src="backcata.png" alt="" />
          <div className="sprots-wear">
            <img className="image-cata" src="sports.png" alt="" />
            <button className="btn btn-see-more">See More</button>
          </div>
          <div className="sprots-wear-1">
            <img className="image-cata" src="martial arts.png" alt="" />
            <button className="btn btn-see-more">See More</button>
          </div>
        </div>
      </div>
    </div>
  );
}
