import { api } from  './api';

export const CREATE_POST = 'CREATE_POST';
export const READ_POST  = 'READ_POST';
export const READ_INITIAL_POSTS = 'READ_INITIAL_POSTS';
export const READ_MORE_POSTS = 'READ_MORE_POSTS';
export const MODIFY_POST = 'MODIFY_POST';
export const DELETE_POST = 'DELETE_POST';

export const DEFAULT_POST_LIMIT = 16;
const BASE_QUERY = {'_limit': DEFAULT_POST_LIMIT};

export function createPost(post) {
  const request = api.post(`/posts`, post, {headers : {'Content-Type': 'application/json'}});
  return {
    type: CREATE_POST,
    payload: request
  }
}

export function readPost(postId) {
  const request = api.get(`/posts/${postId}`);
  return {
    type: READ_POST,
    payload: request
  };
}

export function readInitialPosts() {
  const request = api.get(`/posts`, BASE_QUERY);
  return {
    type: READ_INITIAL_POSTS,
    payload: request
  };
}

export function readMorePosts(query) {
  const request = api.get(`/posts`, Object.assign(BASE_QUERY, query));
  return {
    type: READ_MORE_POSTS,
    payload: request
  };
}

export function modifyPost(query) {
  const request = api.put(`/posts/${query.id}`, query);
  return {
    type: MODIFY_POST,
    payload: request
  }
}

export function deletePost(postId) {
  const request = api.delete(`/posts/${postId}`);
  return {
    type: DELETE_POST,
    payload: request
  };
}
