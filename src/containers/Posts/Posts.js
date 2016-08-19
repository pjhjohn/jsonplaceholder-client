import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router'

import { readPosts, readMorePosts } from './../../actions';

import { PostItem } from './../../components';

class Posts extends React.Component {
  constructor(props){
    super(props);

    this.onReadPosts = this.onReadPosts.bind(this);
  }

  componentWillMount(){
    this.props.readPosts();
  }

  onReadPosts() {
    const startId = this.props.posts.length;
    this.props.readMorePosts(startId);
  }

  render() {
    let posts = this.props.posts.map((post) => <PostItem key={post.id} {...post} />);
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
          onClick={() => this.onReadPosts()}>
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
  return bindActionCreators({ readPosts, readMorePosts }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
