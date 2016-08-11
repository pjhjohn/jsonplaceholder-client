import React from 'react';
import { connect } from 'react-redux'; // glue for redux and react
import { bindActionCreators } from 'redux';

import { fetchInitPosts } from './../../actions';
import { fetchPosts } from './../../actions';
import Post from './../Post/Post';

class PostList extends React.Component {
  constructor(props){
    super(props);

    this.props.fetchInitPosts();
    this.onFetchPosts = this.onFetchPosts.bind(this);
  }

  onFetchPosts(postLength) {
    this.props.fetchPosts(postLength)
  }

  render() {
    const { dispatch } = this.props;
    let posts = this.props.posts.map(post => <Post key={post.id} {...post} />);
    let postLength = this.props.posts.length;
    return (
      <div>
        <h1 className="text-center"> {window.location.pathname} </h1>
        <div className="row">
          {posts}
        </div>

        <button className="col-md-12"
          onClick={postLength => dispatch(this.onFetchPosts(postLength))}>
          로오딩
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ fetchInitPosts,fetchPosts }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
