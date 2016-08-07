import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';

export function fetchPosts(){
  const url = 'https://jsonplaceholder.typicode.com/posts';
  const request = axios.get(url);

  return {
    type: FETCH_POSTS,
    payload: request
  };
}
