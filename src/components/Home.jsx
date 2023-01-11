import React from "react";

export default function Home() {
  return (
    <>
      <style jsx="true">{`
        .res-1100-1 {
          position: relative;
          height: 100%;
          display: flex;
          // justify-content: center;
          // flex-direction: column;
          align-items: center;
          color: white;
        }
        .main-heading {
          font-size: 6em;
          line-height: 100%;
        }
        .btn-learn-more {
          background-color: #f91717;
          padding: 12px 30px;
          font-size: 1em;
          border-radius: 200px;
          //   float: right;
          color: white;
          margin-top: 1em;
        }
        .hero-img {
          position: absolute;
          bottom: 0px;
          // z-index: +110;
          filter: saturate(1.5);
          height: 85%;
          right: -100px;
        }
        .main-cnt {
          height: 100vh;
        }
        @media only screen and (max-width: 800px) {
          .main-heading {
            font-size: 3.8em;
          }
          .main-cnt {
            height: 90vh !important;
          }
          .hero-img {
            height: 70%;
          }
        }
        .blori-bante {
          position: absolute;
          width: 30px;
          height: 30px;
          background-color: red;
          top: 50%;
          right: 0;
          filter: blur(20px);
        }
        .blori-bante-1 {
          position: absolute;
          width: 40px;
          height: 40px;
          background-color: red;
          top: 90%;
          right: 40%;
          filter: blur(29px);
        }
        .blori-bante-2 {
          position: absolute;
          width: 40px;
          height: 40px;
          background-color: red;
          top: 40%;
          right: 50%;
          filter: blur(29px);
        }
        @media only screen and (max-width: 700px) {
          .main-heading {
            font-size: 2.8em;
          }
          .main-cnt {
            height: 80vh !important;
          }
        }
      `}</style>
      <div
        className="main-cnt"
        style={{
          width: "100%",
          // height: "100vh",
          position: "relative",
          overflow: "hidden",
          zIndex: "10",
        }}
      >
        <div className="res-1100 res-1100-1">
          <div className="blori-bante"></div>
          <div className="blori-bante-1"></div>
          <div className="blori-bante-2"></div>
          <img className="hero-img" src="heroimg.png" alt="" />
          <div
            style={{
              zIndex: "+10",
            }}
          >
            <h1 className="main-heading">
              Build your <span className="line-through">brand</span> <br />
              with us.
            </h1>

            <button className="btn btn-learn-more">Learn More</button>
          </div>
        </div>
      </div>
    </>
  );
}
