import { READ_COMMENTS, READ_MORE_COMMENTS } from './../actions';

const INITIAL_COMMENT_STATE = { list: [] };

export default function (state = INITIAL_COMMENT_STATE, action) {
  switch(action.type) {
    case READ_COMMENTS:
      return {...state, list: action.payload.data };
    case READ_MORE_COMMENTS:
      return {...state, list: state.list.concat(...action.payload.data) };
    default:
      return state;
  }
}
