import React from "react";
import "./vaina.css";

import Carousel from "react-bootstrap/Carousel";
import Image1 from "./a11.png";
import Image2 from "./a12.png";
import Image3 from "./a13.png";
import Image4 from "./a14.png";
import Image5 from "./a15.png";
// import Image6 from "./6ak6.jpg";

function Vaina() {
  return (
    <div className="cont">
      <Carousel fade className="positem">
        <Carousel.Item>
          <img src={Image1} alt="" className="pos"></img>
        </Carousel.Item>

        <Carousel.Item>
          <img src={Image2} alt="" className="pos"></img>
        </Carousel.Item>
        <Carousel.Item>
          <img src={Image3} alt="" className="pos"></img>
        </Carousel.Item>
        <Carousel.Item>
          <img src={Image4} alt="" className="pos"></img>
        </Carousel.Item>
        <Carousel.Item>
          <img src={Image5} alt="" className="pos"></img>
        </Carousel.Item>
        {/* <Carousel.Item>
          <img src={Image6} alt="" className="pos"></img>
        </Carousel.Item> */}
      </Carousel>
    </div>
  );
}

export default Vaina;
