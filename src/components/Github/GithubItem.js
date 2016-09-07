import React from 'react';
import { Inspector } from 'react-inspector';
import { Card, CardHeader, CardText } from 'material-ui/Card';

class GithubItem extends React.Component {
  static defaultProps = {
    number: 0,
    title: "",
    body: ""
  };

  static propTypes=  {
    number: React.PropTypes.number.isRequired,
    title: React.PropTypes.string.isRequired,
    body: React.PropTypes.string.isRequired
  };


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

export default GithubItem;
