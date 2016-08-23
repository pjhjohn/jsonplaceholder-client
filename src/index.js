import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

import configustore from './store/configuerStore';
import routes from './routes';

import './index.scss';

const store = configustore();

ReactDOM.render((
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
), document.getElementById('root'));
