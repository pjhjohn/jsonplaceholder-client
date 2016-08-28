import React from 'react';
import { Inspector } from 'react-inspector';

class Comment extends React.Component {
  render() {
    return (
      <ul style={{padding: 0}}>{/* To Avoid validateDOMNesting(...): <li> cannot appear as a descendant of <li>. Warning */}
        <Inspector data={this.props} expandLevel={1} />
      </ul>
    )
  }
}

export default Comment;
