import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import PostReducer from './post';
import CommentReducer from './comment';
import AboutReducer from './about';

const RootReducer = combineReducers({
  post: PostReducer,
  form: formReducer,
  comment: CommentReducer,
  github: AboutReducer
});

export default RootReducer;
