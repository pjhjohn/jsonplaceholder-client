import axios from 'axios';

export const FETCH_INIT_POSTS = 'FETCH_INIT_POSTS';
export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_SINGLE_POST = 'FETCH_SINGLE_POST';

const ROOT_URL = 'https://jsonplaceholder.typicode.com';

export function fetchInitPosts(){
  const url = `${ROOT_URL}/posts?_end=8`;
  const request = axios.get(url);

  return {
    type: FETCH_INIT_POSTS,
    payload: request
  };
}

const OFFSET = 16;
export function fetchPosts(start){
  const url = `${ROOT_URL}/posts?_start=${start}&_limit=${OFFSET}`;
  const request = axios.get(url);

  return {
    type: FETCH_INIT_POSTS,
    payload: request
  };
}

export function fetchSinglePost(postId){
  const url = `${ROOT_URL}/posts/${postId}`;
  const request = axios.get(url);

  return {
    type: FETCH_SINGLE_POST,
    payload: request
  };
}
