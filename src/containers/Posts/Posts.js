import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router'

import { readPosts, readMorePosts } from './../../actions';

import { PostItem } from './../../components';

class Posts extends React.Component {
  componentWillMount() {
    if(!this.props.initialDataLoaded)
      this.props.readPosts(0);
  }

  onReadPosts(postLength) {
    this.props.readMorePosts(postLength);
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <h1 className="text-center"> {window.location.pathname} </h1>

        <Link to="/posts/new" className="col-md-12 btn btn-primary">
          글쓰기
        </Link>

        <div className="row">
        { this.props.posts.map((post) => <Link to={"/posts/" + post.id} >
            <PostItem key={post.id} {...post} />
          </Link>
        )}
        </div>

        <button className="col-md-12 btn btn-default"
          onClick={() => this.onReadPosts(this.props.endPostId)}>
          로오딩
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.post.list,
    startPostId: state.post.start,
    endPostId: state.post.end,
    initialDataLoaded: state.post.initialDataLoaded
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ readPosts, readMorePosts }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
