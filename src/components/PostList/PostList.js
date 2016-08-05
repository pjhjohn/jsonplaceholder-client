import React from 'react';

import Post from '../Post/Post';

import '../../Spectre.css';
import './PostList.css';

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

export default PostList;
