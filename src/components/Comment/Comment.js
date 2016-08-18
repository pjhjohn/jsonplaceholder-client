import React from 'react';

class Comment extends React.Component {
  render() {
  return (
    <div className="card">
      <div className="card-title text-center">
        {this.props.name}({this.props.id})
      </div>
      <div> {this.props.body} </div>
    </div>
    )
  }
}

export default Comment;
