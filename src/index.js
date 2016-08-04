import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory } from 'react-router';

import './index.css';

import App from './containers/App/App';
import PostList from './components/PostList/PostList';
import Post from './components/Post/Post';
import Error404 from './components/Error404/Error404';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="/Home" />
      <Route path="/posts" component={PostList} />
      <Route path="/posts/:id" component={Post} />
      <Route path="/*" component={Error404} />
    </Route>
  </Router>
), document.getElementById('root'));
