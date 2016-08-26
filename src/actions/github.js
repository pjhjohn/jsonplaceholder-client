import { githubApi } from './api';

export const LOAD_CONTRIBUTORS = 'LOAD_CONTRIBUTORS';
export const LOAD_LANGUAGES = 'LOAD_LANGUAGES'
export const LOAD_PULL_REQUESTS = 'LOAD_PULL_REQUESTS';
export const LOAD_ISSUES = 'LOAD_ISSUES';

export function loadContributors(path) {
  const request = githubApi.get(path);
  return {
    type: LOAD_CONTRIBUTORS,
    payload: request
  }
}

export function loadLanguages(path) {
  const request = githubApi.get(path);
  return {
    type: LOAD_LANGUAGES,
    payload: request
  }
}

export function loadPullRequests(path, query) {
  const request = githubApi.get(path, query);
  return {
    type: LOAD_PULL_REQUESTS,
    payload: request
  }
}

export function loadIssues(path, query) {
  const request = githubApi.get(path, query);
  return {
    type: LOAD_ISSUES,
    payload: request
  }
}
