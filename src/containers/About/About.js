import React from 'react';
import { Link } from 'react-router';
import { Button } from 'react-bootstrap';

class About extends React.Component {

  render() {
    return (
      <div>
        <h1 className="text-center"> ABOUT PAGE </h1>
        <Link to="about/issues">
          <Button bsStyle="link"> ISSUES </Button>
        </Link>
        {this.props.children}
      </div>
    )
  }
}

export default About;
