import React from 'react';
import { Col, Panel } from 'react-bootstrap';

class PhotoItem extends React.Component {
  static defaultProps = {
    albumId: 0,
    id: 0,
    title: "",
    url: "",
    thumbnailUrl: ""
  };

  static propTypes = {
    albumId: React.PropTypes.number.isRequired,
    id: React.PropTypes.number.isRequired,
    title: React.PropTypes.string.isRequired,
    url: React.PropTypes.string.isRequired,
    thumbnailUrl: React.PropTypes.string.isRequired
  };

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
