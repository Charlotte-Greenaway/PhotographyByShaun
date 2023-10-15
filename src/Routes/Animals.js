import { useState } from "react";
import "./css/animals.css";
import dog from "../Images/homePage/dogCover.jpg";
const Animals = () => {
  const [angle, setAngle] = useState(0);
  const gallerySpin = (sign) => {
    if (!sign) {
      setAngle(angle + 45);
    } else {
      setAngle(angle - 45);
    }
  };

  return (
    <>
      <div id="carii">
        <figure
          id="spinni"
          style={{
            WebkitTransform: "rotateY(" + angle + "deg)",
            MozTransform: "rotateY(" + angle + "deg)",
            transform: "rotateY(" + angle + "deg)",
          }}
        >
          <img src={dog} alt />
          <img src={dog} alt />
          <img src={dog} alt />
          <img src={dog} alt />
          <img src={dog} alt />
          <img src={dog} alt />
          <img src={dog} alt />
          <img src={dog} alt />
        </figure>
      </div>
      <span style={{float:"left"}} class="ss-icon" onClick={() => gallerySpin('')}>
        &lt;
      </span>
      <span style={{float:"right"}} class="ss-icon" onClick={() => gallerySpin('+')}>
        &gt;
      </span>
    </>
  );
};

export default Animals;
