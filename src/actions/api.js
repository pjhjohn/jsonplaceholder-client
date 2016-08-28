import { create } from 'apisauce'

const BASE_URL = 'http://localhost:3001';

export const api = create({
  baseURL: `${BASE_URL}`
})

export const githubApi = create({
  baseURL: `https://api.github.com/repos/pjhjohn/jsonplaceholder-client`
})
