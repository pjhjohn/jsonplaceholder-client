import React from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router'
import { Row, Col } from 'react-grid-system';
import RaisedButton from 'material-ui/RaisedButton';

import { readInitialPosts, readMorePosts } from './../../actions';

import { PostItem } from './../../components';
import { DEFAULT_POST_LIMIT } from './../../actions';

class Posts extends React.Component {
  static defaultProps = {
    initialized: false,
    _limit: DEFAULT_POST_LIMIT
  };

  static propTypes = {
    posts: React.PropTypes.array,
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
    this.props.readInitialPosts();
  }

  onReadMorePosts = (query) => this.props.readMorePosts(query);

  render() {
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

        { this.props.posts.map((post) =>
          <Link to={`/posts/${post.id}`} key={post.id} >
            <PostItem {...post} />
          </Link>
        )}

        <RaisedButton label="MORE POSTS" fullWidth={true} primary={true} onClick={() => this.onReadMorePosts({'_start': this.props._end})} />
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
