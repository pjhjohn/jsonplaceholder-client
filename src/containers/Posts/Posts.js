import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router'

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
        <h1 className="text-center"> {window.location.pathname} </h1>

        <Link to="/posts/new" className="col-md-12 btn btn-primary">
          글쓰기
        </Link>

        <div className="row">
        { this.props.posts.map((post) =>
          <Link to={"/posts/" + post.id} key={post.id} >
            <PostItem {...post} />
          </Link>
        )}
        </div>

        <button className="col-md-12 btn btn-default"
          onClick={() => this.onReadMorePosts({'_start': this.props._end})}>
          로오딩
        </button>
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
