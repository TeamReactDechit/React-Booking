import * as types from "../actionTypes";
import * as prenotationsApi from "../../api/prenotationsApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";


export function loadDataPrenotationsSuccess(prenotations) {
    return { type: types.SET_PRENOTATIONS_SUCCESS, prenotations };
  }
  
export function findAllPrenotations(prenotations) {
    return function(dispatch) {
    dispatch(beginApiCall());
    return prenotationsApi
        .getPrenotations(prenotations)
        .then(p => {
        dispatch(loadDataPrenotationsSuccess(p));
        })
        .catch(error => {
        dispatch(apiCallError(error));
        throw error;
        });
    };
}

export function loadSavePrenotationSuccess(prenotations) {
    return { type: types.SAVE_PRENOTATION_SUCCESS, prenotations };
  }
  
export function savePrenotations(prenotations) {
    return function(dispatch) {
    dispatch(beginApiCall());
    return prenotationsApi
        .savePrenotation(prenotations)
        .then(p => {
        dispatch(loadSavePrenotationSuccess(p));
        })
        .catch(error => {
        dispatch(apiCallError(error));
        throw error;
        });
    };
}