import React from 'react';
import { Inspector } from 'react-inspector';

class Comment extends React.Component {
  static defaultProps = {
    postId: 0,
    id: 0,
    name: "",
    email: "",
    body: ""
  };

  static propTypes = {
    postId: React.PropTypes.number.isRequired,
    id: React.PropTypes.number.isRequired,
    name: React.PropTypes.string.isRequired,
    email: React.PropTypes.string.isRequired,
    body: React.PropTypes.string.isRequired,
  };

  render() {
    return (
      <ul style={{padding: 0}}>{/* To Avoid validateDOMNesting(...): <li> cannot appear as a descendant of <li>. Warning */}
        <Inspector data={this.props} expandLevel={1} />
      </ul>
    )
  }
}

export default Comment;
