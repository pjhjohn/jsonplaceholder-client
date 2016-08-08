import React from 'react';
import Helmet from 'react-helmet';

import logo from './../../assets/images/logo.svg';

import './Greeting.css';

class Greeting extends React.Component {
  render() {
    return (
      <div>
        <div className="Greeting-header text-center">
          <Helmet
              title="Home"
          />
          <img src={logo} className="Greeting-logo" alt="logo" />
          <h2 className="margin_zero">Welcome to React</h2>
        </div>
      </div>
    )
  }
}

export default Greeting;
