import { api } from  './api';

export const READ_PHOTO = 'READ_PHOTO';
export const READ_INITIAL_PHOTO = 'READ_INITIAL_PHOTO';
export const READ_MORE_PHOTO = 'READ_MORE_PHOTO';

export const DEFAULT_ALBUM_LIMIT = 16;
const BASE_QUERY = {'_limit': DEFAULT_ALBUM_LIMIT};

export function readPhoto(photoId) {
  const request = api.get(`/photos/${photoId}`);
  return {
    type: READ_PHOTO,
    payload: request
  };
}

export function readInitialPhoto(albumId) {
  const request = api.get(`/photos`, Object.assign({'albumId': albumId}, BASE_QUERY));
  return {
    type: READ_INITIAL_PHOTO,
    payload: request
  };
}

export function readMorePhoto(albumId, query) {
  const request = api.get(`/photos`, Object.assign(albumId, BASE_QUERY, query));
  return {
    type: READ_MORE_PHOTO,
    payload: request
  };
}
