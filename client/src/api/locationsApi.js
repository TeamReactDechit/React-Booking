import { handleResponse, handleError } from "./apiUtils";
import initialState  from "../redux/reducers/initialState";


export function getLocationsandSeats() {
    return fetch(initialState.baseurl + "/mappa",{
      method: "GET",
      headers: { 
        "content-type": "application/json"
      }
    })
      .then(handleResponse)
      .catch(handleError);
  }