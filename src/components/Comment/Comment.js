import React from 'react';
import { Inspector } from 'react-inspector';

class Comment extends React.Component {
  render() {
  const data = this.props;
  return (
    <div className="card">
      <div className="card-title text-center"> {this.props.name}({this.props.id}, {this.props.email})</div>
      <div className="card-header text-center"> {this.props.body} </div>
      <div className="card-body">
          <Inspector data={data} />
      </div>
    </div>
    )
  }
}

export default Comment;
