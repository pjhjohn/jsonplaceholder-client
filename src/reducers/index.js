import { combineReducers } from 'redux';
import PostReducer from './post';
import CommentReducer from './comment';

const RootReducer = combineReducers({
  post: PostReducer,
  comment: CommentReducer
});

export default RootReducer;
