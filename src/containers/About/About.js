import React from 'react';
import { Link } from 'react-router';
import { Row, Col } from 'react-grid-system';

import RaisedButton from 'material-ui/RaisedButton';

class About extends React.Component {
  render() {
    return (
      <div>
        <Row style={{ marginBottom: `20px` }}>
          <Col md={6}>
            <Link to={`/about/issues`}>
              <RaisedButton label="Issues" fullWidth={true} primary={true} />
            </Link>
          </Col>
          <Col md={6}>
            <Link to={`/about/pulls`}>
              <RaisedButton label="Pull Requests" fullWidth={true} primary={true} />
            </Link>
          </Col>
        </Row>
        {this.props.children}
      </div>
    )
  }
}

export default About;
