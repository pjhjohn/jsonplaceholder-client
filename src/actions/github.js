import { github } from './api';

export const LOAD_CONTRIBUTORS = 'LOAD_CONTRIBUTORS';
export const LOAD_LANGUAGES = 'LOAD_LANGUAGES'
export const LOAD_PULL_REQUESTS = 'LOAD_PULL_REQUESTS';

export function loadContributors(query) {
  const request = github.get(query);
  return {
    type: LOAD_CONTRIBUTORS,
    payload: request
  }
}

export function loadLanguages(query) {
  const request = github.get(query);
  return {
    type: LOAD_LANGUAGES,
    payload: request
  }
}

export function loadPullRequests(query) {
  const request = github.get(query);
  return {
    type: LOAD_PULL_REQUESTS,
    payload: request
  }
}
