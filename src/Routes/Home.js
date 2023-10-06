import {useState, useEffect, useRef} from 'react';
import { Link } from "react-router-dom";
import TestImage from '../Images/homePage/luna.jpg';
import WeddingCover from '../Images/homePage/weddingCover.jpg';
import PortraitCover from '../Images/homePage/portraitCover.jpg';
import DogCover from '../Images/homePage/dogCover.jpg';
import './css/home.css';
const Home = () => {

    const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    let elem = elementRef.current;
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1, 
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
          setHasAnimated(true); 
          observer.unobserve(entry.target);
        }
      });
    }, options);

    if (elem) {
      observer.observe(elem);
    }

    return () => {
      if (elem) {
        observer.unobserve(elem);
      }
    };
  }, [hasAnimated]);
    const divStyle = {
        backgroundImage: `url(${TestImage})`,
        backgroundSize: 'cover', 
        width: '100%',
        height: "100dvh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        color:"white",
        backgroundPosition: "center",
        backgroundPositionY: "top"
    };

    return (
        <>
        <div id="frontPage" style={divStyle}>
            <div id="ctaText">
                <h3 className="display-6">
                Capturing Timeless Moments
                </h3>
                <p>
                Wedding | Portrait | Animal Portraits
                </p>
            </div>
        </div>
        
        <div id="galleryWidgets" ref={elementRef}  className={`${isVisible ? 'fly-fade-in-element' : ''}`}>
        <h3 className="alignCenter headerText">Photo Galleries</h3>
            <hr></hr>
            <Link to="/portraits">
              <div className="galleryWidget">
                  <h3 className="widgetHeader">Portraits</h3>
                  <img src={PortraitCover} alt="portrait" className="widgetImage"/>
              </div>
            </Link>
            <Link to="/weddings">
              <div className="galleryWidget">
                  <h3 className="widgetHeader">Weddings</h3>
                  <img src={WeddingCover} alt="bride" className="widgetImage"/>
              </div>
            </Link>
            <Link to="/animals">
              <div className="galleryWidget">
                  <h3 className="widgetHeader">Animals</h3>
                  <img src={DogCover} alt="dog" className="widgetImage"/>
              </div>
            </Link>
        </div>
        <hr></hr>
        <div className="cta">
            <p className="alignCenter classy">Devon-based expert, crafting cherished memories.</p>
        </div>
        </>
    );
};

export default Home;
