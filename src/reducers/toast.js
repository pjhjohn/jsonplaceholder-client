import { NOTIFICATION } from './../actions';

const INITIAL_TOAST_STATE = { type: `nothing`, httpStatus: 200 };

export default function ( state = INITIAL_TOAST_STATE, action) {
  switch(action.type){
    case NOTIFICATION:
      return {...state, type: action.payload.type, httpStatus: action.payload.httpStatus};
    default:
      return state;
  }
}
