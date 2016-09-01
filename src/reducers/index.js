import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import PostReducer from './post';
import CommentReducer from './comment';

import AboutReducer from './about';
import AlbumReducer from './album';
import ReadmeReducer from './readme';
import PhotoReducer from './photo';

const RootReducer = combineReducers({
  post: PostReducer,
  form: formReducer,
  comment: CommentReducer,
  github: AboutReducer,
  album: AlbumReducer,
  photo: PhotoReducer,
  readme: ReadmeReducer
});

export default RootReducer;
