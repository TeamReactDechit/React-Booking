import { handleResponse, handleError } from "./apiUtils";
import initialState  from "../redux/reducers/initialState";

export function getSeatLocations(id) {
  return fetch(initialState.baseurl + "/seat/"+id,{
    method: "GET",
    headers: { 
      "content-type": "application/json"
    },
  })
    .then(handleResponse)
    .catch(handleError);
}
