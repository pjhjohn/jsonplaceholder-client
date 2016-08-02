import React, {Component} from "react";

class App extends Component {
  render() {
    return (
      <div className="container grid-960">
        {this.props.children}
      </div>
    );
  }
}

export default App;
