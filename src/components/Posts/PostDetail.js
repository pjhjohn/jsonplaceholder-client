import React from 'react';
import { Inspector } from 'react-inspector';

class PostDetail extends React.Component {
  static defaultProps = {
    id: 0,
    userId: 0,
    title: "",
    body: ""
  };

  static propTypes = {
    id: React.PropTypes.number.isRequired,
    userId: React.PropTypes.number.isRequired,
    title: React.PropTypes.string.isRequired,
    body: React.PropTypes.string.isRequired
  }

  render() {
    return (
      <Inspector data={this.props} expandLevel={1} />
    )
  }
}

export default PostDetail;
