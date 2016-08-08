import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';

import reducers from './reducers';
import { App } from './containers';

import { Greeting, PostIndex, Post, Error404 } from './components';

import './index.scss';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);


ReactDOM.render((
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Greeting} />
        <Route path="home" component={Greeting} />
        <Route path="posts" component={PostIndex} />
        <Route path="posts/:id" component={Post} />
        <Route path="*" component={Error404} />
      </Route>
    </Router>
  </Provider>
), document.getElementById('root'));
