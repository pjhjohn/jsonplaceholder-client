import React from 'react';
import { Route, IndexRoute } from 'react-router';

import { App, Posts, Post, PostNew } from './containers';

import { Greeting, Error404 } from './components';

export default(
  <Route path="/" component={App}>
    <IndexRoute component={Greeting} />
    <Route path="home" component={Greeting} />
    <Route path="posts" component={Posts} />
    <Route path="posts/new" component={PostNew} />
    <Route path="posts/:id" component={Post} />
    <Route path="*" component={Error404} />
  </Route>
);
