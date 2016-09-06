import React from 'react';
import { Inspector } from 'react-inspector';
import { Card, CardHeader, CardMedia, CardText } from 'material-ui/Card';

class PhotoItem extends React.Component {
  render() {
    return (
      <Card>
        <CardHeader title={this.props.id}/>
        <CardMedia>
          <img src={this.props.thumbnailUrl} alt={this.props.title} />
        </CardMedia>
        <CardText style={{height: "85px"}}>
          <Inspector data={this.props} expandLevel={0} />
        </CardText>
      </Card>
    )
  }
}

export default PhotoItem;
