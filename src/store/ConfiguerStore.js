import { createStore, applyMiddleware, compose } from 'redux';
import RootReducer from './../reducers';
import ReduxPromise from 'redux-promise';
import { DevTools } from './../containers';

const enhancer = compose(
  // Middleware you want to use in development:
  applyMiddleware(ReduxPromise),
  // Required! Enable Redux DevTools with the monitors you chose
  DevTools.instrument()
);

export default function configureStore(initialState) {
  // Note: only Redux >= 3.1.0 supports passing enhancer as third argument.
  // See https://github.com/rackt/redux/releases/tag/v3.1.0
  const store = createStore(RootReducer, initialState, enhancer);

  // Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
  if (module.hot) {
    module.hot.accept('../reducers', () =>
      store.replaceReducer(require('../reducers')/*.default if you use Babel 6+ */)
    );
  }

  return store;
}
