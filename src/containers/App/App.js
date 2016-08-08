<<<<<<< HEAD
import React, {Component} from "react";
import Helmet from "react-helmet";
=======
import React, {Component} from 'react';
>>>>>>> 588940f53b408bf355382fdda9a207cef3758b7d

import { Navbar } from './..';

class App extends Component {
  render() {
    return (
<<<<<<< HEAD
      <div className="container grid-960">
        <Helmet
          defaultTitle="jsonplaceholder-client"
          titleTemplate="%s | jsonplaceholder-client"
        />
=======
      <div className="container">
>>>>>>> 588940f53b408bf355382fdda9a207cef3758b7d
        <Navbar />
        {this.props.children}
      </div>
    );
  }
}

export default App;
