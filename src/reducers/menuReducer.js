/************ actions ************/
import * as ActionTypes from './actionTypes';

/**
 * Get all badge of menu
 * @param null
 */
export function actGetBadge(value) {
    return {
        type: ActionTypes.GET_BADGE_MENU,
        payload: value
    }
}

/**
 * Update badge of a menu
 * @param Object { menuKey, number }
 */
export function actSetBadge(value) {
    return {
        type: ActionTypes.SET_BADGE_MENU,
        payload: value
    }
}

/************ reducer ************/
import { handleActions } from 'redux-actions';

export const initialState = {
    badgeOf: {
        Home: null,
        MyProfile: 2,
        News: 0,
        Notifications: 17
    }
}

const menuReducer = handleActions({
    [ActionTypes.GET_BADGE_MENU]: (state: Object, action: any): any => {
        return state;
    },
    [ActionTypes.SET_BADGE_MENU]: (state: Object, action: Object): any => {
        let newState = state;
        newState.badgeOf[action.payload.menuKey] = action.payload.number;
        return { ...state, ...newState };
    },
}, initialState)

export default menuReducer;