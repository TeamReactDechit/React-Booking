import * as types from "../actionTypes";
import * as usersApi from "../../api/usersApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";

export function loadUtenteSuccess(user) {
    return { type: types.LOGIN_SUCCESS, user };
  }
  
  export function loadLogin(user) {
      return function(dispatch) {
        dispatch(beginApiCall());
        return usersApi
          .getAuthUser(user)
          .then(user => {
            dispatch(loadUtenteSuccess(user));
          })
          .catch(error => {
            dispatch(apiCallError(error));
            throw error;
          });
      };
    }

    export function loadNewUtenteSuccess(user) {
      return { type: types.CREATE_USER_SUCCESS, user };
    }
    
    export function saveNewUser(user) {
        return function(dispatch) {
          dispatch(beginApiCall());
          return usersApi
            .saveUser(user)
            .then(user => {
              dispatch(loadNewUtenteSuccess(user));
            })
            .catch(error => {
              dispatch(apiCallError(error));
              throw error;
            });
        };
      }