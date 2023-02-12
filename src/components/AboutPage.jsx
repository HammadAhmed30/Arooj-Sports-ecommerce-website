import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Loading from "./Loading";

export default function AboutPage() {
  const [loading, setloading] = useState(true);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  document.title = "Arooj Sports | About";
  return (
    <div
      className="res-1100"
      style={{
        marginTop: "8em",
        position: "relative",
      }}
    >
      {loading && <Loading />}
      <img
        onLoad={() => {
          setloading(false);
        }}
        className="image-desc-about-page"
        src="/hero track 1.png"
        alt=""
      />

      <div className="about-descrition-page">
        <div className="main-desc-about-page-1">
          <h1 className="main-desc-about-page-1-h1">About</h1>
          <p className="main-desc-about-page-1-p">
            Arooj Sportswear & Textile specializes in the design and manufacture
            of high-quality sportswear. Their products include a wide range of
            items such as athletic shoes, shorts, t-shirts, and jackets. They
            use advanced fabrics and construction techniques to ensure that
            their sportswear is comfortable, durable, and performs to the
            highest standards. In addition to their standard line of products,
            Arooj Sportswear & Textile also offers custom design services for
            teams and individuals. They have a reputation for excellent customer
            service and are a popular choice among athletes and fitness
            enthusiasts.
          </p>
          <Link to="/">
            <button
              style={{
                marginTop: "1em",
              }}
              className="send-inquiry-btn"
            >
              View Products
            </button>
          </Link>
        </div>
      </div>
      <div className="main-shiping-div">
        <div className="shipping-details-about-page">
          <h1 className="shipping-details-about-page-h1">Our Shipping</h1>
          <div className="shipping-details-about-page-div-imgs">
            <img
              src="/DHL.jpg"
              alt=""
              className="shipping-details-about-page-div-imgs-img"
            />
            <img
              src="/UPS.jpg"
              alt=""
              className="shipping-details-about-page-div-imgs-img"
            />
            <img
              src="/FEDEX.jpg"
              alt=""
              className="shipping-details-about-page-div-imgs-img"
            />
            <img
              src="/PCS.jpg"
              alt=""
              className="shipping-details-about-page-div-imgs-img"
            />
            <img
              src="/sofeesad.jpg"
              alt=""
              className="shipping-details-about-page-div-imgs-img"
            />
            <img
              src="/POST.jpg"
              alt=""
              className="shipping-details-about-page-div-imgs-img"
            />
          </div>
        </div>
      </div>
      <div className="main-shiping-div">
        <div className="shipping-details-about-page">
          <h1 className="shipping-details-about-page-h1">Our Certification</h1>
          <div className="shipping-details-about-page-div-imgs">
            <img
              src="/c1.jpg"
              alt=""
              className="shipping-details-about-page-div-imgs-img"
            />
            <img
              src="/c2.jpg"
              alt=""
              className="shipping-details-about-page-div-imgs-img"
            />
            <img
              src="/c3.jpg"
              alt=""
              className="shipping-details-about-page-div-imgs-img"
            />
            <img
              src="/c4.jpg"
              alt=""
              className="shipping-details-about-page-div-imgs-img"
            />
            <img
              src="/c5.jpg"
              alt=""
              className="shipping-details-about-page-div-imgs-img"
            />
            <img
              src="/c6.jpg"
              alt=""
              className="shipping-details-about-page-div-imgs-img"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
