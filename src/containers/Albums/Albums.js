import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router'
import { Button, Row } from 'react-bootstrap';

import { readInitialAlbum, readMoreAlbum } from './../../actions';

import { AlbumItem } from './../../components';
import { DEFAULT_ALBUM_LIMIT } from './../../actions';

class Albums extends React.Component {
  static defaultProps = {
    initialized: false,
    _limit: DEFAULT_ALBUM_LIMIT
  };

  static propTypes = {
    albums: React.PropTypes.array,
    initialized: React.PropTypes.bool.isRequired,
    _start: React.PropTypes.number,
    _end: React.PropTypes.number,
    _limit: React.PropTypes.number.isRequired
  };

  state = {
    initialized: this.props.initialized,
    _limit: this.props._limit
  };

  componentWillMount() {
    if(this.props.initialized) return;
    this.props.readInitialAlbum();
  }

  onReadMoreAlbums = (query) => this.props.readMoreAlbum(query);

  render() {
    return (
      <div>
        <h1 className="text-center"> {window.location.pathname} </h1>
        <Row>
        { this.props.albums.map((album) =>
          <Link to={"/albums/" + album.id } key={album.id} >
            <AlbumItem {...album} />
          </Link>
        )}
        </Row>
        <Button bsStyle="default" block
          onClick={() => this.onReadMoreAlbums({'_start': this.props._end})}>
          로딩로딩
        </Button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    albums: state.album.list,
    initialized: state.album.initialized,
    _start: state.album._start,
    _end: state.album._end
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ readInitialAlbum, readMoreAlbum }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Albums);
