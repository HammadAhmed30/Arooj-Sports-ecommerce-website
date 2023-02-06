import React, { useState } from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu";
// import logo from "../../public/logo.png";
export default function Navbar() {
  let productList = [
    {
      name: "American Football",
      link: "/link",
    },
    {
      name: "Baseball jerseys",
      link: "/link",
    },
    {
      name: "Baseball uniform",
      link: "/link",
    },
    {
      name: "Basketball",
      link: "/link",
    },
    {
      name: "GoalKeeper",
      link: "/link",
    },
    {
      name: "Hoodies",
      link: "/link",
    },
    {
      name: "Icehockey",
      link: "/link",
    },
    {
      name: "Netbal",
      link: "/link",
    },
    {
      name: "Polo T shirts",
      link: "/link",
    },
    {
      name: "Rugby",
      link: "/link",
    },
  ];
  let productListForMartialArts = [
    {
      name: "Belts",
      link: "/link",
    },
    {
      name: "Hapkido",
      link: "/link",
    },
    {
      name: "Jiu Jitsu Gi Kimono",
      link: "/link",
    },
    {
      name: "Judo",
      link: "/link",
    },
    {
      name: "Kendo uniform",
      link: "/link",
    },
    {
      name: "Kerate uniform",
      link: "/link",
    },
    {
      name: "Kickboxing",
      link: "/link",
    },
    {
      name: "Kung fu uniform",
      link: "/link",
    },
    {
      name: "Ninja",
      link: "/link",
    },
    {
      name: "Taewondo gi",
      link: "/link",
    },
  ];
  const [isNav, setNav] = useState(false);
  return (
    <div
      style={{
        position: "absolute",
        top: "0",
        left: "0",
        width: "100%",
        zIndex: 12,
      }}
    >
      <style jsx="true">
        {`
          .menu-main {
            position: fixed;
            top: -110vh !important;
            right: 0 !important;
            // width: 100%;
            transition: all 600ms ease;
          }
          .open {
            position: fixed;
            // display: none;
            top: 0 !important;
            right: 0 !important;
            z-index: 110;
          }
          .close {
            top: -110vh !important;
            // right: 0;
            right: 0 !important;
            // display: none;
            position: fixed;
            z-index: 110;
          }
          .main-navbar {
            width: 100%;

            background-color: none;
            display: flex;
            justify-content: space-between;
            align-items: center;
            position: relative;
            z-index: 1;
          }
          .main-navbar::before {
            content: "";
            position: absolute;
            top: 0;
            z-index: -12;
            left: 0;
            // background: #1a0000;
            width: 100%;
            height: 120%;
            // -webkit-box-shadow: 0px 0px 40px black;

            border-bottom-right-radius: 50%;
            border-bottom-left-radius: 50%;
          }
          .res-1100-2 {
            padding: 15px 0px;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          .btn-navbar-linker {
            margin-left: 19px;
            margin-right: 19px;
            letter-spacing: 1px;
            font-weight: 600;
            color: white;
            font-size: 0.61em;
          }
          .img-logo {
            width: 150px;
          }
          .dropbtn {
            background-color: #04aa6d;
            color: white;
            // padding: 16px;
            // font-size: 16px;
            border: none;
          }

          /* The container <div> - needed to position the dropdown content */
          .dropdown {
            position: relative;
            display: inline-block;
          }

          /* Dropdown Content (Hidden by Default) */
          .dropdown-content {
            display: none;
            position: absolute;
            background-color: #070707;
            min-width: 360px;
            box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
            z-index: 1;
            height: 50vh;
            overflow-y: scroll;
          }
          .dropdown-content::-webkit-scrollbar-thumb {
            background: #292929;
          }

          .dropdown-content::-webkit-scrollbar {
            width: 5px;
            background-color: #121212;
          }
          .menubtn {
            cursor: pointer;
            font-size: 0.81em;
          }

          /* Links inside the dropdown */
          .dropdown-content a {
            color: white;
            padding: 10px 0px;
            font-size: 0.81em;
            padding-left: 10px;
            text-decoration: none;
            display: block;
          }

          /* Change color of dropdown links on hover */
          .dropdown-content a:hover {
            background-color: #111111;
          }
          // .dropdown-content::before {
          //   content: "";
          //   width: 100vw;
          //   height: 100vh;
          //   position: absolute;
          //   top: 0;
          //   left: 0;
          // }
          /* Show the dropdown menu on hover */
          .dropdown:hover .dropdown-content {
            display: block;
          }

          @media only screen and (max-width: 800px) {
            .linker {
              display: none;
            }
          }
        `}
      </style>
      <div className="main-navbar">
        <div
          className="res-1100 res-1100-2"
          style={{
            zIndex: "11",
          }}
        >
          <Link to="/">
            <div className="logo">
              <img className="img-logo" src="/logo.png" alt="" />
            </div>
          </Link>
          <div className="linker">
            {/* <button className="btn btn-navbar-linker">PRODUCTS</button> */}
            <div className="dropdown">
              <button className="btn display-flex-center btn-navbar-linker">
                SPORTS WEAR &nbsp;
                <span className="material-symbols-outlined">
                  arrow_drop_down
                </span>
              </button>
              <div className="dropdown-content">
                {productList.map((product, index) => (
                  <Link key={index} to={`/2/${index}`}>
                    {product.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="dropdown">
              <button className="btn display-flex-center btn-navbar-linker">
                MARTIAL ARTS &nbsp;
                <span className="material-symbols-outlined">
                  arrow_drop_down
                </span>
              </button>
              <div className="dropdown-content">
                {productListForMartialArts.map((product, index) => (
                  <Link key={index} to={`/1/${index}`}>
                    {product.name}
                  </Link>
                ))}
              </div>
            </div>
            {/* <button className="btn btn-navbar-linker"></button> */}
            <button className="btn btn-navbar-linker">CONTACT US</button>
          </div>
          <div className="menubtn">
            <span
              className="material-symbols-outlined"
              style={{
                fontSize: "2em",
                color: "white",
              }}
              onClick={() => {
                setNav(!isNav);
              }}
            >
              menu
            </span>
          </div>
        </div>
      </div>
      {/*  */}
      {/* <Navbar /> */}
      <div className={`menu-main ${isNav ? "open" : "close"}`}>
        <Menu
          productList={productList}
          productListForMartialArts={productListForMartialArts}
          isNav={isNav}
          setNav={setNav}
        />
      </div>
    </div>
  );
}
