import { githubApi } from './api';

export const READ_ISSUES = 'READ_ISSUES';

export function readIssues(query) {
  const request = githubApi.get(`/issues`, query);
  return {
    type: READ_ISSUES,
    payload: request
  }
}
