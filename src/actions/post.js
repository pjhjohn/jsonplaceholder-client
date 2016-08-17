import axios from 'axios';

import * as C from './const';

export const CREATE_POST = 'CREATE_POST';
export const READ_POSTS = 'READ_POSTS';
export const READ_POST  = 'READ_POST';
export const DELETE_POST = 'DELETE_POST';

const OFFSET = 16;

export function createPost(post) {
  const request = axios.post(`${C.ROOT_URL}/posts`, post, {headers : {'Content-Type': 'application/json'}});
  return {
    type: CREATE_POST,
    payload: request
  }
}

export function readPosts(startId) {
  const request = axios.get(`${C.ROOT_URL}/posts?_start=${startId}&_limit=${OFFSET}`);
  return {
    type: READ_POSTS,
    payload: request
  };
}

export function readPost(postId) {
  const request = axios.get(`${C.ROOT_URL}/posts/${postId}`);
  return {
    type: READ_POST,
    payload: request
  };
}

export function deletePost(postId){
  const request = axios.delete(`${C.ROOT_URL}/posts/${postId}`);
  return {
    type: DELETE_POST,
    payload: request
  };
}
