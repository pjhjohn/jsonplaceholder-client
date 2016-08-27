import React from 'react';
import { Col, Panel } from 'react-bootstrap';
import { Inspector } from 'react-inspector';

class PostItem extends React.Component {
  render() {
    return (
      <Col md={12}>
        <Panel header={this.props.id} bsStyle="primary">
          <Inspector data={this.props} />
        </Panel>
      </Col>
    )
  }
}

export default PostItem;
