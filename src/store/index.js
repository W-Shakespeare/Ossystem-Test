import setProcessor from "../Components/pages/ProcessorList/redux/reducers/redusersAddResult";
// import setUsersData from "../Components/PeopleList/redux/reducers/redusersAddResult";
import { createStore } from "redux";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  catalog: setProcessor,
});
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
