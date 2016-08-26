import React from 'react';
import { Inspector } from 'react-inspector';

class PostDetail extends React.Component {
  render() {
    return (
      <Inspector data={this.props} expandLevel={1} />
    )
  }
}

export default PostDetail;
