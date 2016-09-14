import { api } from  './api';

export const CREATE_COMMENT = 'CREATE_COMMENT';
export const READ_INITIAL_COMMENTS = 'READ_INITIAL_COMMENTS';
export const READ_MORE_COMMENTS = 'READ_MORE_COMMENTS'

export const DEFAULT_LIMIT_COMMENT = 3;

const BASE_QUERY = {'_limit': DEFAULT_LIMIT_COMMENT};

export function readInitialComments(postId) {
  const request = api.get(`/comments?postId=${postId}`);
  return {
    type: READ_INITIAL_COMMENTS,
    payload: request
  }
}

export function readMoreComments(query={}) {
  const request = api.get(`/comments`, { ...BASE_QUERY, ...query });
  return {
    type: READ_MORE_COMMENTS,
    payload: request
  }
}

export function createComment(comment) {
  let request = api.post(`/comments`, comment, {headers : {'Content-Type': 'application/json'}});
  return {
    type: CREATE_COMMENT,
    payload: request
  }
}
