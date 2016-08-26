import React from 'react';
import { Inspector } from 'react-inspector';
import { Col, Well } from 'react-bootstrap';

class Comment extends React.Component {
  render() {
    return (
      <Col md={12}>
        <Well bsSize="small" style={{backgroundColor: "white"}}>
          <Inspector data={this.props} expandLevel={1} />
        </Well>
      </Col>
    )
  }
}

export default Comment;
