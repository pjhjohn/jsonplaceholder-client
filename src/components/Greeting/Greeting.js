import React from 'react';
import logo from './../../assets/images/logo.svg';

import './Greeting.css';
import '../Spectre.css';

import Tap from '../Tap/Tap';

class Greeting extends React.Component {
  render() {
    return (
      <div>
        <div className="Greeting-header text-center">
          <img src={logo} className="Greeting-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <ul className="tab tab-block">
          <Tap menuName="Home"/>
          <Tap menuName="Artist"/>
          <Tap menuName="Posts"/>
          <Tap menuName="Apply"/>
          <Tap menuName="Support"/>
        </ul>
      </div>
    )
  }
}

export default Greeting;
