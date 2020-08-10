import {
  DELETE_PROCESSOR,
  CLEAR_ALL_PROCESSORS,
  CHANGE_AUTHORIZATION_STATUS,
} from "../types/types";

function deleteProcessor(id) {
  return {
    type: DELETE_PROCESSOR,
    payload: id,
  };
}
function clearAllProcessors(nothing) {
  return {
    type: CLEAR_ALL_PROCESSORS,
    payload: nothing,
  };
}
function changeAuthorizationStatus() {
  return {
    type: CHANGE_AUTHORIZATION_STATUS,
  };
}

export { deleteProcessor, clearAllProcessors, changeAuthorizationStatus };
