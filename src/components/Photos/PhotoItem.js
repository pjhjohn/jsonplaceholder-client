import React from 'react';
import { Col, Panel } from 'react-bootstrap';

class PhotoItem extends React.Component {
  render() {
    return (
      <Col md={3}>
        <Panel header={this.props.id} bsStyle="primary">
          <h5>{this.props.title}</h5>
          <img src={this.props.thumbnailUrl} alt={this.props.title}/>
        </Panel>
      </Col>
    )
  }
}

export default PhotoItem;
