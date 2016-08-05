import React from 'react';

import Tab from '../../components/Tab/Tab';

class Navbar extends React.Component {
  render() {
    return (
      <ul className="tab tab-block">
        <Tab menuName="Home"/>
        <Tab menuName="Artist"/>
        <Tab menuName="Posts"/>
        <Tab menuName="Apply"/>
        <Tab menuName="Support"/>
      </ul>
    );
  }
}

export default Navbar;
