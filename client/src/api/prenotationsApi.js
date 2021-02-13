import { handleResponse, handleError } from "./apiUtils";
import initialState  from "../redux/reducers/initialState";


export function getPrenotations(date) {
    return fetch(initialState.baseurl + "/all/prenotations",{
      method: "POST",
      headers: { 
        "content-type": "application/json"
      },
      body: JSON.stringify(date)
    })
      .then(handleResponse)
      .catch(handleError);
  }