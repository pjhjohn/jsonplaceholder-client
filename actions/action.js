import fetch from 'isomorphic-fetch'

/*
  action types
*/
//export const GET_POST = "GET_POST"


/*
* action creator
*/

export function fetchPost() {
  console.log("fetch")
  return dispatch => {
    return fetch('http://jsonplaceholder.typicode.com/posts/', { method: 'GET' })
      .then(response => response.json())
      .then(json => dispatch(addPost(json)))
  }
}
