import React from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router'
import { Button, Row } from 'react-bootstrap';

import { readPhoto } from './../../actions';

import { PhotoDetail } from './../../components';

class Photos extends React.Component {
  componentWillMount() {
    this.props.readPhoto(this.props.params.id);
  }

  render() {
    return (
      <div>
        <Helmet title={this.props.title} />
        <h1 className="text-center"> {window.location.pathname} </h1>
        <Link to={`/albums/${this.props.photo.albumId}`}>
          <Button bsStyle="default">back</Button>
        </Link>
        <Row>
          <PhotoDetail key={this.props.photo.id} {...this.props.photo} />
        </Row>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    photo: state.photo.detail,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ readPhoto }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Photos);
