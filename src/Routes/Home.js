import {useState, useEffect, useRef} from 'react';
import TestImage from '../Images/luna.jpg';
import WeddingCover from '../Images/weddingCover.jpg';
import PortraitCover from '../Images/portraitCover.jpg';
import DogCover from '../Images/dogCover.jpg';
import './home.css';
const Home = () => {

    const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    let elem = elementRef.current;
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, 
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
            <div className="galleryWidget">
                <h3 className="widgetHeader">Portraits</h3>
                <img src={PortraitCover} alt="portrait" className="widgetImage"/>
            </div>
            <div className="galleryWidget">
                <h3 className="widgetHeader">Weddings</h3>
                <img src={WeddingCover} alt="bride" className="widgetImage"/>
            </div>
            <div className="galleryWidget">
                <h3 className="widgetHeader">Animals</h3>
                <img src={DogCover} alt="dog" className="widgetImage"/>
            </div>
        </div>
        <hr></hr>
        <div className="cta">
            <p className="alignCenter classy">Devon-based expert, crafting cherished memories.</p>
        </div>
        </>
    );
};

export default Home;
