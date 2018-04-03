import {
  GET_PHONE_NUMBER_REQUEST,
  GET_PHONE_NUMBER_SUCCESS,
  GET_PHONE_NUMBER_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  ADD_DETAILS_REQUEST,
  ADD_DETAILS_SUCCESS,
} from './types';

export const fetchPhone = data => ({
  type: GET_PHONE_NUMBER_REQUEST,
  data,
});

export const getPhoneNumberSuccess = data => ({
  type: GET_PHONE_NUMBER_SUCCESS,
  data,
});

export const getPhoneNumberFailure = data => ({
  type: GET_PHONE_NUMBER_FAILURE,
  data,
});

export const loginRequest = data => ({
  type: LOGIN_REQUEST,
  data,
});

export const loginSuccess = data => ({
  type: LOGIN_SUCCESS,
  data,
});

export const loginFailure = data => ({
  type: LOGIN_FAILURE,
  data,
});

export const addDetails = data => ({
  type: ADD_DETAILS_REQUEST,
  data,
});

export const addDetailsSuccess = data => ({
  type: ADD_DETAILS_SUCCESS,
  data,
});
