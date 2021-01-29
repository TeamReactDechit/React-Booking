import { combineReducers } from "redux";
import users from './usersReducer';
import apiCallsInProgress from "./apiStatusReducer";

const rootReducer = combineReducers({
  users,
  apiCallsInProgress
});

export default rootReducer;
