import React, {Component} from "react";

import Navbar from '../../containers/Navbar/Navbar';

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
