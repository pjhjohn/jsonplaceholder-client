import React from 'react';
import Helmet from 'react-helmet'

import PostList from './../PostList/PostList';

class PostIndex extends React.Component {
  render() {
    return (
      <div>
        <Helmet
          title="Posts"
        />
        <h1 className="text-center">PostIndex</h1>
        <PostList />
      </div>
    );
  }
}

export default PostIndex;
