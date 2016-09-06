import React from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router'
import { Row, Col } from 'react-grid-system';
import RaisedButton from 'material-ui/RaisedButton';

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
        <Row style={{ marginBottom: `20px` }}>
          <Col md={2}>
            <Link to={`/albums/${this.props.photo.albumId}`}>
              <RaisedButton label="BACK" fullWidth={true} primary={true} />
            </Link>
          </Col>
          <Col md={8}>
            <div className="text-title"> {window.location.pathname} </div>
          </Col>
          <Col md={2} />
        </Row>

        <Row>
          <Col md={12}>
            <PhotoDetail key={this.props.photo.id} {...this.props.photo} />
          </Col>
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
