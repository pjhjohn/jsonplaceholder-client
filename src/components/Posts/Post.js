import React from 'react';

class Post extends React.Component {
  render() {
    return (
      <div className="col-md-3">
        <div className="card">
          <div className="card-header">
            <div className="card-title"> #{this.props.id} : {this.props.title} </div>
          </div>
          <div className="card-body">
            {this.props.body}
          </div>
        </div>
      </div>
    )
  }
}

export default Post;
