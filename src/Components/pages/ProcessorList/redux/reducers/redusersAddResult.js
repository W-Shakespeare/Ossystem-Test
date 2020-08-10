import {
  DELETE_PROCESSOR,
  CLEAR_ALL_PROCESSORS,
  CHANGE_AUTHORIZATION_STATUS,
} from "./../types/types";
import { ADD_PROCESSOR } from "../../../EditProcessorList/redux/types/types";
import processor from "../../../../../untils/processor";

const initialState = {
  processor,
  isAdmin: false,
};

function setProcessor(state = initialState, action) {
  // debugger;
  switch (action.type) {
    case DELETE_PROCESSOR:
      return {
        ...state,
        processor: deleteProcessor(action.payload, state),
      };
    case CLEAR_ALL_PROCESSORS:
      return {
        ...state,
        processor: [],
      };
    case ADD_PROCESSOR:
      return {
        ...state,
        processor: [...state.processor, action.payload],
      };
    case CHANGE_AUTHORIZATION_STATUS:
      return {
        ...state,
        isAdmin: !state.isAdmin,
      };
    default:
      return state;
  }
}
export default setProcessor;

const deleteProcessor = (id, state) => {
  console.log("DELETE_PROCESSOR", id);
  return state.processor.filter((processor) => processor.id !== id);
};
