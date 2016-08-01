import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory, IndexRoute } from 'react-router';

import './index.css';

import App from './containers/App/App';
import Greeting from './components/Greeting/Greeting';
import Post from './components/Post/Post';

ReactDOM.render((
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Greeting} />
            <Route path="/posts/:id" component={Post}/>
        </Route>
    </Router>
), document.getElementById('root'));
