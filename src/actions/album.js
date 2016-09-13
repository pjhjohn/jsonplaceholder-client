import { api } from  './api';

export const READ_INITIAL_ALBUMS = 'READ_INITIAL_ALBUMS';
export const READ_MORE_ALBUMS = 'READ_MORE_ALBUMS';

export const DEFAULT_ALBUM_LIMIT = 16;

const BASE_QUERY = {'_limit': DEFAULT_ALBUM_LIMIT};

export function readInitialAlbums(query={}) {
  const request = api.get(`/albums`, { ...BASE_QUERY, ...query });
  return {
    type: READ_INITIAL_ALBUMS,
    payload: request
  };
}

export function readMoreAlbums(query={}) {
  const request = api.get(`/albums`, { ...BASE_QUERY, ...query });
  return {
    type: READ_MORE_ALBUMS,
    payload: request
  };
}
