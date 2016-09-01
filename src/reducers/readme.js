import { READ_README } from './../actions';

const INITIAL_README_STATE = { detail: {} };

export default function (state = INITIAL_README_STATE, action) {
  switch(action.type) {
    case READ_README:
      return {...state,
        detail: action.payload.data
      };
    default:
      return state;
  }
}
