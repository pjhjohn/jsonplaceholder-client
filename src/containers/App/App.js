import React, {Component} from 'react';

import { Navbar } from './..';

import './../../Spectre.scss';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="container grid-960">
        <Navbar />
        {this.props.children}
      </div>
    );
  }
}

export default App;
