import { call, put, takeLatest } from 'redux-saga/effects';

import {
  GET_PHONE_NUMBER_REQUEST,
  LOGIN_REQUEST,
  ADD_DETAILS_REQUEST,
} from '../actions/types';
import { fetchPhoneNumber, amplifyAuth } from '../apiCalls';

import {
  getPhoneNumberSuccess,
  getPhoneNumberFailure,
  loginSuccess,
  loginFailure,
  addDetailsSuccess,
} from '../actions/signUpFlowActions';

function* phoneFetchHandler(action) {
  try {
    const data = yield call(fetchPhoneNumber, action.data);
    yield put(getPhoneNumberSuccess(data));
  } catch (e) {
    yield put(getPhoneNumberFailure(e));
  }
}

function* loginRequestHandler(action) {
  try {
    const data = yield call(amplifyAuth, action.data);
    yield put(loginSuccess(data));
  } catch (error) {
    yield put(loginFailure(error.message));
  }
}

function* addDetailsHandler(action) {
  try {
    yield put(addDetailsSuccess(action.data));
  } catch (e) {
    console.log(e);
  }
}

export function* signUpSaga() {
  yield takeLatest(GET_PHONE_NUMBER_REQUEST, phoneFetchHandler);
  yield takeLatest(LOGIN_REQUEST, loginRequestHandler);
  yield takeLatest(ADD_DETAILS_REQUEST, addDetailsHandler);
}
