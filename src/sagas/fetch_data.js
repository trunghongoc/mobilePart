// @flow
import { call, put, takeLatest, all } from 'redux-saga/effects';
import * as ActionTypes from './../reducers/actionTypes';
import { actFetchDataAlertOK, actFetchDataAlertFail } from './../reducers/testSagaReducer';
import { fetchDataPromiseSagaFunc } from './../services/api';

export function* getData(action) {
    // const { data, error }  = yield call(fetchDataPromiseSagaFunc, action.payload, action.meta)
    const { resultFetch } = yield all({
        resultFetch: call(fetchDataPromiseSagaFunc, action.payload, action.meta)
    })
    const { data, error } = resultFetch
    if (data && !error) {
        const payload = {}
        payload.data = data.body
        const meta = { statusCode: data.statusCode }
        yield put(actFetchDataAlertOK({data: payload.data, meta, success: true}))
    } else {
        yield put(actFetchDataAlertFail({success: false}))
    }
}

export function* watchFetchData() {
  yield takeLatest(ActionTypes.FETCH_DATA_BY_SAGA, getData);
}