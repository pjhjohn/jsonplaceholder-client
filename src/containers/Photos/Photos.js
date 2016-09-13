import React from 'react';
import { Row, Col } from 'react-grid-system';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import CircularProgress from 'material-ui/CircularProgress';

import { readPhoto } from './../../actions';

import { SimpleNavigator, PhotoDetail } from './../../components';


class Photos extends React.Component {
  static defaultProps = {
    photo: {},
  };

  static propTypes = {
    photo: React.PropTypes.object.isRequired
  };

  state = {
    initialized: false
  };

  componentWillMount() {
    this.props.readPhoto(this.props.params.id).then(() => this.setState({initialized: true}));
  };

  render() {
    const progress = (<CircularProgress style={{textAlign:`center`, width:`100%`}} />);
    if(!this.state.initialized) return (progress);
    return (
      <div>
        <SimpleNavigator path={window.location.pathname} back />

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
    photo: state.photo.data[state.photo.active],
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ readPhoto }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Photos);
