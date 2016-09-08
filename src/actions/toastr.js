export const CALL_TOASTR = 'CALL_TOASTR';

export function callToastr(action, status) {
  const request = {action: action, status: status};
  return {
    type: CALL_TOASTR,
    payload: request
  }
}

