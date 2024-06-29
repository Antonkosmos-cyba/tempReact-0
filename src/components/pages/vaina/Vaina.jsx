import React from "react";
import "./vaina.css";

import Carousel from "react-bootstrap/Carousel";
import Image1 from "./ak2.jpg";
import Image2 from "./ak3.jpeg";
import Image3 from "./ak4.jpg";

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
      </Carousel>
    </div>
  );
}

export default Vaina;
