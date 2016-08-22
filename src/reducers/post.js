import { READ_POST, READ_INITIAL_POSTS, READ_MORE_POSTS, DELETE_POST } from './../actions';

const INITIAL_POST_STATE = { list: [], detail: {} };

export default function (state = INITIAL_POST_STATE, action) {
  switch(action.type) {
    case READ_POST:
      return { ...state,
        detail: action.payload.data
      };
    case READ_INITIAL_POSTS:
      return { ...state,
        list: action.payload.data,
        _start: action.payload.data[0].id,
        _end: action.payload.data.slice(-1)[0].id,
        initialized: true
      };
    case READ_MORE_POSTS:
      return { ...state,
        list: state.list.concat(...action.payload.data),
        _end: action.payload.data.slice(-1)[0].id
      };
    case DELETE_POST:
      return state;
    default:
      return state;
  }
}
