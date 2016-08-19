import { api } from  './api';

export const CREATE_POST = 'CREATE_POST';
export const READ_POSTS = 'READ_POSTS';
export const READ_MORE_POSTS = 'READ_MORE_POSTS';
export const READ_POST  = 'READ_POST';
export const DELETE_POST = 'DELETE_POST';

const OFFSET = 16;

export function createPost(post) {
  const request = api.post(`/posts`, post, {headers : {'Content-Type': 'application/json'}});
  return {
    type: CREATE_POST,
    payload: request
  }
}

export function readPosts() {
  const request = api.get(`/posts?_start=0&_limit=${OFFSET}`)
  return {
    type: READ_POSTS,
    payload: request
  };
}

export function readMorePosts(startId) {
  const request = api.get(`/posts?_start=${startId}&_limit=${OFFSET}`)
  return {
    type: READ_MORE_POSTS,
    payload: request
  };
}

export function readPost(postId) {
  const request = api.get(`/posts/${postId}`);
  return {
    type: READ_POST,
    payload: request
  };
}

export function deletePost(postId){
  const request = api.delete(`/posts/${postId}`);
  return {
    type: DELETE_POST,
    payload: request
  };
}
