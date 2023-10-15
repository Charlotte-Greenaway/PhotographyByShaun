import React, { useState, useEffect } from "react";
import "./css/weddings.css";

import "bootstrap/dist/css/bootstrap.min.css";

const Weddings = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setShowModal(true);
  };

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup the effect when the component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showModal]);

  return (
    <>
      <div className="weddingHead">
        <div className="jumbotron text-center">
          <h1 className="display-4">Welcome to Your Special Day</h1>
          <p className="lead">
            Experience the magic and beauty of wedding.
          </p>
          <hr className="my-4" />
          <h1 class="wgh">Celebrating love and joy!</h1>
        </div>
      </div>

      <section id="gallery" className="container">
        <h2 className="text-center mb-4">Love Through the Lens</h2>
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card">
              <img
                src="https://www.pocketfulofdreams.co.uk/wp-content/uploads/2018/04/DHstyled332.jpg"
                className="card-img-top"
                alt="Wedding  1"
              />
              <div className="card-body">
                <p className="card-text">
                  A magical moment captured during the ceremony.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card">
              <img
                src="data:image/jpeg;base64,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"
                className="card-img-top"
                alt="Wedding  2"
              />
              <div className="card-body">
                <p className="card-text">
                  Love and laughter fill the air on our special day.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card">
              <img
                src="https://www.idofilmandphotos.co.uk/wp-content/uploads/2023/01/AJ-SP-0046-300x200.jpg"
                className="card-img-top"
                alt="Wedding  3"
              />
              <div className="card-body">
                <p className="card-text">
                  A romantic dance under the starry night sky.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr/>
      <section id="information" className="container">
        <h2 className="text-center mb-4">Weddings in Focus</h2>
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <div
              id="weddingCarousel"
              className="carousel slide"
              data-ride="carousel"
            >
              <ol className="carousel-indicators">
                <li
                  data-target="#weddingCarousel"
                  data-slide-to="0"
                  className="active"
                ></li>
                <li data-target="#weddingCarousel" data-slide-to="1"></li>
                <li data-target="#weddingCarousel" data-slide-to="2"></li>
              </ol>
              <div className="carousel-inner">
                <div className="carousel-item active" onClick={() => handleImageClick("https://via.placeholder.com/800x400")}>
                  <img
                    src="data:image/jpeg;base64,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"
                    className="d-block w-100"
                    alt="Wedding Carousel  1"
                  />
                </div>
                <div className="carousel-item" onClick={() => handleImageClick("https://via.placeholder.com/800x400")}>
                  <img
                    src="https://via.placeholder.com/800x400"
                    className="d-block w-100"
                    alt="Wedding Carousel  2"
                  />
                </div>
                <div className="carousel-item" onClick={() => handleImageClick("https://via.placeholder.com/800x400")}>
                  <img
                    src="https://via.placeholder.com/800x400"
                    className="d-block w-100"
                    alt="Wedding Carousel  3"
                  />
                </div>
              </div>
              <a
                className="carousel-control-prev"
                href="#weddingCarousel"
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
                href="#weddingCarousel"
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
        </div>
      </section>
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
