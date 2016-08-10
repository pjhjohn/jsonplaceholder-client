import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_SINGLE_POST = 'FETCH_SINGLE_POST';

export function fetchPosts(){
  const url = 'http://localhost:3001/posts';
  const request = axios.get(url);

  return {
    type: FETCH_POSTS,
    payload: request
  };
}

export function fetchSinglePost(postId){
  const url = 'http://localhost:3001/posts' + postId;
  const request = axios.get(url);

  return {
    type: FETCH_SINGLE_POST,
    payload: request
  };
}