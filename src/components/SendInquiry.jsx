import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router";
import { mainRouting } from "../Routes in JSON/MartialArtsData";
import Loading from "./Loading";
import emailjs from "@emailjs/browser";

export default function SendInquiry() {
  const [loading, setloading] = useState(true);
  const { para, child, prod } = useParams();
  const Product_OBJ = mainRouting[para - 1][child].furtherObj[prod];
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_q0cury6",
        "template_2jul1mc",
        form.current,
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
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  document.title =
    "Send Inquiry for " + Product_OBJ.name + " #P" + `${Number(prod) + 1}`;

  return (
    <div
      style={{
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
      <div className="res-1100">
        <div className="upper-inq">
          <img className="image-inq" src={`/${Product_OBJ.img}`} alt="" />
          <h1 className="heading-name-prod-inq">
            {Product_OBJ.name} #P{Number(prod) + 1}
          </h1>
        </div>
        <div className="lower-inq">
          <form ref={form} onSubmit={sendEmail}>
            <div className="input-feild">
              <p className="input-name">Your name</p>
              <input
                className="input-f-inq"
                type="text"
                name="user_name"
                id=""
              />
              <input
                className="input-f-inq"
                style={{ display: "none" }}
                value={`${Product_OBJ.name} #P${Number(prod) + 1}`}
                type="text"
                name="p_name"
                id=""
              />
              <input
                className="input-f-inq"
                type="text"
                name="p_link"
                style={{ display: "none" }}
                id=""
                value={`https://aroojsports.com/${para}/${child}/${prod}`}
              />
            </div>
            <div className="input-feild">
              <p className="input-name">Email</p>
              <input
                className="input-f-inq"
                type="text"
                name="user_email"
                id=""
              />
            </div>
            <div className="input-feild">
              <p className="input-name">Address</p>
              <input
                className="input-f-inq"
                type="text"
                name="user_address"
                id=""
              />
            </div>
            <div className="input-feild">
              <p className="input-name">Mobile No.</p>
              <input
                className="input-f-inq"
                type="text"
                name="user_mobile_no"
                id=""
              />
            </div>
            <div className="input-feild">
              <p className="input-name">Company Name</p>
              <input
                className="input-f-inq"
                type="text"
                name="user_company"
                id=""
              />
            </div>
            <div className="input-feild">
              <p className="input-name">Quantity</p>
              <input
                className="input-f-inq"
                type="number"
                min="1"
                name="user_p_quan"
                id=""
              />
            </div>
            <div className="input-feild">
              <p className="input-name">Custom Comment</p>
              <textarea
                name="c_comment"
                placeholder="Please Give your Instagram link or Facebook link (if any) "
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
                style={{
                  marginTop: "calc(1em - 10px)",
                }}
                className="send-inquiry-btn"
                value="Send Inquiry"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
