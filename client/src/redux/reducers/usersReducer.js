import * as types from "../actionTypes";
import initialState from "./initialState";

export default function usersReducer(state = initialState.user, action) {
    switch (action.type) {
      case types.LOGIN_SUCCESS:
        localStorage.setItem("utente", JSON.stringify(action.user.data));
        return action.user.data;
      case types.CREATE_USER_SUCCESS:
        debugger;
        return [...state,{...action.user.data}];
      default:
        return state;
    }
  }