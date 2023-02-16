import React from "react";

export default function BtnsDiv() {
  return (
    <div>
      <style jsx="true">{`
        .instagram-s-btn-btn {
          background-color: var(--mainRed);
          width: 40px;
          height: 40px;
          cursor: pointer;
          border: none;
          display: flex;
          border-radius: 50%;
          align-items: center;
          justify-content: center;
          outline: none;
          margin: 0 5px;
        }
        .instagram-s-btn-img {
          width: 18px;
        }
        .main-btns-div-cnt-cmpt {
          margin-top: 10px;
          display: flex;
        }
      `}</style>
      <div className="main-btns-div-cnt-cmpt">
        <div className="instagram-s-btn">
          <a href="https://www.instagram.com/arooj.sports/?igshid=YmMyMTA2M2Y%3D">
            <button className="instagram-s-btn-btn">
              <img
                className="instagram-s-btn-img"
                src="/instagram.png"
                alt="Arooj sports Instagram"
              />
            </button>
          </a>
        </div>
        <div className="instagram-s-btn">
          <a href="https://wa.me/+923107206923">
            <button className="instagram-s-btn-btn">
              <img
                className="instagram-s-btn-img"
                src="/whatsapp.png"
                alt="Arooj sports Instagram"
              />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
