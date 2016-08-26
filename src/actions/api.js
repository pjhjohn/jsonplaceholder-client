import { create } from 'apisauce'

const BASE_URL = 'http://localhost:3001';

export const api = create({
  baseURL: `${BASE_URL}`
})

export const github = create({
  baseURL: `https://api.github.com`
})
