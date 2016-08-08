import React, {Component} from "react";
import Helmet from "react-helmet";

import Navbar from '../../containers/Navbar/Navbar';

class App extends Component {
  render() {
    return (
      <div className="container grid-960">
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
