import { FETCH_POSTS, FETCH_SINGLE_POST, PUSH_POST } from './../actions';

export default function (state=[], action){
  switch (action.type) {
    case FETCH_POSTS:
      return action.payload.data;
    case FETCH_SINGLE_POST:
      return action.payload.data;
    case PUSH_POST:
      return action.payload.data;
    default:
      return state;
  }
}
