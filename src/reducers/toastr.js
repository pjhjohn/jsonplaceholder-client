import { CALL_TOASTR } from './../actions';

const INITIAL_TOASTR_STATE = { action: ``, status: 404 };

export default function ( state = INITIAL_TOASTR_STATE, action) {
  switch(action.type){
    case CALL_TOASTR:
      return {...state, action: action.payload.action, status: action.payload.status};
    default:
      return state;
  }
}
