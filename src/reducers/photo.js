import { READ_PHOTO, READ_INITIAL_PHOTOS, READ_MORE_PHOTOS } from './../actions';

const INITIAL_PHOTO_STATE = { list: [], detail: {} };

export default function (state = INITIAL_PHOTO_STATE, action) {
  switch(action.type) {
    case READ_PHOTO:
      return { ...state,
        detail: action.payload.data
      };
    case READ_INITIAL_PHOTOS:
      return { ...state,
        list:action.payload.data,
        _start:action.payload.data[0].id,
        _end:action.payload.data.length
      };
    case READ_MORE_PHOTOS:
      return { ...state,
        list: state.list.concat(...action.payload.data),
        _end: action.payload.end
      };
    default:
      return state;
  }
}
