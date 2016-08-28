import React from 'react';
import { Col, Panel } from 'react-bootstrap';
import { Inspector } from 'react-inspector';

class PhotoDetail extends React.Component {
  render() {
    return (
      <Col md={12}>
        <Panel header={this.props.id} bsStyle="primary">
          <img src={this.props.url} alt={this.props.title}/>
          <img src={this.props.thumbnailUrl} alt={this.props.title}/>
          <Inspector data={this.props} />
        </Panel>
      </Col>
    )
  }
}

export default PhotoDetail;
