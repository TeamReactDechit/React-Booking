import { combineReducers } from "redux";
import user from "./usersReducer";
import prenotations from "./prenotationsReducer";
import locations from "./locationsReducer";
import apiCallsInProgress from "./apiStatusReducer";

const rootReducer = combineReducers({
  user,
  prenotations,
  locations,
  apiCallsInProgress,
});

export default rootReducer;
