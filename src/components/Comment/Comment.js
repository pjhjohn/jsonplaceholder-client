import React from 'react';
import { Inspector } from 'react-inspector';

class Comment extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="card-title text-center"> {this.props.name}({this.props.id}, {this.props.email})</div>
        <div className="card-header text-center"> {this.props.body} </div>
        <div className="card-body">
          <Inspector data={this.props} />
        </div>
      </div>
    )
  }
}

export default Comment;
