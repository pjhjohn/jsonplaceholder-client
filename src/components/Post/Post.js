import React from 'react';

import '../Spectre.css';

class Post extends React.Component {
  render() {
    return (
      <div> 
        <div className="card">
        <div className="card-header">
          <div className="card-title"> Post Title : {this.props.title} </div>
          <div className="card-meta"> Post Number : {this.props.id} </div>
        </div>
        <div className="card-body">
          Post : {this.props.body}
        </div>
        <div className="card-footer">
            <button className="btn btn-primary"> GOOD! </button>
            <button className="btn btn-primary"> WELL- </button>
            <button className="btn btn-primary"> BAD.. </button>
        </div>
      </div>
    </div>
    )
  }
}

export default Post;
