import { READ_INITIAL_COMMENTS, READ_MORE_COMMENTS } from './../actions';

const INITIAL_COMMENT_STATE = { data: {} };

export default function (state = INITIAL_COMMENT_STATE, action) {
  let newData = {};
  switch(action.type) {
    case READ_INITIAL_COMMENTS:
      action.payload.data.map((datum) => (newData[datum.id] = datum));
      return { ...state, data: newData };
    case READ_MORE_COMMENTS:
      action.payload.data.map((datum) => (newData[datum.id] = datum));
      return { ...state, data: {...state.data, ...newData} };
    default:
      return state;
  }
}
