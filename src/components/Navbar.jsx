import React, { useState } from "react";
import Menu from "./Menu";

export default function Navbar() {
  let productList = [
    {
      name: "Cricket",
      link: "/link",
    },
    {
      name: "FootBall",
      link: "/link",
    },
    {
      name: "Gamer",
      link: "/link",
    },
    {
      name: "Esports",
      link: "/link",
    },
    {
      name: "Mobile",
      link: "/link",
    },
    {
      name: "Bat",
      link: "/link",
    },
    {
      name: "Balls",
      link: "/link",
    },
    {
      name: "Gamer",
      link: "/link",
    },
    {
      name: "Esports",
      link: "/link",
    },
    {
      name: "Mobile",
      link: "/link",
    },
    {
      name: "Bat",
      link: "/link",
    },
    {
      name: "Balls",
      link: "/link",
    },
    {
      name: "Gamer",
      link: "/link",
    },
    {
      name: "Esports",
      link: "/link",
    },
    {
      name: "Mobile",
      link: "/link",
    },
    {
      name: "Bat",
      link: "/link",
    },
    {
      name: "Balls",
      link: "/link",
    },
    {
      name: "Gamer",
      link: "/link",
    },
    {
      name: "Esports",
      link: "/link",
    },
    {
      name: "Mobile",
      link: "/link",
    },
    {
      name: "Bat",
      link: "/link",
    },
    {
      name: "Balls",
      link: "/link",
    },
    {
      name: "Gamer",
      link: "/link",
    },
    {
      name: "Esports",
      link: "/link",
    },
    {
      name: "Mobile",
      link: "/link",
    },
    {
      name: "Bat",
      link: "/link",
    },
    {
      name: "Balls",
      link: "/link",
    },
    {
      name: "Gamer",
      link: "/link",
    },
    {
      name: "Esports",
      link: "/link",
    },
    {
      name: "Mobile",
      link: "/link",
    },
    {
      name: "Bat",
      link: "/link",
    },
    {
      name: "Balls",
      link: "/link",
    },
    {
      name: "Gamer",
      link: "/link",
    },
    {
      name: "Esports",
      link: "/link",
    },
    {
      name: "Mobile",
      link: "/link",
    },
    {
      name: "Bat",
      link: "/link",
    },
    {
      name: "Balls",
      link: "/link",
    },
    {
      name: "Gamer",
      link: "/link",
    },
    {
      name: "Esports",
      link: "/link",
    },
    {
      name: "Mobile",
      link: "/link",
    },
    {
      name: "Bat",
      link: "/link",
    },
    {
      name: "Balls",
      link: "/link",
    },
    {
      name: "Gamer",
      link: "/link",
    },
    {
      name: "Esports",
      link: "/link",
    },
    {
      name: "Mobile",
      link: "/link",
    },
    {
      name: "Bat",
      link: "/link",
    },
    {
      name: "Balls",
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
            transition: all 200ms ease;
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
            background: #1a0000;
            width: 100%;
            height: 120%;
            box-shadow: 0px 0px 40px black;

            border-bottom-right-radius: 60%;
            border-bottom-left-radius: 40%;
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
            font-size: 0.71em;
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
            min-width: 160px;
            box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
            z-index: 1;
            height: 70vh;
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
          <div className="logo">
            <img className="img-logo" src="logo.png" alt="" />
          </div>
          <div className="linker">
            {/* <button className="btn btn-navbar-linker">PRODUCTS</button> */}
            <div class="dropdown">
              <button class="btn display-flex-center btn-navbar-linker">
                SPORTS WEAR &nbsp;
                <span class="material-symbols-outlined">arrow_drop_down</span>
              </button>
              <div class="dropdown-content">
                {productList.map((product) => (
                  <a href="#">{product.name}</a>
                ))}
              </div>
            </div>
            <div class="dropdown">
              <button class="btn display-flex-center btn-navbar-linker">
                MARTIAL ARTS &nbsp;
                <span class="material-symbols-outlined">arrow_drop_down</span>
              </button>
              <div class="dropdown-content">
                {productList.map((product) => (
                  <a href="#">{product.name}</a>
                ))}
              </div>
            </div>
            {/* <button className="btn btn-navbar-linker"></button> */}
            <button className="btn btn-navbar-linker">CONTACT US</button>
          </div>
          <div className="menubtn">
            <span
              class="material-symbols-outlined"
              style={{
                fontSize: "2em",
                color: "white",
              }}
              onClick={() => {
                setNav(!isNav);
              }}
            >
              menu_open
            </span>
          </div>
        </div>
      </div>
      {/*  */}
      {/* <Navbar /> */}
      <div className={`menu-main ${isNav ? "open" : "close"}`}>
        <Menu productList={productList} isNav={isNav} setNav={setNav} />
      </div>
    </div>
  );
}
