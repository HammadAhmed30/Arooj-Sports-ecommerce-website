import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Loading from "./Loading";

export default function Home() {
  const [loading, setLoading] = useState(true);
  return (
    <div
      onLoad={() => {
        setLoading(false);
      }}
    >
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
          letter-spacing: -4px;
        }
        .btn-learn-more {
          background-color: var(--mainRed);
          padding: 10px 34px;
          font-size: 0.81em;
          border-radius: 200px;
          //   float: right;
          color: white;
          margin-top: 1em;
          font-weight: 200;
          // -webkit-box-shadow: 0px 0px 10px black;
          transition: all 500ms ease;
        }
        .btn-learn-more:hover {
          transform: translateY(-10px);
          -webkit-box-shadow: 0px 20px 50px black;
        }
        .hero-img {
          position: absolute;
          bottom: 0px;
          z-index: +1;
          filter: saturate(1.5);
          height: 85%;
          right: +20px;
          // filter: drop-shadow(0 0 100px rgb(225, 255, 255, 0.4));
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
            right: -20px;
            // bottom: 0;
          }
        }
        .blori-bante {
          position: absolute;
          width: 20px;
          height: 20px;
          // background-color: red;
          top: 50%;
          right: 0;
          // filter: blur(20px);
        }
        .blori-bante-1 {
          position: absolute;
          width: 20px;
          height: 20px;
          // background-color: red;
          top: 90%;
          right: 30%;
          z-index: 1;
          // filter: blur(29px);
        }
        .blur-img {
          filter: blur(40px);
          opacity: 0.5;
        }
        .blori-bante-2 {
          position: absolute;
          width: 20px;
          height: 20px;
          // background-color: red;
          top: 30%;
          z-index: 1;
          right: 10%;
          // filter: blur(29px);
        }
        .size-blori {
          width: 90px;
          height: 90px;
        }
        .blur-ball-1 {
          position: absolute;
          width: calc(30vh + 100px);
          // height: 30vh;
          height: calc(30vh + 100px);
          // background: #bd0000;
          background: var(--mainRed);
          opacity: 0.7;

          top: calc(50% - 15vw);
          // top: calc(50% - 145px);
          left: -10px;
          border-radius: 50%;
          // z-index: -12;

          filter: blur(230px);
        }
        @media only screen and (max-width: 700px) {
          .main-heading {
            font-size: 2.8em;
          }
          .main-heading {
            letter-spacing: -2px;
          }
          .size-blori {
            width: 60px;
            height: 60px;
          }
          .main-cnt {
            height: 80vh !important;
          }
          .btn-learn-more {
            float: left !important;
          }
          .blori-bante-1 {
            bottom: 10%;
          }
          .blori-bante-2 {
            bottom: 60%;
          }
        }
        // @media only screen and (max-width: 550px) {
        //   .hero-img {
        //     // height: 70%;
        //     height: auto;
        //     width: 100%;
        //     right: 50%;
        //     // top: 40px;
        //     bottom: 0;
        //     // filter: saturate(0) brightness(0.7);
        //     transform: translateX(50%);
        //   }
        // }
        @media only screen and (max-width: 500px) {
          .hero-img {
            height: 90%;
            left: 40px;
            // bottom: 0;
          }
        }
        @keyframes animateTheBloriBanta {
          0% {
            top: 30%;
            right: 10%;
          }
          25% {
            top: 90%;
            right: 40%;
          }
          50% {
            top: 90%;
            right: 10%;
          }
          75% {
            top: 30%;
            right: 50%;
          }
          100% {
            top: 30%;
            right: 10%;
          }
        }
      `}</style>
      {loading && <Loading />}
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
          <div className="blur-ball-1"></div>

          <img
            className="blori-bante-1 size-blori"
            src="element 3.png"
            alt=""
          />
          <img
            className="blori-bante-2 size-blori"
            src="element 3.png"
            alt=""
          />
          {/* <div className="blori-bante-1">
            <img src="element 3.png" alt="" />
          </div> */}
          {/* <div className="blori-bante-2"></div> */}
          <img className="hero-img blur-img" src="hero men.png" alt="" />
          <img className="hero-img" src="hero men.png" alt="" />
          <div
            style={{
              zIndex: "+10",
            }}
          >
            <h1 className="main-heading">Build your brand</h1>
            <div
              style={{
                width: "fit-content",
              }}
            >
              <h1 className="main-heading">with us.</h1>
              <Link to="/about">
                <button
                  style={{ float: "right" }}
                  className="btn btn-learn-more"
                >
                  Learn more
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
