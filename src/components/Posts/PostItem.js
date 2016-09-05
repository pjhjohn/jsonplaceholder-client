import React from 'react';
import { Inspector } from 'react-inspector';
import { Col, Panel } from 'react-bootstrap';

class PostItem extends React.Component {
  static defaultProps = {
    id: 0,
    userId: 0,
    title: "",
    body: ""
  };

  static propTypes = {
    id: React.PropTypes.number.isRequired,
    userId: React.PropTypes.number.isRequired,
    title: React.PropTypes.string.isRequired,
    body: React.PropTypes.string.isRequired
  }

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
