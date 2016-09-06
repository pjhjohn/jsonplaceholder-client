import React, {Component} from 'react';
import Helmet from 'react-helmet';
import { Container } from 'react-grid-system';
import GitHubForkRibbon from 'react-github-fork-ribbon'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Header from './../Header/Header';
import Footer from './../Footer/Footer';
import DevTools from './../DevTools/DevTools';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
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
          <Container style={{paddingTop: "20px", fontFamily: "Roboto"}}>
            {this.props.children}
          </Container>
          <Footer />
          <DevTools />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
