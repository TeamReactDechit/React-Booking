import { handleResponse, handleError } from "./apiUtils";
import initialState  from "../redux/reducers/initialState";

export function getAuthUser(user) {
  return fetch(initialState.baseurl + "/login",{
    method: "POST",
    headers: { 
      "content-type": "application/json"
    },
    body: JSON.stringify(user)
  })
    .then(handleResponse)
    .catch(handleError);
}

export function saveUser(user) {
  return fetch(initialState.baseurl + "/user",{
    method: "POST",
    headers: { 
      "content-type": "application/json"
    },
    body: JSON.stringify(user)
  })
    .then(handleResponse)
    .catch(handleError);
}