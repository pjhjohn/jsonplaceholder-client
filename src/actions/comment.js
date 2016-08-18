import { api } from  './api';

export const READ_COMMENTS = 'READ_COMMENTS';

export function readComments(postId){
  const request = api.get(`/comments?postId=${postId}`);
  return {
    type: READ_COMMENTS,
    payload: request
  }
}
