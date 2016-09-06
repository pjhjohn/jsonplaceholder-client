import React from 'react';
import { Inspector } from 'react-inspector';
import { Card, CardHeader, CardText } from 'material-ui/Card';

class PostItem extends React.Component {
  render() {
    return (
      <Card>
        <CardHeader title={`${window.location.pathname}/${this.props.id}`}/>
        <CardText>
          <Inspector data={this.props} expandLevel={0} />
        </CardText>
      </Card>
    );
  }
}

export default PostItem;
