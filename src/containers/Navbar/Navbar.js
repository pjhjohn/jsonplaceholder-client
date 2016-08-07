import React from 'react';

import './Navbar.css';

import { TabList } from './../../components';


class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar">
        <span className="pseudoBefore" />
          <div className="container">
            <span className="pseudoBefore" />
              <TabList />
            <span className="pseudoAfter" />
          </div>
        <span className="pseudoAfter" />
      </nav>
    )
  }
}

export default Navbar;
