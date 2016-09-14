import { api } from  './api';

export const READ_PHOTO = 'READ_PHOTO';
export const READ_INITIAL_PHOTOS = 'READ_INITIAL_PHOTOS';
export const READ_MORE_PHOTOS = 'READ_MORE_PHOTOS';

export const DEFAULT_PHOTO_LIMIT = 16;

const BASE_QUERY = {'_limit': DEFAULT_PHOTO_LIMIT};

export function readPhoto(photoId) {
  const request = api.get(`/photos/${photoId}`);
  return {
    type: READ_PHOTO,
    payload: request
  };
}

export function readInitialPhotos(query={}) {
  const request = api.get(`/photos`, { ...BASE_QUERY, ...query });
  return {
    type: READ_INITIAL_PHOTOS,
    payload: request
  };
}

export function readMorePhotos(query={}) {
  const request = api.get(`/photos`, { ...BASE_QUERY, ...query });
  return {
    type: READ_MORE_PHOTOS,
    payload: request
  };
}
