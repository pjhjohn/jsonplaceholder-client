import React from 'react';
import { Inspector } from 'react-inspector';
import { Card, CardHeader, CardText } from 'material-ui/Card';

class GithubIssue extends React.Component {
  render() {
    return (
      <Card>
        <CardHeader title={this.props.number}/>
        <CardText>
          <Inspector data={this.props} expandLevel={0} />
        </CardText>
      </Card>
    );
  }
}

export default GithubIssue;
