import React, {Component} from "react";
import Greeting from '../../components/Greeting/Greeting';

class App extends Component {
  render() {
    return (
      <div className="container grid-960">
        <Greeting>
        </Greeting>
        {this.props.children}
      </div>
    );
  }
}

export default App;
