import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { mainRouting } from "../Routes in JSON/MartialArtsData";
import OuterItem from "./OuterItem";
import Loading from "./Loading";

export default function Detalis() {
  const { para, child, prod } = useParams();
  const Product_OBJ = mainRouting[para - 1][child].furtherObj[prod];
  var para_desc = mainRouting[para - 1][child].desc;
  document.title = "Arooj Sports | " + Product_OBJ.name;
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div
      onLoad={() => {
        setLoading(false);
      }}
      style={{
        marginTop: "5em",
      }}
    >
      {loading && <Loading />}
      <div className="res-1100">
        <div className="main-img-para-details-section">
          <img
            className="details-page-img"
            src={`/${Product_OBJ.img}`}
            alt={`${Product_OBJ.name}'s image`}
          />
          <div className="right-details-page">
            <p>
              Name : {Product_OBJ.name} #P{Number(prod) + 1}
            </p>
            <p>Custom</p>
            <p>Color : Custom on Order</p>
            <p>Embroidery & Sublimation</p>
            <p>Quantity : As per Order</p>
            <p>Satin Stitching, Silk Printing, Normal</p>
            <p>Embroidery</p>
            <p>Custom Company Logo, Patches, Badge </p>
            <p>Ship : Worldwide - DHL/FedEx/UPS/DPD</p>
            <p>Money : Western Union, MoneyGram</p>
            <p>50% advance 50% balance paid before delivery</p>
            <button className="send-inquiry-btn">Send Inquiry</button>
          </div>
        </div>
        <div className="details-description-part">
          <h1 className="details-dscription-heading">Product Description</h1>
          <p
            id="para-details"
            className="details-description-para"
            dangerouslySetInnerHTML={{ __html: para_desc }}
          />
        </div>
        <div className="more-prod-from-cata">
          <h1 className="more-from-this-heading">
            More products from <br />
            {mainRouting[para - 1][child].name}
          </h1>
          <div className="main-more-cnt">
            {mainRouting[para - 1][child].furtherObj.map((item, index) => {
              return (
                index < 3 && (
                  <a
                    key={index}
                    className="main-item-card"
                    href={`/${para}/${child}/${index}`}
                  >
                    <OuterItem key={index} item={item} />
                  </a>
                )
              );
            })}
          </div>
          <div className="more-btn-cnt">
            <Link to={`/${para}/${child}`}>
              <button
                style={{ marginInline: "center" }}
                className="send-see-more-btn"
              >
                View more
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
