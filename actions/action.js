import fetch from 'isomorphic-fetch'

export function fetchPost() {
  return dispatch => {
    return fetch('http://jsonplaceholder.typicode.com/posts/', { method: 'GET' })
      .then(response => response.json())
      .then(json => dispatch(addPost(json)))
  }
}
