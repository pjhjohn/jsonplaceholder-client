import axios from 'axios';

import * as C from './const';

export const READ_COMMENTS = 'READ_COMMENTS';

export function readComments(postId){
  const request = axios.get(`${C.ROOT_URL}/comments?postId=${postId}`);
  return {
    type: READ_COMMENTS,
    payload: request
  }
}
