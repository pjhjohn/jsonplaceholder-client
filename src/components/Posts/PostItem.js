import React from 'react';
import { Inspector } from 'react-inspector';
import { Col, Panel } from 'react-bootstrap';

class PostItem extends React.Component {
  render() {
    return (
      <Col md={3}>
        <Panel header={`${window.location.pathname}/${this.props.id}`} bsStyle="primary" style={{height: `240px`}}>
          <Inspector data={this.props} expandLevel={0} />
        </Panel>
      </Col>
    )
  }
}

export default PostItem;
