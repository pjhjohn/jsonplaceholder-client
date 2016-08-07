import React from 'react';
import { connect } from 'react-redux'; // glue for redux and react

import { Post } from './..';

class PostList extends React.Component {
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

export default connect(mapStateToProps)(PostList);
