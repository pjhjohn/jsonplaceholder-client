import { githubApi } from './api';

export const READ_README = 'READ_README';

export function readReadme() {
  const request = githubApi.get(`/readme`);
  return {
    type: READ_README,
    payload: request
  }
}
