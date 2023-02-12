import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { mainRouting } from "../Routes in JSON/MartialArtsData";

export default function Menu(props) {
  const [menumartial, setmenu] = useState(false);
  const [menumartial1, setmenu1] = useState(false);
  const [search, setsearch] = useState("");
  const martialsData = mainRouting[0];
  const sportsData = mainRouting[1];
  return (
    <>
      <style jsx="true">{`
        .heading-search {
          overflow-x: hidden;

          color: white;
          font-size: 1.6em;
          font-weight: 500;
          padding-top: 5px;
        }

        .heading-search-1 {
          position: relative;
          font-size: 1.2em;
          margin-top: 30px;

          line-height: 0px;
          width: 90%;
          color: white;
          margin-inline: auto;
          font-weight: 700;
        }
        .main-menu-main {
          position: absolute;
          top: 0;
          right: 0;
          height: 100vh;
          width: 50vw;
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
          overflow-x: hidden;
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
        .search-div-data {
          background: rgba(0, 0, 0, 0.7);
          color: white;
          border-radius: 16px;
          text-align: center;
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(7.2px);
          width: 90%;
          margin-inline: auto;
          color: black;
          border-radius: 10px;
          transition: all 500ms ease;
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
            <input
              value={search}
              onChange={(e) => {
                setsearch(e.target.value);
              }}
              className="cinput"
              type="text"
            />
            <button className="cbutton">
              <span className="material-symbols-outlined">search</span>
            </button>
          </div>
          {search && (
            <div className="search-div-data">
              <h1 className="heading-search">Results for "{search}"</h1>
              <div className="martial-search">
                <h1 className="heading-search-1">Martial Arts</h1>

                <br />
                {martialsData.map((iteme1, index) => {
                  return (
                    iteme1.name
                      .toLowerCase()
                      .includes(search.toLowerCase()) && (
                      <div key={index}>
                        <Link
                          onClick={() => {
                            setsearch("");
                            props.setNav(false);
                          }}
                          style={{
                            color: "white",
                            textDecoration: "underline",
                          }}
                          to={`/1/${index}`}
                        >
                          {iteme1.name}
                        </Link>
                      </div>
                    )
                  );
                })}
              </div>
              <div className="martial-search">
                <h1 className="heading-search-1">Sports Wear</h1>
                <br />
                <div>
                  {sportsData.map((iteme, index) => {
                    // console.log(item.name);
                    return (
                      iteme.name
                        .toLowerCase()
                        .includes(search.toLowerCase()) && (
                        <div key={index}>
                          <Link
                            onClick={() => {
                              setsearch("");
                              props.setNav(false);
                            }}
                            style={{
                              color: "white",
                              textDecoration: "underline",
                            }}
                            to={`/2/${index}`}
                          >
                            {iteme.name}
                          </Link>
                        </div>
                      )
                    );
                  })}
                </div>
              </div>
            </div>
          )}
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
              <span className="material-symbols-outlined">arrow_drop_down</span>
            </p>
            <div
              className="dorpdown-main"
              style={{
                transition: "all 1s ease",
                height: menumartial ? "auto" : "0px",
              }}
            >
              {props.productListForMartialArts.map((product, index) => (
                <div key={index} className="main-items-drops">
                  <Link
                    onClick={() => {
                      props.setNav(false);
                    }}
                    className="a"
                    to={`/1/${index}`}
                  >
                    {product.name}
                  </Link>
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
              <span className="material-symbols-outlined">arrow_drop_down</span>
            </p>
            <div
              className="dorpdown-main"
              style={{ height: menumartial1 ? "auto" : "0" }}
            >
              {props.productList.map((product, index) => (
                <div key={index} className="main-items-drops">
                  <Link
                    onClick={() => {
                      props.setNav(false);
                    }}
                    className="a"
                    to={`/2/${index}`}
                  >
                    {product.name}
                  </Link>
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
            <Link
              className="heading-menu"
              to="/about"
              style={{
                fontSize: ".9em",
              }}
              onClick={() => {
                props.setNav(false);
              }}
            >
              About
            </Link>
          </div>
          <div
            style={{
              margin: "1em",
            }}
            className="drop-down heading-menu"
          >
            <Link
              className="heading-menu"
              to="/contact"
              style={{
                fontSize: ".9em",
              }}
              onClick={() => {
                props.setNav(false);
              }}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
