import * as types from "../actionTypes";
import * as seatsApi from "../../api/seatsApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";

export function loadSeatsSuccess(seat) {
    return { type: types.GET_SEATS_SUCCESS, seat };
  }
  
  export function getSeat(s) {
      return function(dispatch) {
        dispatch(beginApiCall());
        return seatsApi
          .getSeatLocations(s)
          .then(seat => {
            dispatch(loadSeatsSuccess(seat));
          })
          .catch(error => {
            dispatch(apiCallError(error));
            throw error;
          });
      };
    }