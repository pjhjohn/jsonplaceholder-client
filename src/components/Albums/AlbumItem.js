import React from 'react';
import { Inspector } from 'react-inspector';
import { Card, CardHeader, CardMedia, CardText } from 'material-ui/Card';

class AlbumItem extends React.Component {
  render() {
    return (
      <Card>
        <CardHeader title={this.props.id}/>
        <CardMedia>
          <img src={`https://placehold.it/150x150?text=dummy`} alt={this.props.title} />
        </CardMedia>
        <CardText style={{height: "43px"}}>
          <Inspector data={this.props} expandLevel={0} />
        </CardText>
      </Card>
    )
  }
}

export default AlbumItem;
