import React from 'react';

import '../Spectre.css';

class Tab extends React.Component {
  render() {
    return(
        <li className="tab-item">
          <a href={this.props.menuName}> {this.props.menuName} </a>
        </li>
    )
  }
}

export default Tab;
