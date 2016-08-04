import React from 'react';
import logo from './../../assets/images/logo.svg';

import './Greeting.css';
import '../Spectre.css';

import Tab from '../Tab/Tab';

class Greeting extends React.Component {
  render() {
    return (
      <div>
        <div className="Greeting-header text-center">
          <img src={logo} className="Greeting-logo" alt="logo" />
          <h2 className="margin_zero">Welcome to React</h2>
        </div>
        <ul className="tab tab-block">
          <Tab menuName="Home"/>
          <Tab menuName="Artist"/>
          <Tab menuName="Posts"/>
          <Tab menuName="Apply"/>
          <Tab menuName="Support"/>
        </ul>
      </div>
    )
  }
}

export default Greeting;

