/************ actions ************/
import * as ActionTypes from './actionTypes';
import { handleActions } from 'redux-actions';

export function actFetchData(value) {
    return {
        type: ActionTypes.FETCH_DATA_BY_SAGA,
        payload: value
    }
}

export function actFetchDataAlertOK(value) {
    return {
        type: ActionTypes.FETCH_DATA_BY_SAGA_ALERT_OK,
        payload: value
    }
}

export function actFetchDataAlertFail(value) {
    return {
        type: ActionTypes.FETCH_DATA_BY_SAGA_ALERT_FAIL,
        payload: value
    }
}


/************ reducer ************/

export const initialState = {
    data: [],
    success: null,
    meta: ''
}

const fetchDReducer = handleActions({
  [ActionTypes.FETCH_DATA_BY_SAGA]: (state: any, action: any): any => {
    return { ...state }
  },
  [ActionTypes.FETCH_DATA_BY_SAGA_ALERT_OK]: (state: any, action: any): any => {
    return { ...state, ...action.payload  }
  },
  [ActionTypes.FETCH_DATA_BY_SAGA_ALERT_FAIL]: (state: any, action: any): any => {
    return { ...state, ...action.payload  }
  }
}, initialState)

export default fetchDReducer;
