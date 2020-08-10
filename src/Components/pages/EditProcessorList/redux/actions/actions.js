import { ADD_PROCESSOR } from "../types/types";

function addProcessor(obj) {
  return {
    type: ADD_PROCESSOR,
    payload: obj,
  };
}
export { addProcessor };
