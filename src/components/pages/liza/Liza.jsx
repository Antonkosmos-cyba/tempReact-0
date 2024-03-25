import React from "react";
import "./liza.css";

import Carousel from "react-bootstrap/Carousel";
import Image1 from "./liza.png";
import Image2 from "./liz2.png";
import Image3 from "./liz3.png";

function Liza() {
  return (
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
  );
}

export default Liza;
