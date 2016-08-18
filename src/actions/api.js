import {create} from 'apisauce'

const ROOT_URL = 'http://localhost:3001';

export const api = create({
  baseURL: `${ROOT_URL}`
})
