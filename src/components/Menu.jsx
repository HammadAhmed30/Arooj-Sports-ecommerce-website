import React from "react";

export default function Menu(props) {
  return (
    <>
      <style jsx="true">{`
        .dropdown-content-1 {
          height: 200px;
          display: none;
          position: absolute;
          background-color: #070707;
          min-width: 160px;
          box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
          z-index: 1;
          overflow-y: scroll;
        }
        .dropdown-content-1 {
          display: none;
          position: absolute;
          background-color: #070707;
          min-width: 160px;
          box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
          z-index: 1;
          overflow-y: scroll;
        }
        .dropdown-content-1::-webkit-scrollbar-thumb {
          background: #292929;
        }

        .dropdown-content-1::-webkit-scrollbar {
          width: 5px;
          background-color: #121212;
        }

        /* Links inside the dropdown */
        .dropdown-content-1 a {
          color: white;
          padding: 10px 0px;
          font-size: 0.81em;
          padding-left: 10px;
          text-decoration: none;
          display: block;
        }

        /* Change color of dropdown links on hover */
        .dropdown-content-1 a:hover {
          background-color: #111111;
        }

        /* Show the dropdown menu on hover */
        .dropdown:hover .dropdown-content-1 {
          display: block;
        }
        .main-me {
          position: relative;
          right: 0;
          top: 0;
          height: 100vh;
          width: 50vw;
          //   backgroundColor: "#0d0d0d",
          z-index: 100;
          // overflowX: "scroll",
        }
        .top-close {
          position: absolute;
          top: 20px;
          right: 20px;
          color: white;
          cursor: pointer;
        }
        .main-menu {
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          align-items: center;
          /* From https://css.glass */
          background: rgba(255, 255, 255, 0.2);
          //   border-radius: 16px;
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(5px);
          //   border: 1px solid rgba(255, 255, 255, 0.3);
        }
        .button {
          font-size: 1em;
        }
        @media only screen and (max-width: 800px) {
          .main-me {
            width: 100vw;
          }
        }
      `}</style>
      <div className="main-me" style={{}}>
        <div className="main-menu">
          <span
            onClick={() => {
              props.setNav(!props.isNav);
            }}
            className="material-symbols-outlined top-close"
          >
            close
          </span>
          <div className="dropdown">
            <button className="button btn display-flex-center btn-navbar-linker">
              SPORTS WEAR &nbsp;
              <span className="material-symbols-outlined">
                keyboard_double_arrow_down
              </span>
            </button>
            <div className="dropdown-content-1">
              {props.productList.map((product) => (
                <a href="#">{product.name}</a>
              ))}
            </div>
          </div>
          <div className="dropdown">
            <button class="button btn display-flex-center btn-navbar-linker">
              MARTIAL ARTS &nbsp;
              <span className="material-symbols-outlined">
                keyboard_double_arrow_down
              </span>
            </button>
            <div className="dropdown-content-1">
              {props.productList.map((product) => (
                <a href="#">{product.name}</a>
              ))}
            </div>
          </div>
          <button className="button btn display-flex-center btn-navbar-linker">
            ABOUT US
          </button>
          <button className="button btn display-flex-center btn-navbar-linker">
            CONTACT US
          </button>
        </div>
      </div>
    </>
  );
}
