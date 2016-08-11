import { FETCH_INIT_POSTS, FETCH_SINGLE_POST, FETCH_POSTS } from './../actions';

export default function (state=[], action){
  switch (action.type) {
    case FETCH_INIT_POSTS:
      return action.payload.data;
    case FETCH_SINGLE_POST:
      return action.payload.data;
    case FETCH_POSTS:
      return [...state,action.payload.data];
    default:
      return state;
  }
}
