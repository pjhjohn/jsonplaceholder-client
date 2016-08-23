import { api } from  './api';

export const READ_COMMENTS = 'READ_COMMENTS';
export const CREATE_COMMENT = 'CREATE_COMMENTS';

export const DEFAULT_LIMIT_COMMENT = 3;

export function readComments(postId){
  const request = api.get(`/comments?postId=${postId}`);
  return {
    type: READ_COMMENTS,
    payload: request
  }
}

export function readMoreComments(postId, startId){
  const request = api.get(`posts/${postId}/comments?_start=${startId}&_limit=${DEFAULT_LIMIT_COMMENT}`);
  return {
    type: READ_COMMENTS,
    payload: request
  }
}

export function createComment(comment){
  console.log(comment);
  let request = api.post(`/posts/${comment.postId}/comments`, comment, {headers : {'Content-Type': 'application/json'}});
  return {
    type: CREATE_COMMENT,
    payload: request
  }
}
