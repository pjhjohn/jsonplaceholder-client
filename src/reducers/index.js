import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import PostReducer from './post';
import CommentReducer from './comment';

const RootReducer = combineReducers({
  post: PostReducer,
  form: formReducer,
  comment: CommentReducer
});

export default RootReducer;
