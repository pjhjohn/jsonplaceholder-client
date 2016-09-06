import React from 'react';
import { Inspector } from 'react-inspector';
import { Card, CardHeader, CardMedia, CardText } from 'material-ui/Card';

class PhotoItem extends React.Component {
  static defaultProps = {
    albumId: 0,
    id: 0,
    title: "",
    url: "",
    thumbnailUrl: ""
  };

  static propTypes = {
    albumId: React.PropTypes.number.isRequired,
    id: React.PropTypes.number.isRequired,
    title: React.PropTypes.string.isRequired,
    url: React.PropTypes.string.isRequired,
    thumbnailUrl: React.PropTypes.string.isRequired
  };

  render() {
    return (
      <Card style={{ marginBottom: `20px` }}>
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
