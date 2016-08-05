import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import { App } from './containers';

import { Greeting, PostIndex, Post, Error404 } from './components';

import './index.css';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Greeting} />
      <Route path="home" component={Greeting} />
      <Route path="posts" component={PostIndex} />
      <Route path="posts/:id" component={Post} />
      <Route path="*" component={Error404} />
    </Route>
  </Router>
), document.getElementById('root'));
