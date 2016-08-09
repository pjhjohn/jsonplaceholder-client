import React from 'react';
import { Link } from 'react-router';

class Tab extends React.Component {
  render() {
    return (
      <li className="tab-item">
        <Link to={this.props.menuName.toLowerCase()}> {this.props.menuName} </Link>
      </li>
    )
  }
}

export default Tab;
