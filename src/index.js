import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory, IndexRoute } from 'react-router';

import './index.css';

import App from './containers/App/App';
import Greeting from './components/Greeting/Greeting';
import PostIndex from './components/PostIndex/PostIndex';
import Post from './components/Post/Post';
import Error404 from './components/Error404/Error404';

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
