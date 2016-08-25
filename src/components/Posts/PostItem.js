import React from 'react';
import { Col } from 'react-bootstrap';

class PostItem extends React.Component {
  render() {
    return (
      <Col md={3}>
        <div className="card">
          <div className="card-header">
            <div className="card-title"> #{this.props.id} : {this.props.title} </div>
          </div>
          <div className="card-body">
            {this.props.body}
          </div>
        </div>
      </Col>
    )
  }
}

export default PostItem;
