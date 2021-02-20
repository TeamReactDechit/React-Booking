import * as types from "../actionTypes";
import * as locationsApi from "../../api/locationsApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";

export function loadDataLocattionsSeatsSuccess(locations) {
  return { type: types.SET_LOCATIONS_SEATS_SUCCESS, locations };
}

export function findAllLocattionsSeats() {
  return function (dispatch) {
    dispatch(beginApiCall());
    return locationsApi
      .getLocationsandSeats()
      .then((locations) => {
        dispatch(loadDataLocattionsSeatsSuccess(locations));
      })
      .catch((error) => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}
