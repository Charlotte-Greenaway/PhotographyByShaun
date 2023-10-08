import React, { useState, useRef } from "react";
import axios from "axios";

import contactPortrait from "../Images/contact/contactPortrait.jpg";
import "./css/contact.css";

const Contact = () => {
  const [result, setResult] = useState("");
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);
  const phoneRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", nameRef.current.value);
    formData.append("email", emailRef.current.value);
    formData.append("message", messageRef.current.value);
    formData.append("phone", phoneRef.current.value);


    axios
      .post("http://localhost/server.php", formData)
      .then((res) => {
        setResult(res.data);
      })
      .catch((error) => {
        console.warn(error);
      });

    nameRef.current.value = "";
    emailRef.current.value = "";
    messageRef.current.value = "";
    phoneRef.current.value = "";

  };

  const bgStyle = {
    backgroundImage: `url(${contactPortrait})`,
    height: "70vh",
    width: "100%",
    backgroundPositionX: "center",
    backgroundPositionY: "20%",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
  };

  return (
    <>
      <div id="contactPic" style={bgStyle}></div>
      <h1 className="contactHeader">Contact Me</h1>
      <div className="contactPage">
      <div className="container contact-form">
        <div className="contact-image">
        <div class="icon-container">
          <i class="fa fa-envelope" style={{fontSize:36+"px"}}></i>
        </div>
        </div>
        <form method="post">
          <h3>Drop Me a Message</h3>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <input
                  type="text"
                  name="txtName"
                  className="form-control"
                  placeholder="Your Name *"
                  ref={nameRef}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="txtEmail"
                  className="form-control"
                  placeholder="Your Email *"
                  ref={emailRef}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="txtPhone"
                  className="form-control"
                  placeholder="Your Phone Number *"
                  ref={phoneRef}
                />
              </div>
              <div className="form-group">
                <input
                  type="submit"
                  name="btnSubmit"
                  className="btnContact"
                  onClick={handleSubmit}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <textarea
                  name="txtMsg"
                  className="form-control text"
                  placeholder="Your Message *"
                  ref={messageRef}
                ></textarea>
              </div>
              <p>{result}</p>
            </div>
          </div>
        </form>
      </div>
      </div>
      
    </>
  );
};

export default Contact;
