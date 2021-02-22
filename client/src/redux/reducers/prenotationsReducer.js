import * as types from "../actionTypes";
import initialState from "./initialState";

export default function prenotationsReducer(state = initialState.prenotations, action) {
    switch (action.type) {
      case types.SET_PRENOTATIONS_SUCCESS:
        return action.prenotations;
      case types.SAVE_PRENOTATION_SUCCESS:
        return action.prenotations;
      default:
        return state;
    }
  }