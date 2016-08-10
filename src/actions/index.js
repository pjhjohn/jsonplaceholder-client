import axios from 'axios';

export const FETCH_ALL_POSTS = 'FETCH_ALL_POSTS';
export const FETCH_SINGLE_POST = 'FETCH_SINGLE_POST';

const ROOT_URL = 'https://jsonplaceholder.typicode.com';

export function fetchAllPosts(){
  const url = ROOT_URL+'/posts';
  const request = axios.get(url);

  return {
    type: FETCH_ALL_POSTS,
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
