import React, {Component} from 'react';
import Helmet from 'react-helmet';
import GitHubForkRibbon from 'react-github-fork-ribbon'

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
        {/* GIthub Fork Ribbon */}
        <GitHubForkRibbon href="https://github.com/pjhjohn/jsonplaceholder-client"
                          target="_blank"
                          position="right">
          Fork me on GitHub
        </GitHubForkRibbon>

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
