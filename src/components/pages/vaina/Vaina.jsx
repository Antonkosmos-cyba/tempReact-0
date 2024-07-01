import React from "react";
import "./vaina.css";

import Carousel from "react-bootstrap/Carousel";
import Image1 from "./1ak.jpg";
import Image2 from "./2ak.jpg";
import Image3 from "./3ak.jpg";
import Image4 from "./4ak.jpg";
import Image5 from "./5ak.jpg";
import Image6 from "./6ak.jpg";

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
        <Carousel.Item>
          <img src={Image6} alt="" className="pos"></img>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Vaina;
