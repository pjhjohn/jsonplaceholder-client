import { combineReducers } from 'redux';
import { reducer as FormReducer } from 'redux-form';
import { reducer as ToastrReducer } from 'react-redux-toastr'

import PostReducer from './post';
import CommentReducer from './comment';
import AlbumReducer from './album';
import PhotoReducer from './photo';
import AboutReducer from './about';
import ReadmeReducer from './readme';

const RootReducer = combineReducers({
  post: PostReducer,
  comment: CommentReducer,
  album: AlbumReducer,
  photo: PhotoReducer,
  github: AboutReducer,
  readme: ReadmeReducer,
  form: FormReducer,
  toastr: ToastrReducer
});

export default RootReducer;
