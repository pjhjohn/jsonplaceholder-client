import React from 'react';
import { Inspector } from 'react-inspector';
import { Card, CardHeader, CardText } from 'material-ui/Card';

class PostItem extends React.Component {
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
