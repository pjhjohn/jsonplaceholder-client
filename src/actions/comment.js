import { api } from  './api';

export const READ_COMMENTS = 'READ_COMMENTS';
export const READ_MORE_COMMENTS = 'READ_MORE_COMMENTS'
export const CREATE_COMMENT = 'CREATE_COMMENTS';

export const DEFAULT_LIMIT_COMMENT = 3;

const COMMENT_QUERY = {'_limit': DEFAULT_LIMIT_COMMENT};

export function readComments(postId){
  const request = api.get(`/comments?postId=${postId}`);
  return {
    type: READ_COMMENTS,
    payload: request
  }
}

export function readMoreComments(query){
  const request = api.get(`/comments`, Object.assign(COMMENT_QUERY, query));
  return {
    type: READ_MORE_COMMENTS,
    payload: request
  }
}

export function createComment(comment){
  let request = api.post(`/comments`, comment, {headers : {'Content-Type': 'application/json'}});
  return {
    type: CREATE_COMMENT,
    payload: request
  }
}
