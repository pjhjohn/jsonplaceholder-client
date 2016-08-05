import React from 'react';
import { Link } from 'react-router';

import './Tab.css';

class Tab extends React.Component {
  render() {
    return (
      <li className="base list">
        <Link to={this.props.name} className="link" > {this.props.name} </Link>
      </li>
    )
  }
}

export default Tab;
