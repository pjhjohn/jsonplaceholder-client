import { FETCH_ALL_POSTS, FETCH_SINGLE_POST } from './../actions';

export default function (state=[], action){
  switch (action.type) {
    case FETCH_ALL_POSTS:
      return action.payload.data;
    case FETCH_SINGLE_POST:
      return action.payload.data;
    default:
      return state;
  }
}
