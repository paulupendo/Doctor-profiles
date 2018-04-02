import {
  GET_PHONE_NUMBER_SUCCESS,
  GET_PHONE_NUMBER_FAILURE,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
} from '../actions/types';
import initialState from './initialState';

export default (state = initialState.signUpStats, action) => {
  switch (action.type) {
    case GET_PHONE_NUMBER_SUCCESS:
      return { ...state, fetchPhone: action.data };
    case GET_PHONE_NUMBER_FAILURE:
      return { ...state, errorMessage: action.data };
    case LOGIN_SUCCESS:
      return { ...state, signInStatus: action.data };
    case LOGIN_FAILURE:
      return { ...state, errorMessage: action.data };
    default:
      return state;
  }
};
