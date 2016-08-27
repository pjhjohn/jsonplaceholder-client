import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router'
import { Button, Row } from 'react-bootstrap';

import { readInitialPhoto, readMorePhoto } from './../../actions';

import { PhotoItem } from './../../components';
import { DEFAULT_PHOTO_LIMIT } from './../../actions';

class Album extends React.Component {
  static defaultProps = {
    _limit: DEFAULT_PHOTO_LIMIT
  };

  static propTypes = {
    photos: React.PropTypes.array,
    _start: React.PropTypes.number,
    _end: React.PropTypes.number,
    _limit: React.PropTypes.number.isRequired
  };

  state = {
    _limit: this.props._limit
  };

  componentWillMount() {
    this.props.readInitialPhoto(this.props.params.id);
  }

  onReadMorePhotos = (id, query) => this.props.readMorePhoto(id, query);

  render() {
    return (
      <div>
        <h1 className="text-center"> {window.location.pathname} </h1>
        <Link to="/albums">
          <Button bsStyle="default">back</Button>
        </Link>
        <Row>
          { this.props.photos.map((photo) =>
            <Link to={"/photos/" + photo.id} key={photo.id} >
              <PhotoItem {...photo} />
            </Link>
          )}
        </Row>
        <Button bsStyle="default" block
                onClick={() => this.onReadMorePhotos({'albumId': this.props.photos.id}, {'_start': this.props._end})}>
          로오딩
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
  return bindActionCreators({ readInitialPhoto, readMorePhoto }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Album);
