import { NOTIFICATION } from './../actions';

const INITIAL_TOAST_STATE = { type: `nothing`, httpStatus: 200, date: ``};

export default function ( state = INITIAL_TOAST_STATE, action) {
  switch(action.type){
    case NOTIFICATION:
      return {...state, type: action.payload.type, httpStatus: action.payload.httpStatus, date: action.payload.date};
    default:
      return state;
  }
}
