import React, {Component} from 'react';
import Helmet from 'react-helmet';

import Navbar from './../Navbar/Navbar';
import Title from './title';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Helmet {...Title.app.head} />
        <Navbar />
        {this.props.children}
      </div>
    );
  }
}

export default App;
