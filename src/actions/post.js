import { api } from  './api';
import { CREATE_POST, READ_POSTS, READ_POST, DELETE_POST} from './types';

const OFFSET = 16;

export function createPost(post) {
  const request = api.post(`/posts`, post, {headers : {'Content-Type': 'application/json'}});
  return {
    type: CREATE_POST,
    payload: request
  }
}

export function readPosts(startId) {
  const request = api.get(`/posts?_start=${startId}&_limit=${OFFSET}`)
  return {
    type: READ_POSTS,
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
