import React from 'react';
import { Inspector } from 'react-inspector';
import { Card, CardHeader, CardMedia, CardText } from 'material-ui/Card';

class PhotoDetail extends React.Component {
  render() {
    return (
      <Card>
        <CardHeader title={this.props.id}/>
        <CardMedia>
          <img src={this.props.url} alt={this.props.title} />
        </CardMedia>
        <CardText>
          <Inspector data={this.props} expandLevel={0} />
        </CardText>
      </Card>
    )
  }
}

export default PhotoDetail;
