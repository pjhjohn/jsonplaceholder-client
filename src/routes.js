import React from 'react';
import { Route, IndexRoute } from 'react-router';

import { App } from './containers';

import { Greeting, PostIndex, Error404, PostSingle, Posting } from './components';

export default(
  <Route path="/" component={App}>
    <IndexRoute component={Greeting} />
    <Route path="home" component={Greeting} />
    <Route path="posts" component={PostIndex} />
    <Route path="posts/:id" component={PostSingle} />
    <Route path="posting" component={Posting} />
    <Route path="*" component={Error404} />
  </Route>
);
