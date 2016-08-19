import React, {Component} from 'react';
import Helmet from 'react-helmet';

import Navbar from './../Navbar/Navbar';
import Footer from './../Footer/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <Helmet
            defaultTitle="jsonplaceholder-client"
            titleTemplate="%s | jsonplaceholder-client"
          />
          <Navbar />
          {this.props.children}
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
