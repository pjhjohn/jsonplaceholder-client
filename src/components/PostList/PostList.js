import React from 'react';
import { connect } from 'react-redux'; // glue for redux and react
import { bindActionCreators } from 'redux';

import { fetchPosts } from '../../actions/index';
import { Post } from './..';

class PostList extends React.Component {
  constructor(props){
    super(props);

    this.props.fetchPosts();
  }

  render() {
    let posts = this.props.posts.map(post => <Post key={post.id} {...post} />);
    return (
      <div>
        <h1 className="text-center"> {window.location.pathname} </h1>
        <div className="columns">
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
  return bindActionCreators({ fetchPosts }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
