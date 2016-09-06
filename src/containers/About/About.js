import React from 'react';
import { Link } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';

class About extends React.Component {
  render() {
    return (
      <div>
        <h1 className="text-center"> ABOUT PAGE </h1>
        <Link to={`/about/issues`}>
          <RaisedButton label="ISSUES" fullWidth={true} primary={true} />
        </Link>
        {this.props.children}
      </div>
    )
  }
}

export default About;
