/************ actions ************/
import * as ActionTypes from './actionTypes';

/**
 * Get navigation history
 * @param null
 */
export function actGetHistory(value) {
    return {
        type: ActionTypes.GET_NAVIGATION_HISTORY,
        payload: value
    }
}

/**
 * Update navigation history
 * @param Object { currentScreen, prevScreen }
 */
export function actSetHistory(value) {
    return {
        type: ActionTypes.SET_NAVIGATION_HISTORY,
        payload: value
    }
}

/**
 * Update navigation history
 * @param Object { currentScreen, prevScreen }
 */
export function actRemoveLastHistory(value) {
    return {
        type: ActionTypes.REMOVE_LAST_NAVIGATION_HISTORY,
        payload: value
    }
}

/************ reducer ************/
import { handleActions } from 'redux-actions';

export const initialState = {
    currentScreen: 'Home',
    prevScreen: 'Home',
    history: ['Home']
}


const navigationReducer = handleActions({
    [ActionTypes.GET_NAVIGATION_HISTORY]: (state: Object, action: any): any => {
        return state;
    },
    [ActionTypes.SET_NAVIGATION_HISTORY]: (state: Object, action: Object): any => {
        let newState = state;
        const indexOfNewSceenInHistory = newState.history.indexOf(action.payload.currentScreen);
        // remove old position
        if (indexOfNewSceenInHistory !== -1) {
            newState.history.splice(indexOfNewSceenInHistory, 1);
        }
        // push
        newState.history.push(action.payload.currentScreen);
        newState = { ...newState, ...action.payload };
        return { ...state, ...newState };
    },
    [ActionTypes.REMOVE_LAST_NAVIGATION_HISTORY]: (state: Object, action: any): any => {
        let newState = state;
        newState.history.pop();
        return { ...state, ...newState };
    }
}, initialState)

export default navigationReducer;