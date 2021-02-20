import { handleResponse, handleError } from "./apiUtils";
import initialState  from "../redux/reducers/initialState";

export function getSeatLocations(seat) {debugger
  return fetch(initialState.baseurl + "/seat/"+seat.sedia_id,{
    method: "GET",
    headers: { 
      "content-type": "application/json"
    },
  })
    .then(handleResponse)
    .catch(handleError);
}
