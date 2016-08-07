import React from 'react';

import { PostList } from './..';

import './PostIndex.css';

class PostIndex extends React.Component {
  render() {
    return (
      <div>
        <h1>this is post </h1>
        <PostList />
      </div>
    );
  }
}

export default PostIndex;
