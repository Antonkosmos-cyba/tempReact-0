import React from "react";
import "./liza.css";

import Carousel from "react-bootstrap/Carousel";
import Image1 from "./b1.jpg";
import Image2 from "./b2.jpg";
import Image3 from "./b3.jpg";
import Image4 from "./b4.jpg";
import Image5 from "./b5.jpg";
import Image6 from "./b6.jpg";
import Image7 from "./b7.jpg";

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
      <Carousel.Item>
        <img src={Image4} alt="" className="pos"></img>
      </Carousel.Item>
      <Carousel.Item>
        <img src={Image5} alt="" className="pos"></img>
      </Carousel.Item>
      <Carousel.Item>
        <img src={Image6} alt="" className="pos"></img>
      </Carousel.Item>
      <Carousel.Item>
        <img src={Image7} alt="" className="pos"></img>
      </Carousel.Item>
    </Carousel>
  );
}

export default Liza;
