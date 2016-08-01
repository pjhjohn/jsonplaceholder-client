import React from 'react';
import logo from './../../assets/images/logo.svg';
import './Greeting.css';

class Greeting extends React.Component {
  render() {
    return (
      <div className="Greeting-header">
        <img src={logo} className="Greeting-logo" alt="logo" />
        <h2>Welcome to React</h2>
      </div>
    )
  }
}

export default Greeting;
