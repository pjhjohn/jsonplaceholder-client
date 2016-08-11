import { FETCH_SINGLE_POST, FETCH_POSTS } from './../actions';

export default function (state=[], action){
  switch (action.type) {
    case FETCH_SINGLE_POST:
      return action.payload.data;
    case FETCH_POSTS:
      return state.concat(action.payload.data);
    default:
      return state;
  }
}
