import React from 'react';
import { Inspector } from 'react-inspector';
import { Card, CardHeader, CardMedia, CardText } from 'material-ui/Card';

class AlbumItem extends React.Component {
  static defaultProps = {
    userId: 0,
    id: 0,
    title: ""
  };

  static propTypes = {
    userId: React.PropTypes.number.isRequired,
    id: React.PropTypes.number.isRequired,
    title: React.PropTypes.string.isRequired
  };

  render() {
    return (
      <Card style={{ marginBottom: `20px` }}>
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
