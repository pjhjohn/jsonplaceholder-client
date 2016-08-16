import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POST = 'FETCH_POST';
export const LOAD_POST = 'LOAD_POST';
export const PUSH_POST = 'PUSH_POST';

const ROOT_URL = 'http://localhost:3001';

const OFFSET = 16;

export function fetchPosts(start){
  const url = `${ROOT_URL}/posts?_start=${start}&_limit=${OFFSET}`;
  const request = axios.get(url);
  return {
    type: FETCH_POSTS,
    payload: request
  };
}

export function fetchPost(postId){
  const url = `${ROOT_URL}/posts/${postId}`;
  const request = axios.get(url);
  return {
    type: FETCH_POST,
    payload: request
  };
}

export function loadPost(){
  const url = `${ROOT_URL}/posts`;
  const request = axios.get(url);
  return {
    type: LOAD_POST,
    payload: request
  }
}

export function pushPost(post){
  const url = `${ROOT_URL}/posts`;
  const request = axios.post(url, post, {headers : {'Content-Type': 'application/json'}});
  return {
    type: PUSH_POST,
    payload: request
  };
}
