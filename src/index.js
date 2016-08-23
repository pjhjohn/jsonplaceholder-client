import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

import routes from './routes';
import configustore from './store/configuerStore';

import './index.scss';

const store = configustore();

ReactDOM.render((
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
), document.getElementById('root'));
