import * as types from "../types/usersTypes";
import initialState from "./initialState";

export default function utenteReducer(state = initialState.user, action) {
    switch (action.type) {
      case types.LOGIN_SUCCESS:
        return action.utente;
      default:
        return state;
    }
  }