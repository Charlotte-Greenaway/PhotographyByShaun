import weddings1 from "../Images/weddings/weddings1.jpg";
import weddings3 from "../Images/weddings/weddings3.jpg";
import weddings4 from "../Images/weddings/weddings4.jpg";

import "./css/weddings.css";
const Weddings = () => {
  return (
    <>
      <div id="demo" className="carousel slide" data-ride="carousel">
        <ul className="carousel-indicators">
          <li data-target="#demo" data-slide-to="0" className="active"></li>
          <li data-target="#demo" data-slide-to="1"></li>
          <li data-target="#demo" data-slide-to="2"></li>
        </ul>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={weddings1} alt="group wedding" />
          </div>
          <div className="carousel-item">
            <img src={weddings3} alt="wedding" />
          </div>
          <div className="carousel-item">
            <img src={weddings4} alt="bride and groom" />
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
    </>
  );
};
export default Weddings;
