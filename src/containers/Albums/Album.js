import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router'
import { Row, Col } from 'react-grid-system';
import RaisedButton from 'material-ui/RaisedButton';

import { readInitialPhotos, readMorePhotos } from './../../actions';

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
    this.props.readInitialPhotos({'albumId': this.props.params.id});
  }

  onReadMorePhotos = (query) => this.props.readMorePhotos(query);

  render() {
    return (
      <div>
        <Row style={{ marginBottom: `20px` }}>
          <Col md={2}>
            <Link to={`/albums`}>
              <RaisedButton label="BACK" fullWidth={true} primary={true} />
            </Link>
          </Col>
          <Col md={8}>
            <div className="text-title"> {window.location.pathname} </div>
          </Col>
          <Col md={2} />
        </Row>

        <Row>
          { this.props.photos.map((photo) =>
            <Link to={`/photos/${photo.id}`} key={photo.id} >
              <Col md={3}>
                <PhotoItem {...photo} />
              </Col>
            </Link>
          )}
        </Row>

        <RaisedButton label="MORE PHOTOS" fullWidth={true} primary={true} onClick={() => this.onReadMorePhotos({'albumId': this.props.params.id, '_start': this.props._end})} />
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
