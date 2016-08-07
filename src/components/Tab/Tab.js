import React from 'react';
import { Link } from 'react-router';

import './Tab.scss';

class Tab extends React.Component {
  render() {
    return (
      <li className="tab-item">
        <Link to={this.props.menuName}> {this.props.menuName} </Link>
      </li>
    )
  }
}

export default Tab;
