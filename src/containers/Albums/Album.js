import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router'
import { Button, Row } from 'react-bootstrap';

import { readInitialPhotos, readMorePhotos } from './../../actions';

import { PhotoItem } from './../../components';

class Album extends React.Component {
  static defaultProps = {
    photos: {},
    _start: 0,
    _end: 0,
  };

  static propTypes = {
    photos: React.PropTypes.array.isRequired,
    _start: React.PropTypes.number.isRequired,
    _end: React.PropTypes.number.isRequired,
  };

  componentWillMount() {
    this.props.readInitialPhotos({'albumId': this.props.params.id});
  }

  onReadMorePhotos = (query) => this.props.readMorePhotos(query);

  render() {
    return (
      <div>
        <h1 className="text-center"> {window.location.pathname} </h1>
        <Link to="/albums">
          <Button bsStyle="default">back</Button>
        </Link>
        <Row>
          { this.props.photos.map((photo) =>
            <Link to={`/photos/${photo.id}`} key={photo.id} >
              <PhotoItem {...photo} />
            </Link>
          )}
        </Row>
        <Button bsStyle="default" block
                onClick={() => this.onReadMorePhotos({'albumId': this.props.params.id, '_start': this.props._end})}>
          로딩로딩
        </Button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    photos: state.photo.list,
    _start: state.photo._start,
    _end: state.photo._end
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ readInitialPhotos, readMorePhotos }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Album);
