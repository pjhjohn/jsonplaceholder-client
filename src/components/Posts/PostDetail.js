import React from 'react';
import { Col } from 'react-bootstrap';

class PostDetail extends React.Component {
  render() {
    return (
      <Col md={12}>
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

export default PostDetail;
