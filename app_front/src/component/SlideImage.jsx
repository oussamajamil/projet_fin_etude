import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import styled from 'styled-components';
import ImagesSlide1 from './slideHomme/hero-1.jpg'
import ImagesSlide2 from './slideHomme/hero-2.jpg';
import ImagesSlide3 from './slideHomme/hero-3.jpg';
import ImagesSlide4 from './slideHomme/hero-4.jpg';
import './slideimg.css';

function SlideImage() {
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
    return (
      <Widths>
      <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ImagesSlide1}
          alt="First slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 imgSlack"
          src={ImagesSlide2}
          alt="Second slide"
        />

        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      {/* <Carousel.Item>
        <img
          className="d-block w-100"
          src={ImagesSlide3}
          alt="Third slide"
        />

        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item> */}
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ImagesSlide4}
          alt="Third slide"
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </Widths>
    )
}

export default SlideImage

const Widths= styled.div `
    position:relative;
     width:100vw;
     height: 600px;
     marginTop:10px;
     left:-15px;
`;
