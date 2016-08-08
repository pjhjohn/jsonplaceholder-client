import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_SINGLE_POST = 'FETCH_SINGLE_POST';

export function fetchPosts(){
  const url = 'https://jsonplaceholder.typicode.com/posts';
  const request = axios.get(url);

  return {
    type: FETCH_POSTS,
    payload: request
  };
}

export function fetchSinglePost(postId){
  const url = 'https://jsonplaceholder.typicode.com/posts/' + postId;
  const request = axios.get(url);

  return {
    type: FETCH_SINGLE_POST,
    payload: request
  };
}