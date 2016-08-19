import React from 'react';
import { Carousel } from 'react-bootstrap';

class SimpleSlider extends React.Component{
  render() {
    return (
      <div className="text-center">
        <Carousel>
          <Carousel.Item>
            <div className="text-center">
              <img width={900} height={500} alt="900x500" src="https://react-bootstrap.github.io/assets/carousel.png"/>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="text-center">
              <img width={900} height={500} alt="900x500" src="https://react-bootstrap.github.io/assets/carousel.png"/>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="text-center">
              <img width={900} height={500} alt="900x500" src="https://react-bootstrap.github.io/assets/carousel.png"/>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default SimpleSlider;
