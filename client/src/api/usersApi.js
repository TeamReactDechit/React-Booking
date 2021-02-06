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
    .then(data => console.log(data))
    .catch(handleError);
}