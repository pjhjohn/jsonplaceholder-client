import React from 'react';
import { Carousel as BootstrapCarousel } from 'react-bootstrap';

class Carousel extends React.Component{
  render() {
    return (
      <div className="text-center">
        <BootstrapCarousel>
          <BootstrapCarousel.Item>
            <div className="text-center">
              <img width={900} height={500} alt="900x500" src="https://react-bootstrap.github.io/assets/carousel.png"/>
            </div>
          </BootstrapCarousel.Item>
          <BootstrapCarousel.Item>
            <div className="text-center">
              <img width={900} height={500} alt="900x500" src="https://react-bootstrap.github.io/assets/carousel.png"/>
            </div>
          </BootstrapCarousel.Item>
          <BootstrapCarousel.Item>
            <div className="text-center">
              <img width={900} height={500} alt="900x500" src="https://react-bootstrap.github.io/assets/carousel.png"/>
            </div>
          </BootstrapCarousel.Item>
        </BootstrapCarousel>
      </div>
    );
  }
}

export default Carousel;
