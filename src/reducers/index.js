import { combineReducers } from 'redux';
import PostReducer from './post';

const RootReducer = combineReducers({
  post: PostReducer
});

export default RootReducer;
