import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import PostReducer from './post';
import CommentReducer from './comment';
import AlbumReducer from './album';
import PhotoReducer from './photo';

const RootReducer = combineReducers({
  post: PostReducer,
  form: formReducer,
  comment: CommentReducer,
  album: AlbumReducer,
  photo: PhotoReducer
});

export default RootReducer;
