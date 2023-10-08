import React, { useState, useEffect } from "react";
import weddings1 from "../Images/weddings/weddings1.jpg";
import weddings3 from "../Images/weddings/weddings3.jpg";
import weddings4 from "../Images/weddings/weddings4.jpg";
import "./css/weddings.css";

import "bootstrap/dist/css/bootstrap.min.css";

const Weddings = () => {
  
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    console.log("poo")
    setSelectedImage(image);
    setShowModal(true);
  };

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    // Cleanup the effect when the component unmounts
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showModal]);

  return (
    <>
      <div id="demo" className="carousel slide" data-ride="carousel">
      <div id="demo" className="carousel slide" data-ride="carousel">
        <ul className="carousel-indicators">
          <li data-target="#demo" data-slide-to="0" className="active"></li>
          <li data-target="#demo" data-slide-to="1"></li>
          <li data-target="#demo" data-slide-to="2"></li>
        </ul>

        <div className="carousel-inner">
          <div className="carousel-item active" onClick={() => handleImageClick(weddings1)}>
            <img src={weddings1} alt="group wedding" />
          </div>
          <div className="carousel-item">
            <img src={weddings3} alt="wedding" onClick={() => handleImageClick(weddings3)}/>
          </div>
          <div className="carousel-item">
            <img src={weddings4} alt="bride and groom" onClick={() => handleImageClick(weddings4)}/>
          </div>
        </div>

        <a
          className="carousel-control-prev"
          href="#demo"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#demo"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
      </div>

      {/* Modal for image preview */}
      <div id="modalBlur" className={`modal${showModal ? " show" : ""}`}></div>
      <div className={`modal${showModal ? " show" : ""}`} id="imageModal" tabIndex="-1" role="dialog">
        <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
          <div className="modal-content">
          <div className="modal-header">
            <button
              type="button"
              className="close"
              onClick={() => setShowModal(false)}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
            <div className="modal-body text-center">
              {selectedImage && <img src={selectedImage} alt="Preview" className="img-fluid" />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Weddings;
