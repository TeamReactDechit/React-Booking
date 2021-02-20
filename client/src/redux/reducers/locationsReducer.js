import * as types from "../actionTypes";
import initialState from "./initialState";

export default function locationsReducer(state = initialState.locations,action) {
  switch (action.type) {
    case types.SET_LOCATIONS_SEATS_SUCCESS:
      return action.locations;
    default:
      return state;
  }
}
