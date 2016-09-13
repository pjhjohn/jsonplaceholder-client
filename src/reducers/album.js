import { READ_INITIAL_ALBUMS, READ_MORE_ALBUMS } from './../actions';

const INITIAL_ALBUM_STATE = { data: {} };

export default function (state = INITIAL_ALBUM_STATE, action) {
  let newData = {};
  switch(action.type) {
    case READ_INITIAL_ALBUMS:
      action.payload.data.map((datum) => (newData[datum.id] = datum));
      return { ...state,
        data: newData,
        _start: Math.min(null, action.payload.data[0].id),
        _end: Math.max(null, action.payload.data.slice(-1)[0].id),
        initialized: true
      };
    case READ_MORE_ALBUMS:
      action.payload.data.map((datum) => (newData[datum.id] = datum));
      return { ...state,
        data: {...state.data, ...newData},
        _start: Math.min(state._start, action.payload.data[0].id),
        _end: Math.max(state._end, action.payload.data.slice(-1)[0].id)
      };
    default:
      return state;
  }
}
