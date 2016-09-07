import React from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router'
import { Row, Col } from 'react-grid-system';
import RaisedButton from 'material-ui/RaisedButton';
import CircularProgress from 'material-ui/CircularProgress';

import { readInitialPosts, readMorePosts } from './../../actions';

import { PostItem } from './../../components';

class Posts extends React.Component {
  static defaultProps = {
    posts: {},
    initialized: false,
    _start: 0,
    _end: 0
  };

  static propTypes = {
    posts: React.PropTypes.array.isRequired,
    initialized: React.PropTypes.bool.isRequired,
    _start: React.PropTypes.number.isRequired,
    _end: React.PropTypes.number.isRequired,
  };

  state = {
    loadingSignal: false
  };

  componentWillMount() {
    if(this.props.initialized) return;
    this.props.readInitialPosts();
  };

  onReadMorePosts = (query) => {
    this.setState({ loadingSignal: true });
    this.props.readMorePosts(query).then(() => this.setState({loadingSignal: false}));
  };

  render() {
    const loading = (<center> <CircularProgress /> </center> );
    if(!this.props.initialized) return (loading);
    return (
      <div>
        <Helmet title={`posts`} />

        <Row style={{ marginBottom: `20px` }}>
          <Col md={2}>
            <Link to={`/`}>
              <RaisedButton label="BACK" fullWidth={true} primary={true} />
            </Link>
          </Col>
          <Col md={8}>
            <div className="text-title"> {window.location.pathname} </div>
          </Col>
          <Col md={2}>
            <Link to={`/posts/new`}>
              <RaisedButton label="WRITE POST" fullWidth={true} primary={true} />
            </Link>
          </Col>
        </Row>

        <Row>
        { this.props.posts.map((post) =>
          <Link to={`/posts/${post.id}`} key={post.id} >
            <Col md={12}>
              <PostItem {...post} />
            </Col>
          </Link>
        )}
        {(this.state.loadingSignal) ? loading :
          <RaisedButton label="MORE POSTS" fullWidth={true} primary={true} onClick={() => this.onReadMorePosts({'_start': this.props._end})} />
        }
        </Row>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.post.list,
    initialized: state.post.initialized,
    _start: state.post._start,
    _end: state.post._end
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ readInitialPosts, readMorePosts }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
