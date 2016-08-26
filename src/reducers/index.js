import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import PostReducer from './post';
import CommentReducer from './comment';
import AboutReducer from './github';

const RootReducer = combineReducers({
  post: PostReducer,
  form: formReducer,
  comment: CommentReducer,
  contributors: AboutReducer,
  languages: AboutReducer,
  pullRequests: AboutReducer
});

export default RootReducer;
