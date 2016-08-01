import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, broswerHistory, IndexRoute } from 'react-router';

import './index.css';

import App from './containers/App/App';
import Greeting from './components/Greeting/Greeting';
import Post from './components/Post/Post';

ReactDOM.render((
    <Router history={broswerHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Greeting} />
            <Route path="/aaa" component={Post}/>
            <Route path="/posts/:id" component={Post}/>
        </Route>
    </Router>
), document.getElementById('root'));
