import React, { useState } from "react";
import { Carousel} from 'react-bootstrap';
import "../css/Carousel.css";

const ConCarousel = () => {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <div className="container-fluid px-0">
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <img
              className="d-block carousel-item"
              src="https://i.pinimg.com/originals/7d/0d/bc/7d0dbc5b73b4174f1bdd3f932fa2243e.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Aula 1</h3>
              <p>Eccola la nostra aula più bella.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block carousel-item"
              src="https://www.visualworld.it/wp-content/uploads/2015/11/officesmall.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Aula 2</h3>
              <p>Beh anche questa non è male.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
  
  export default ConCarousel;