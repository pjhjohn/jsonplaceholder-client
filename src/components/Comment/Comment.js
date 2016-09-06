import React from 'react';
import { Inspector } from 'react-inspector';
import { Card, CardHeader, CardText } from 'material-ui/Card';

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
      <Card>
        <CardHeader title={`${window.location.pathname}/comments/${this.props.id}`}/>
        <CardText>
          <Inspector data={this.props} expandLevel={1} />
        </CardText>
      </Card>
    )
  }
}

export default Comment;
