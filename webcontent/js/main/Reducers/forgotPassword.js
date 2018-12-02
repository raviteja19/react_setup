import * as types from '../actions/actionTypes';
import initialState from './intialstate';

export default function ForgotPassword(state = initialState.forgotpassword, action) {
    switch (action.type) {
    case types.forgotPassword:
      return action.data;
  
    default:
      return state;
  }
  }