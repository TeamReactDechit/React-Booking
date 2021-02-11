import { combineReducers } from "redux";
import user from './usersReducer';
import apiCallsInProgress from "./apiStatusReducer";

const rootReducer = combineReducers({
  user,
  apiCallsInProgress
});

export default rootReducer;
