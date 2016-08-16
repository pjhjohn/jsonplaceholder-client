import { FETCH_POSTS, FETCH_POST, LOAD_POST, PUSH_POST } from './../actions';

export default function (state=[], action){
  switch (action.type) {
    case FETCH_POSTS:
      return state.concat(action.payload.data);
    case FETCH_POST:
      return action.payload.data;
    case LOAD_POST:
      return action.payload.data;
    case PUSH_POST:
      return action.payload.data;
    default:
      return state;
  }
}
