import React from "react";
import { useState } from "react";

export default function Menu(props) {
  const [menumartial, setmenu] = useState(false);
  const [menumartial1, setmenu1] = useState(false);
  return (
    <>
      <style jsx="true">{`
        .main-menu-main {
          position: absolute;
          top: 0;
          right: 0;
          height: 100vh;
          width: 50vw;
          /* From https://css.glass */
          background: rgba(0, 0, 0, 0.48);
          border-radius: 16px;
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.5);
          text-align: center;
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(7.2px);
          display: flex;
          color: white;
        }
        .a {
          color: white;
          text-decoration: underline;
          font-weight: 200;
        }
        .child-main {
          // padding: 30px 0px;
          padding-top: 30px;
          overflow-y: scroll;
          width: 100%;
        }
        .heading-menu {
          font-size: 1.1em;
          font-weight: 300;
          // text-: small-caps;
          padding: 10px;
          cursor: pointer;
        }
        .child-main::-webkit-scrollbar {
          // width: 0px;
          display: none;
          // height:;
        }

        .dorpdown-main {
          height: 0px;
          transition: all 10s ease-in-out;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }
        .main-items-drops {
          font-size: 0.8em;
          padding: 10px;
        }
        .search-items {
          // width: 90%;
          margin-top: 50px;
          margin-bottom: 50px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .cinput {
          padding: 6px 20px;
          height: 26px;
          border: none;
          border-radius: 5px;
          width: 60%;
          font-size: 0.8em;

          outline: none;
        }
        .close-btn {
          position: absolute;
          top: 15px;
          right: 15px;
          cursor: pointer;
        }
        .cbutton {
          cursor: pointer;
          // padding: 5px;
          // height: 40px;
          height: 40px;
          width: 60px;
          display: flex;
          background: #8f0000;
          border: none;
          color: white;
          margin-left: 4px;
          border-radius: 5px;
          padding: 10px;
          justify-content: center;
          align-items: center;
        }
        @media only screen and (max-width: 800px) {
          .main-menu-main {
            width: 100vw;
          }
        }
      `}</style>

      <div className="main-menu-main">
        <span className="close-btn">
          <span
            onClick={() => {
              props.setNav(false);
            }}
            className="material-symbols-outlined"
          >
            close
          </span>
        </span>
        <div className="child-main">
          <div className="search-items">
            <input className="cinput" type="text" />
            <button className="cbutton">
              <span className="material-symbols-outlined">search</span>
            </button>
          </div>
          <span
            style={{
              margin: "1em",
            }}
            className="drop-down"
          >
            <p
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              onClick={() => {
                setmenu(!menumartial);
              }}
              className="heading-menu"
            >
              Martial Arts
              <span class="material-symbols-outlined">arrow_drop_down</span>
            </p>
            <div
              className="dorpdown-main"
              style={{
                transition: "all 1s ease",
                height: menumartial ? "auto" : "0px",
              }}
            >
              {props.productListForMartialArts.map((product) => (
                <div className="main-items-drops">
                  <a className="a" href="#">
                    {product.name}
                  </a>
                </div>
              ))}
            </div>
          </span>
          <span
            style={{
              margin: "1em",
            }}
            className="drop-down"
          >
            <p
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              onClick={() => {
                setmenu1(!menumartial1);
              }}
              className="heading-menu"
            >
              Sports Wear
              <span class="material-symbols-outlined">arrow_drop_down</span>
            </p>
            <div
              className="dorpdown-main"
              style={{ height: menumartial1 ? "auto" : "0" }}
            >
              {props.productList.map((product) => (
                <div className="main-items-drops">
                  <a className="a" href="#">
                    {product.name}
                  </a>
                </div>
              ))}
            </div>
          </span>
          <div
            style={{
              margin: "1em",
            }}
            className="drop-down heading-menu"
          >
            <a
              className="heading-menu"
              href=""
              style={{
                fontSize: ".9em",
              }}
            >
              About
            </a>
          </div>
          <div
            style={{
              margin: "1em",
            }}
            className="drop-down heading-menu"
          >
            <a
              className="heading-menu"
              href=""
              style={{
                fontSize: ".9em",
              }}
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
