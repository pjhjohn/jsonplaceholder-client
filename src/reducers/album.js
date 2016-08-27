import { READ_ALBUM, READ_INITIAL_ALBUM, READ_MORE_ALBUM } from './../actions';

const INITIAL_ALBUM_STATE = { list: [], detail: {} };

export default function (state = INITIAL_ALBUM_STATE, action) {
  switch(action.type) {
    case READ_ALBUM:
      return { ...state,
        detail: action.payload.data
      };
    case READ_INITIAL_ALBUM:
      return { ...state,
        list: action.payload.data,
        _start: action.payload.data[0].id,
        _end: action.payload.data.slice(-1)[0].id,
        initialized: true
      };
    case READ_MORE_ALBUM:
      return { ...state,
        list: state.list.concat(...action.payload.data),
        _end: action.payload.data.slice(-1)[0].id
      };
    default:
      return state;
  }
}
