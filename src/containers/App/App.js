import React, {Component} from 'react';
import Helmet from 'react-helmet';

import Navbar from './../Navbar/Navbar';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Helmet
          defaultTitle="jsonplaceholder-client"
          titleTemplate="%s | jsonplaceholder-client"
        />
        <Navbar />
        {this.props.children}
      </div>
    );
  }
}

export default App;
