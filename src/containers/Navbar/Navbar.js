import React from 'react';

import TabList from '../../components/TabList/TabList';

import './Navbar.css';

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
