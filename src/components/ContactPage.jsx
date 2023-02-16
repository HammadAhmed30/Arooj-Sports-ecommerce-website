import React, { useState, useEffect, useRef } from "react";
import Loading from "./Loading";
import emailjs from "@emailjs/browser";

export default function ContactPage() {
  const [loading, setloading] = useState(true);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const form2 = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_q0cury6",
        "template_d66wfqa",
        form2.current,
        "ET-C2yHiZC0a2d5YI"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message Sent");
        },
        (error) => {
          console.log(error.text);
          alert("There is an Error in Sending Message");
        }
      );
  };
  document.title = "Arooj Sports | Contact";
  return (
    <div
      className="res-1100"
      style={{
        marginTop: "4em",
        marginBottom: "2em",
        position: "relative",
      }}
    >
      <img
        className="image-red-send-inquiry"
        onLoad={() => {
          setloading(false);
        }}
        src="/element 02.png"
        alt=""
      />
      {loading && <Loading />}
      <div className="main-contact-page">
        <div className="form-contact-page">
          <form ref={form2} onSubmit={sendEmail}>
            <h1
              style={{
                color: "white",
                textAlign: "center",
                paddingTop: "1em",
                fontWeight: "600",
              }}
            >
              Contact Form
            </h1>

            <div className="input-feild">
              <p className="input-name">Your name</p>
              <input
                required
                className="input-f-inq"
                type="text"
                name="user_name_c"
                id=""
              />
            </div>
            <div className="input-feild">
              <p className="input-name">Email</p>
              <input
                required
                className="input-f-inq"
                type="text"
                name="user_email_c"
                id=""
              />
            </div>

            <div className="input-feild">
              <p className="input-name">Mobile No.</p>
              <input
                className="input-f-inq"
                type="text"
                name="user_mobile"
                id=""
              />
            </div>

            <div className="input-feild">
              <p className="input-name">Message</p>
              <textarea
                required
                name="message_c"
                placeholder="Message for us"
                className="input-f-inq"
                style={{
                  width: "calc(100% - 20px)",
                }}
                rows="4"
              ></textarea>
            </div>
            <div
              style={{
                textAlign: "right",
              }}
              className="input-feild"
            >
              <input
                type="submit"
                value="Send Message"
                style={{
                  marginTop: "calc(1em - 10px)",
                }}
                className="send-inquiry-btn"
              />
            </div>
          </form>
        </div>
        <div className="map-contact-page">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13460.2893037749!2d74.5481656!3d32.497496!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391eebb013e24e49%3A0x1b89b6da61bc171f!2sAROOJ%20TEXTILE%20%26%20SPORTS!5e0!3m2!1sen!2s!4v1676111551916!5m2!1sen!2s"
            style={{
              border: "0",
              width: "calc(100% - 20px)",
            }}
            height="400"
            loading="lazy"
          ></iframe>

          <div className="contact-social-media">
            <div className="a-social-m-cont">
              <a target="_blank" href="https://www.facebook.com/Arooj.sports1/">
                <img
                  style={{
                    width: "100%",
                  }}
                  src="/facebook.png"
                  alt=""
                />
              </a>
            </div>
            <div className="a-social-m-cont">
              <a target="_blank" href="https://www.instagram.com/arooj.sports/">
                <img
                  style={{
                    width: "100%",
                  }}
                  src="/instagram.png"
                  alt=""
                />
              </a>
            </div>
            <div className="a-social-m-cont">
              <a target="_blank" href="mailto:info@aroojsports.com">
                <img
                  style={{
                    width: "100%",
                  }}
                  src="/mail.png"
                  alt=""
                />
              </a>
            </div>
          </div>

          <div
            className="contact"
            style={{
              marginTop: "10px",
              color: "white",
            }}
          >
            <span className="material-symbols-outlined font-light-200">
              call
            </span>
            <p className="details-para-footer-contact">
              +92 308 0488884
              <br />
              +92 304 1538183
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
