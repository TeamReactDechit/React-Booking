import * as types from "../actionTypes";
import initialState from "./initialState";

export default function prenotationsReducer(state = initialState.prenotations, action) {
    switch (action.type) {
      case types.SET_PRENOTATIONS_SUCCESS:
          debugger
        return action.prenotations.data;
      default:
        return state;
    }
  }