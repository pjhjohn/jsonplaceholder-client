import { READ_COMMENTS } from './../actions';

const INITIAL_COMMENT_STATE = { list: [], detail: {} };

export default function (state = INITIAL_COMMENT_STATE, action) {
  switch(action.type) {
    case READ_COMMENTS:
      return {...state, list: state.list.concat(...action.payload.data) };
    default:
      return state;
  }
}
