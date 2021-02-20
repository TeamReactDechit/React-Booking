import { combineReducers } from "redux";
import user from "./usersReducer";
import prenotations from "./prenotationsReducer";
import locations from "./locationsReducer";
import seats from "./seatsReducer";
import apiCallsInProgress from "./apiStatusReducer";

const rootReducer = combineReducers({
  user,
  prenotations,
  locations,
  seats,
  apiCallsInProgress,
});

export default rootReducer;
