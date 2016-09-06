import React from 'react';
import { Inspector } from 'react-inspector';
import { Card, CardHeader, CardText } from 'material-ui/Card';

class Comment extends React.Component {
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
