export const NOTIFICATION = 'NOTIFICATION';

export function notify(type, httpStatus) {
  const request = {type: type, httpStatus: httpStatus};
  return {
    type: NOTIFICATION,
    payload: request
  }
}

