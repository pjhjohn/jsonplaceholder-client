import React from 'react';
import { Col, Panel } from 'react-bootstrap';
import { Inspector } from 'react-inspector';

class AlbumItem extends React.Component {
  static defaultProps = {
    userId: 0,
    id: 0,
    title: ""
  };

  static propTypes = {
    userId: React.PropTypes.number.isRequired,
    id: React.PropTypes.number.isRequired,
    title: React.PropTypes.string.isRequired
  };

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

export default AlbumItem;
