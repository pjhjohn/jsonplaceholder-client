import React from 'react';
import { Carousel } from 'react-bootstrap';

class SimpleSlider extends React.Component{
  render() {
    return (
        <Carousel>
          <Carousel.Item>
            <img width={900} height={500} alt="900x500" src="https://react-bootstrap.github.io/assets/carousel.png"/>
          </Carousel.Item>
          <Carousel.Item>
            <img width={900} height={500} alt="900x500" src="https://react-bootstrap.github.io/assets/carousel.png"/>
          </Carousel.Item>
          <Carousel.Item>
            <img width={900} height={500} alt="900x500" src="https://react-bootstrap.github.io/assets/carousel.png"/>
          </Carousel.Item>
        </Carousel>
    );
  }
}

export default SimpleSlider;
