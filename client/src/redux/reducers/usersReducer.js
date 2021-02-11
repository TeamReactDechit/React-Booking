import * as types from "../actionTypes";
import initialState from "./initialState";

export default function utenteReducer(state = initialState.user, action) {
    switch (action.type) {
      case types.LOGIN_SUCCESS:
        localStorage.setItem("utente", JSON.stringify(action.user.data));
      debugger;
        return action.user.data;
      default:
        return state;
    }
  }