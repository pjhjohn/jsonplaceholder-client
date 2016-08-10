import React from 'react';
import { connect } from 'react-redux'; // glue for redux and react
import { bindActionCreators } from 'redux';

import { fetchAllPosts } from './../../actions';
import Post from './../Post/Post';

class PostList extends React.Component {
  constructor(props){
    super(props);

    this.props.fetchAllPosts();
  }

  render() {
    let posts = this.props.posts.map(post => <Post key={post.id} {...post} />);
    return (
      <div>
        <h1 className="text-center"> {window.location.pathname} </h1>
        <div className="row">
          {posts}
        </div>
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
  return bindActionCreators({ fetchAllPosts }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
