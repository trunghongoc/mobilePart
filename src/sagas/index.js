// @flow
import { fork } from 'redux-saga/effects';
import { watchFetchData } from './fetch_data';

export default function* rootSaga(): Generator<any, any, any> {
    yield fork(watchFetchData)
}