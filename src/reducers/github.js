import { LOAD_CONTRIBUTORS, LOAD_LANGUAGES, LOAD_PULL_REQUESTS } from './../actions';

const INITIAL_STATE = { list: [], detail: {} };

export default function (state = INITIAL_STATE, action) {
  switch(action.type) {
    case LOAD_CONTRIBUTORS:
      return {...state, contributors: action.payload.data };
    case LOAD_LANGUAGES:
      return {...state, languages: action.payload.data};
    case LOAD_PULL_REQUESTS:
      return {...state, pullRequests: action.payload.data};
    default:
      return state;
  }
}
