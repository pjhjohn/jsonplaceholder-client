/**
 * Created by lanie on 2016-08-05.
 */
import React from 'react';

import Tab from '../Tab/Tab';

import './TabList.css';

class TabList extends React.Component {
  render() {
    return(
      <div className="collapse">
        <span className="pseudoBefore" />
          <ul className="base">
            <span className="pseudoBefore" />
              <Tab name="Home" />
              <Tab name="Artists" />
              <Tab name="Posts" />
              <Tab name="Apply" />
              <Tab name="Support" />
            <span className="pseudoAfter" />
          </ul>
        <span className="pseudoAfter" />
      </div>
    )
  }
}

export default TabList;