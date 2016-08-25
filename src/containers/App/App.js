import React, {Component} from 'react';
import Helmet from 'react-helmet';

import Header from './../Header/Header';
import Footer from './../Footer/Footer';
import DevTools from './../DevTools/DevTools';

class App extends Component {
  render() {
    return (
      <div>
        {/* React Helmet */}
        <Helmet
          defaultTitle="jsonplaceholder-client"
          titleTemplate="%s | jsonplaceholder-client"
        />

        {/* Application Body */}
        <Header />
        <div className="container">
          {this.props.children}
        </div>
        <Footer />
        <DevTools />
      </div>
    );
  }
}

export default App;
