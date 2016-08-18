import { combineReducers } from 'redux';
import PostReducer from './post';
import { reducer as formReducer } from 'redux-form';

const RootReducer = combineReducers({
  post: PostReducer,
  form: formReducer
});

export default RootReducer;
