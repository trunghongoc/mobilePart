// @flow
import { combineReducers } from 'redux';
import menuReducer from './menuReducer';
import fetchDReducer from './testSagaReducer';

const rootReducer = combineReducers({
    menuReducer,
    fetchDReducer
})

export default rootReducer;