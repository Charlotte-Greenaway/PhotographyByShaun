import React, { useState, useRef } from "react";
import axios from "axios";

import contactPortrait from "../Images/contact/contactPortrait.jpg";
import "./css/contact.css";

const Contact = () => {
  const bgStyle = {
    backgroundImage: `url(${contactPortrait})`,
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
        <form method="post" data-netlify="true" action>
          <h3>Drop Me a Message</h3>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <input
                  type="text"
                  name="txtName"
                  className="form-control"
                  placeholder="Your Name *"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="txtEmail"
                  className="form-control"
                  placeholder="Your Email *"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="txtPhone"
                  className="form-control"
                  placeholder="Your Phone Number *"
                />
              </div>
              <div className="form-group">
                <input
                  type="submit"
                  name="btnSubmit"
                  className="btnContact"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <textarea
                  name="txtMsg"
                  className="form-control text"
                  placeholder="Your Message *"
                ></textarea>
              </div>
            </div>
          </div>
        </form>
      </div>
      </div>
      
    </>
  );
};

export default Contact;
