import { CREATE_POST, READ_POSTS, READ_POST, DELETE_POST} from '../actions/types';

const INITIAL_POST_STATE = { list: [], item: {} };

export default function (state = INITIAL_POST_STATE, action) {
  switch(action.type) {
    case CREATE_POST:
      return state;
    case READ_POSTS:
      return {...state, list: state.list.concat(...action.payload.data) };
    case READ_POST:
      return {...state, item: action.payload.data };
    case DELETE_POST:
      return state;
    default:
      return state;
  }
}
