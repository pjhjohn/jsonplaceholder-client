import { githubApi } from './api';

export const READ_CONTRIBUTORS = 'READ_CONTRIBUTORS';
export const READ_LANGUAGES = 'READ_LANGUAGES'
export const READ_PULL_REQUESTS = 'READ_PULL_REQUESTS';
export const READ_ISSUES = 'READ_ISSUES';

export function readContributors() {
  const request = githubApi.get(`/contributors`);
  return {
    type: READ_CONTRIBUTORS,
    payload: request
  }
}

export function readLanguages() {
  const request = githubApi.get(`/languages`);
  return {
    type: READ_LANGUAGES,
    payload: request
  }
}

export function readPullRequests(query) {
  const request = githubApi.get(`/pulls`, query);
  return {
    type: READ_PULL_REQUESTS,
    payload: request
  }
}

export function readIssues(query) {
  const request = githubApi.get(`/issues`, query);
  return {
    type: READ_ISSUES,
    payload: request
  }
}
