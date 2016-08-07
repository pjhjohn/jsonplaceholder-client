import React from 'react';

import { PostList } from './..';

class PostIndex extends React.Component {
  render() {
    return (
      <div>
        <h1 className="text-center">PostIndex</h1>
        <PostList />
      </div>
    );
  }
}

export default PostIndex;
