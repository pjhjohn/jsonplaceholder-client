import { api } from  './api';

export const READ_ALBUM = 'READ_ALBUM';
export const READ_INITIAL_ALBUM = 'READ_INITIAL_ALBUM';
export const READ_MORE_ALBUM = 'READ_MORE_ALBUM';

export const DEFAULT_PHOTO_LIMIT = 16;
const BASE_QUERY = {'_limit': DEFAULT_PHOTO_LIMIT};

export function readAlbum(albumId) {
  const request = api.get(`/photos`, {'albumId': albumId});
  return {
    type: READ_ALBUM,
    payload: request
  };
}

export function readInitialAlbum() {
  const request = api.get(`/albums`, BASE_QUERY);
  return {
    type: READ_INITIAL_ALBUM,
    payload: request
  };
}

export function readMoreAlbum(query) {
  const request = api.get(`/albums`, Object.assign(BASE_QUERY, query));
  return {
    type: READ_MORE_ALBUM,
    payload: request
  };
}
