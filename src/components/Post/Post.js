import React from 'react';

import './../../Spectre.css';
import './Post.css';

class Post extends React.Component {
  render() {
    return (
      <div className="col-2_5 centered">
        <div className="card">
          <div className="card-header">
            <div className="card-title text-center"> Post Title : {this.props.title} </div>
            <div className="card-meta text-center"> Post Number : {this.props.id} </div>
          </div>
        <div className="card-body">
          Post : {this.props.body}
        </div>
        <button className="btn btn-sm centered"> IINE! </button>
      </div>
      </div>
    )
  }
}

export default Post;
