import { READ_COMMENTS, CREATE_COMMENT } from './../actions';

const INITIAL_COMMENT_STATE = { list: [] };

export default function (state = INITIAL_COMMENT_STATE, action) {
  switch(action.type) {
    case READ_COMMENTS:
      return {...state, list: state.list.concat(...action.payload.data) };
    case CREATE_COMMENT:
      return state;
    default:
      return state;
  }
}
