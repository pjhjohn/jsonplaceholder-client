import React from 'react';
import { Link } from 'react-router';
import { Row } from 'react-grid-system';
import RaisedButton from 'material-ui/RaisedButton';

class About extends React.Component {
  render() {
    return (
      <div>
        <h1 className="text-center"> ABOUT PAGE </h1>
        <Row style={{ marginBottom: `20px` }}>
          <Link to={`/about/issues`}>
            <RaisedButton label="ISSUES" fullWidth={true} primary={true} />
          </Link>
        </Row>
        <Row style={{ marginBottom: `20px` }}>
          <Link to="/about/pulls">
            <RaisedButton label="PULL REQUESTS" fullWidth={true} primary={true} />
          </Link>
        </Row>
        {this.props.children}
      </div>
    )
  }
}

export default About;
