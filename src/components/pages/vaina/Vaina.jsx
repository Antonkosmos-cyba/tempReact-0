import React from "react";
import "./vaina.css";

import Carousel from "react-bootstrap/Carousel";
import Image1 from "./a1.jpg";
import Image2 from "./a2.jpg";
import Image3 from "./a3.jpg";
import Image4 from "./a4.jpg";
import Image5 from "./a5.jpg";
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
