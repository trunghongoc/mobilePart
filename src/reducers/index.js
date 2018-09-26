// @flow
import { combineReducers } from 'redux';
import fetchDReducer from './testSagaReducer';
import menuReducer from './menuReducer';
import navigationReducer from './navigationReducer';

const rootReducer = combineReducers({
    fetchDReducer,
    menuReducer,
    navigationReducer
})

export default rootReducer;