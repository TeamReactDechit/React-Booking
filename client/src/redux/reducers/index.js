import { combineReducers } from "redux";
import user from './usersReducer';
import prenotations from './prenotationsReducer';
import apiCallsInProgress from "./apiStatusReducer";

const rootReducer = combineReducers({
  user,
  prenotations,
  apiCallsInProgress
});

export default rootReducer;
