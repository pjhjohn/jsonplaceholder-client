import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router'

import { readPosts } from './../../actions';

import { PostItem } from './../../components';

class Posts extends React.Component {
  constructor(props){
    super(props);

    this.props.readPosts(0);
    this.onReadPosts = this.onReadPosts.bind(this);
  }

  onReadPosts(postLength) {
    this.props.readPosts(postLength);
  }

  render() {
    let posts = this.props.posts.map((post) =>
      <Link to={"/posts/" + post.id} ><PostItem key={post.id} {...post} /></Link>);
    let startId = this.props.posts.length;
    return (
      <div>
        <h1 className="text-center"> {window.location.pathname} </h1>

        <Link to="/posts/new" className="col-md-12 btn btn-primary">
          글쓰기
        </Link>

        <div className="row">
          {posts}
        </div>

        <button className="col-md-12 btn btn-default"
          onClick={() => this.onReadPosts(startId)}>
          로오딩
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.post.list
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ readPosts }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
