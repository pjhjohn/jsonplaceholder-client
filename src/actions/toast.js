export const NOTIFICATION = 'NOTIFICATION';

export function notify(type, httpStatus, date=Date()) {
  const request = {type: type, httpStatus: httpStatus, date: date};
  return {
    type: NOTIFICATION,
    payload: request
  }
}
