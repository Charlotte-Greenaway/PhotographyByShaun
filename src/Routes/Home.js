import TestImage from '../Images/luna.jpg';
import WeddingCover from '../Images/weddingCover.jpg';
import PortraitCover from '../Images/portraitCover.jpg';
import DogCover from '../Images/dogCover.jpg';
import './home.css';
const Home = () => {
    // Define a style object to set the background image
    const divStyle = {
        backgroundImage: `url(${TestImage})`,
        backgroundSize: 'cover', // You can adjust this to your needs
        // Add other CSS properties as needed
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
                <h3 className="headerText">
                Capturing Timeless Moments
                </h3>
                <p>
                Wedding | Portrait | Animal Portraits
                </p>
            </div>
        </div>
        
        <div id="galleryWidgets" >
        <h3 className="alignCenter">Photo Galleries</h3>
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
        <div className="cta">
            <p className="alignCenter classy">Devon-based expert, crafting cherished memories.</p>
        </div>
        </>
    );
};

export default Home;
