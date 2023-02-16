import React from "react";
import { Link } from "react-router-dom";
import { mainRouting } from "../Routes in JSON/MartialArtsData";
import BtnsDiv from "./BtnsDiv";

export default function Footer() {
  return (
    <div>
      <div className="news-letter">
        <div className="main-news-letter">
          <span className="material-symbols-outlined to-font-size">feed</span>
          <div className="heading-input">
            <p className="heading-for-newsletter">
              Subscribe to our newsletter!
            </p>
            <input
              className="input-newsletter"
              placeholder="E-mail"
              type="text"
            />
          </div>
          <button className="btn-subs">Subscribe</button>
        </div>
      </div>
      <div className="mainFooter">
        <div className="res-1100">
          <div className="main-footer-flex">
            <div className="logo-linkers">
              <Link to="/">
                <img
                  className="logo-footer"
                  src="/logo.png"
                  alt="Arooj Sports Logo"
                />
              </Link>
              <div className="cata-flex-footer">
                <div className="martialArts-footer">
                  <h2 className="heading-linker-footer">Martial Arts</h2>
                  {mainRouting[0].map((item, index) => (
                    <div key={index}>
                      <Link
                        onClick={() => {
                          window.scrollTo(0, 0);
                        }}
                        className="main-footer-linker-text"
                        to={`/1/${index}`}
                      >
                        {item.name}
                      </Link>
                    </div>
                  ))}
                </div>
                <div className="martialArts-footer">
                  <h2 className="heading-linker-footer">Sports Wear</h2>
                  {mainRouting[1].map((item, index) => (
                    <div key={index}>
                      <Link
                        onClick={() => {
                          window.scrollTo(0, 0);
                        }}
                        className="main-footer-linker-text"
                        to={`/2/${index}`}
                      >
                        {item.name}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="contact-info">
              <p className="contact-footer-heading">Get in touch</p>
              <div className="contact">
                <span className="material-symbols-outlined font-light-200">
                  call
                </span>
                <p className="details-para-footer-contact">
                  +92 308 0488884
                  <br />
                  +92 304 1538183
                </p>
              </div>
              <div className="contact" style={{ marginTop: "10px" }}>
                <span className="material-symbols-outlined font-light-200">
                  mail
                </span>
                <p className="details-para-footer-contact">
                  info@aroojsports.com
                </p>
              </div>
              <div>
                <BtnsDiv />
              </div>
            </div>
          </div>
        </div>
        <p className="cc-para-footer">
          &copy;{" "}
          <a href="https://aroojsports.com/">
            <strong>Aroog Sports</strong>
          </a>{" "}
          all rights are reserved. Designed by{" "}
          <strong>
            <a target="_blank" href="https://www.instagram.com/agaaz.01/">
              Agaaz
            </a>
          </strong>{" "}
          and developed by{" "}
          <strong>
            <a target="_blank" href="https://www.instagram.com/ravalbit/">
              Ravalbit
            </a>
          </strong>
        </p>
      </div>
    </div>
  );
}
