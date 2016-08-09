import React from 'react';
import Helmet from 'react-helmet';

import logo from './../../assets/images/logo.svg';

class Greeting extends React.Component {
  render() {
    return (
      <div>
        <Helmet
          title="Home"
        />
        <div className="Greeting-header text-center">
          <img src={logo} className="Greeting-logo" alt="logo" />
          <h2 className="margin_zero">Welcome to React</h2>
        </div>
      </div>
    )
  }
}

export default Greeting;
