import * as types from "../actionTypes";
import initialState from "./initialState";

export default function seatsReducer(state = initialState.seats, action) {
    switch (action.type) {
      case types.GET_SEATS_SUCCESS:
        return action.seat;
      default:
        return state;
    }
  }