import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory, IndexRoute } from 'react-router';

import './index.css';

import App from './containers/App/App';
import Greeting from './components/Greeting/Greeting';
import Artists from './components/Artists/Artists';
import PostList from './components/PostList/PostList';
import Post from './components/Post/Post';
import Apply from './components/Apply/Apply';
import Support from './components/Support/Support';
import Error404 from './components/Error404/Error404';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Greeting} />
      <Route path="home" component={Greeting} />
      <Route path="posts" component={PostList} />
      <Route path="posts/:id" component={Post} />
      <Route path="Apply" component={Apply} />
      <Route path="Artists" component={Artists} />
      <Route path="Support" component={Support} />
      <Route path="*" component={Error404} />
    </Route>
  </Router>
), document.getElementById('root'));
